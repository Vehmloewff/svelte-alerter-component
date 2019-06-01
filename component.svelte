<style>
	.over {
		--sides: 100px;
		z-index: 9000;
		position: fixed;
		bottom: 0;
		right: var(--sides);
		left: var(--sides);
	}
</style>

<script>
	import { alerts } from './alerter.store.js';
	import { flip } from 'svelte/animate';
	import { fly } from 'svelte/transition';
	let displayAlerts;

	alerts.subscribe(vals => {
		displayAlerts = Object.values(vals).sort((a, b) => {
			if (a.timeCreated > b.timeCreated) return -1;
			else return 1;
		})
	})
</script>

<div class="over">
	{#each displayAlerts as eachAlert (eachAlert.id)}
		<div style="{eachAlert.style}" animate:flip transition:fly={{y: 100}}>
			{#if typeof eachAlert.title == 'string'}
				{eachAlert.title}
			{:else}
				<svelte:component this={eachAlert.title}/>
			{/if}
		</div>
	{/each}
</div>