const { styles } = require('./alerter.styles');
const { alerts } = require('./alerter.store');

module.exports = class Alerter {

	constructor({title, style, time, undo}) {
		// Set the id
		this.id = new Date().getTime() * Math.random();

		// Set the optional values
		if (style == undefined) style = styles;

		alerts.update(vals => {
			vals[this.id] = {title, style, time, id: this.id, hidden: false, timeCreated: new Date().getTime(), undo};
			return vals;
		})

		if (time != undefined) {
			setTimeout(() => {
				alerts.update(vals => {
					delete vals[this.id];
					return vals;
				})
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
	}
}