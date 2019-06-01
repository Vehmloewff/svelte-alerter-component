# svelte-alerter-component
Easily add custom alerts to your svelte app

## Usage
Add it to your svelte project:
```shell
$ npm i svelte-alerter-component --save
```
Then, pop it into the component that suites you:
```html
<script>
	import AlerterComponent from 'svelte-alerter-component/component';
</script>

<Alerter/>
```
Then, from any page or component you need to, create a new alert:

```js
import Alerter from 'svelte-alerter-component';

new Alerter({
	title: "Like this alert?" // or a svelte component instance
	style: "background: green; border-radius: 1px;"  // Optional
	time: 3000 // Alert will disapear in 3 seconds.  If no value is specified, the alert will not disapear automaticly
})

// or

let myAlert = new Alerter({
	title: "My Alert"
})
myAlert.show();  // Show the alert
myAlert.hide();  // Hide the alert
myAlert.remove();  // Remove the alert
```

## Help
Never be afraid to ask: emooring@protonmail.com or Vehmloewff#0724

## Bugs
Found an problem? [Submit an issue](https://github.com/Vehmloewff/svelte-alerter-component/issues/new) or ping me on Discord: Vehmloewff#0724.