<script lang="ts">
	import { onMount } from 'svelte';
	import { fuseAttributes } from '$lib/modules/DOMFunctions';

	export let paths: string[];
	export let texts: string[];

	// How to make an array of function pointers ( not used unfortunately :( )
	// let onclicks: { (): void }[] = []; // Array of functions to which on:click bind to, for each <a> element down below in html.

	// function a1() {
	// 	console.log('0');
	// }
	// function a2() {
	// 	console.log('1');
	// }
	// function a3() {
	// 	console.log('2');
	// }
	// These push's has to be outside of onMount because otherwise the
	// on:click={onclicks.at(i)} will append nothing (I think) as the #each
	// happens before onMount, I guess at the rendering and not the loading to
	// DOM.
	// onclicks.push(a1);
	// onclicks.push(a2);
	// onclicks.push(a3);
	// on:click={onclicks.at(i)}

	function initNavbar() {
		let attributes = { 'data-bs-toggle': 'modal', 'data-bs-target': '#modal-game-type' };
		let anchorId: string = 'anchor-' + paths.at(1);
		fuseAttributes(anchorId, attributes);
	}

	onMount(initNavbar); // onMount seems to run once every time i navigate to the page, seems redundant?
</script>

<nav
	id="bottom-navbar"
	class="navbar fixed-bottom row padding-bottom justify-content-center d-flex"
>
	{#each paths as path, i}
		<a id="anchor-{path}" class="col text-center btn btn-outline-secondary" href={path}>
			{texts[i]}
		</a>
	{/each}
</nav>

<style>
	#bottom-navbar {
		padding-bottom: 1rem;
	}
</style>
