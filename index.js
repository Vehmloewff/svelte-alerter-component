const { alerts } = require('./alerter.store');

module.exports = class Alerter {

	constructor({title, style, time, undo}, callback) {
		// Set the id
		this.id = new Date().getTime() * Math.random();
		this.callback = callback;

		// Set the optional values
		if (style == undefined) style = '';

		alerts.update(vals => {
			vals[this.id] = {title, style, time, id: this.id, hidden: false, timeCreated: new Date().getTime(), undo, callback};
			return vals;
		})

		if (time != undefined) {
			setTimeout(() => {
				alerts.update(vals => {
					delete vals[this.id];
					return vals;
				})
				callback();
			}, time);
		}
	}


	hide() {
		alerts.update(vals => {
			vals[this.id].hidden = true;
			return vals;
		})
	}
	show() {
		alerts.update(vals => {
			vals[this.id].hidden - false;
			return vals;
		})
	}
	remove() {
		alerts.update(vals => {
			delete vals[this.id];
			return vals;
		})
		this.callback();
	}
}