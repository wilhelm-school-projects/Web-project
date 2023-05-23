<script lang="ts">
	import { onMount } from "svelte";
	import { fuseAttributes } from "$lib/modules/DOMFunctions";
	import ButtonLogout from "$lib/components/ButtonLogout.svelte";
	let paths: string[] = ["/home", ""];
	let texts: string[] = ["Settings", "I am bored"];

	function initNavbar() {
		let attributes = {
			"data-bs-toggle": "modal",
			"data-bs-target": "#modal-game-type",
		};
		let anchorId: string = "anchor-" + paths.at(1);
		fuseAttributes(anchorId, attributes);
	}

	onMount(initNavbar); // onMount seems to run once every time i navigate to the page, seems redundant?
</script>

<nav
	id="bottom-navbar"
	class="navbar fixed-bottom row padding-bottom justify-content-center d-flex"
>
	{#each paths as path, i}
		<a
			id="anchor-{path}"
			class="col text-center btn btn-outline-secondary"
			href={path}
		>
			{texts[i]}
		</a>
	{/each}
	<ButtonLogout />
</nav>

<style>
	#bottom-navbar {
		padding-bottom: 1rem;
	}
</style>
