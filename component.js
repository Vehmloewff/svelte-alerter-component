/* AlerterComponent.svelte generated by Svelte v3.4.4 */
const {
	SvelteComponent,
	add_render_callback,
	append,
	check_outros,
	create_animation,
	create_in_transition,
	create_out_transition,
	detach,
	element,
	empty,
	fix_and_outro_and_destroy_block,
	fix_position,
	group_outros,
	init,
	insert,
	mount_component,
	noop,
	on_outro,
	safe_not_equal,
	set_data,
	space,
	text,
	update_keyed_each
} = require("svelte/internal");
const { alerts } = require("./alerter.store.js");
const { flip } = require("svelte/animate");
const { fly } = require("svelte/transition");

function get_each_context(ctx, list, i) {
	const child_ctx = Object.create(ctx);
	child_ctx.eachAlert = list[i];
	return child_ctx;
}

// (31:3) {:else}
function create_else_block(ctx) {
	var switch_instance_anchor, current;

	var switch_value = ctx.eachAlert.title;

	function switch_props(ctx) {
		return {};
	}

	if (switch_value) {
		var switch_instance = new switch_value(switch_props(ctx));
	}

	return {
		c() {
			if (switch_instance) switch_instance.$$.fragment.c();
			switch_instance_anchor = empty();
		},

		m(target, anchor) {
			if (switch_instance) {
				mount_component(switch_instance, target, anchor);
			}

			insert(target, switch_instance_anchor, anchor);
			current = true;
		},

		p(changed, ctx) {
			if (switch_value !== (switch_value = ctx.eachAlert.title)) {
				if (switch_instance) {
					group_outros();
					const old_component = switch_instance;
					on_outro(() => {
						old_component.$destroy();
					});
					old_component.$$.fragment.o(1);
					check_outros();
				}

				if (switch_value) {
					switch_instance = new switch_value(switch_props(ctx));

					switch_instance.$$.fragment.c();
					switch_instance.$$.fragment.i(1);
					mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
				} else {
					switch_instance = null;
				}
			}
		},

		i(local) {
			if (current) return;
			if (switch_instance) switch_instance.$$.fragment.i(local);

			current = true;
		},

		o(local) {
			if (switch_instance) switch_instance.$$.fragment.o(local);
			current = false;
		},

		d(detaching) {
			if (detaching) {
				detach(switch_instance_anchor);
			}

			if (switch_instance) switch_instance.$destroy(detaching);
		}
	};
}

// (29:3) {#if typeof eachAlert.title == 'string'}
function create_if_block(ctx) {
	var t_value = ctx.eachAlert.title, t;

	return {
		c() {
			t = text(t_value);
		},

		m(target, anchor) {
			insert(target, t, anchor);
		},

		p(changed, ctx) {
			if ((changed.displayAlerts) && t_value !== (t_value = ctx.eachAlert.title)) {
				set_data(t, t_value);
			}
		},

		i: noop,
		o: noop,

		d(detaching) {
			if (detaching) {
				detach(t);
			}
		}
	};
}

// (27:1) {#each displayAlerts as eachAlert (eachAlert.id)}
function create_each_block(key_1, ctx) {
	var div, current_block_type_index, if_block, t, div_style_value, div_intro, div_outro, rect, stop_animation = noop, current;

	var if_block_creators = [
		create_if_block,
		create_else_block
	];

	var if_blocks = [];

	function select_block_type(ctx) {
		if (typeof ctx.eachAlert.title == 'string') return 0;
		return 1;
	}

	current_block_type_index = select_block_type(ctx);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	return {
		key: key_1,

		first: null,

		c() {
			div = element("div");
			if_block.c();
			t = space();
			div.style.cssText = div_style_value = ctx.eachAlert.style;
			this.first = div;
		},

		m(target, anchor) {
			insert(target, div, anchor);
			if_blocks[current_block_type_index].m(div, null);
			append(div, t);
			current = true;
		},

		p(changed, ctx) {
			var previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx);
			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(changed, ctx);
			} else {
				group_outros();
				on_outro(() => {
					if_blocks[previous_block_index].d(1);
					if_blocks[previous_block_index] = null;
				});
				if_block.o(1);
				check_outros();

				if_block = if_blocks[current_block_type_index];
				if (!if_block) {
					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block.c();
				}
				if_block.i(1);
				if_block.m(div, t);
			}

			if ((!current || changed.displayAlerts) && div_style_value !== (div_style_value = ctx.eachAlert.style)) {
				div.style.cssText = div_style_value;
			}
		},

		r() {
			rect = div.getBoundingClientRect();
		},

		f() {
			fix_position(div);
			stop_animation();
		},

		a() {
			stop_animation();
			stop_animation = create_animation(div, rect, flip, {});
		},

		i(local) {
			if (current) return;
			if (if_block) if_block.i();

			add_render_callback(() => {
				if (div_outro) div_outro.end(1);
				if (!div_intro) div_intro = create_in_transition(div, fly, {y: 100});
				div_intro.start();
			});

			current = true;
		},

		o(local) {
			if (if_block) if_block.o();
			if (div_intro) div_intro.invalidate();

			if (local) {
				div_outro = create_out_transition(div, fly, {y: 100});
			}

			current = false;
		},

		d(detaching) {
			if (detaching) {
				detach(div);
			}

			if_blocks[current_block_type_index].d();

			if (detaching) {
				if (div_outro) div_outro.end();
			}
		}
	};
}

function create_fragment(ctx) {
	var div, each_blocks = [], each_1_lookup = new Map(), current;

	var each_value = ctx.displayAlerts;

	const get_key = ctx => ctx.eachAlert.id;

	for (var i = 0; i < each_value.length; i += 1) {
		let child_ctx = get_each_context(ctx, each_value, i);
		let key = get_key(child_ctx);
		each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
	}

	return {
		c() {
			div = element("div");

			for (i = 0; i < each_blocks.length; i += 1) each_blocks[i].c();
			div.className = "over svelte-1bf4k80";
		},

		m(target, anchor) {
			insert(target, div, anchor);

			for (i = 0; i < each_blocks.length; i += 1) each_blocks[i].m(div, null);

			current = true;
		},

		p(changed, ctx) {
			const each_value = ctx.displayAlerts;

			group_outros();
			for (let i = 0; i < each_blocks.length; i += 1) each_blocks[i].r();
			each_blocks = update_keyed_each(each_blocks, changed, get_key, 1, ctx, each_value, each_1_lookup, div, fix_and_outro_and_destroy_block, create_each_block, null, get_each_context);
			for (let i = 0; i < each_blocks.length; i += 1) each_blocks[i].a();
			check_outros();
		},

		i(local) {
			if (current) return;
			for (var i = 0; i < each_value.length; i += 1) each_blocks[i].i();

			current = true;
		},

		o(local) {
			for (i = 0; i < each_blocks.length; i += 1) each_blocks[i].o();

			current = false;
		},

		d(detaching) {
			if (detaching) {
				detach(div);
			}

			for (i = 0; i < each_blocks.length; i += 1) each_blocks[i].d();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	
	let displayAlerts;

	alerts.subscribe(object => {
		$$invalidate('displayAlerts', displayAlerts = Object.values(object).sort((a, b) => {
			if (a.timeCreated < b.timeCreated) return 1;
			else return -1;
		}));
	})

	return { displayAlerts };
}

class AlerterComponent extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, []);
	}
}

module.exports = AlerterComponent;