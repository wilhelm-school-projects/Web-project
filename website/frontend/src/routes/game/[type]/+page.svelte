<script lang="ts">
	import { page } from "$app/stores";
	import { onMount } from "svelte";
	import { gameHandler } from "$lib/modules/stores";
	import { get } from "svelte/store";

	// extract the game type from the url
	let gameType: string = $page.url.href
		.split("/")
		.at($page.url.href.split("/").length - 1)!;

	// gameHandler is set to host or client at the component
	// Connector(Host/Client) before routing to this page
	let game = get(gameHandler);
</script>

<main class="game-container">
	<div class="row">
		<h1 class="text-center col">{gameType}</h1>
	</div>
	<div id="canvas-wrapper" class="row">
		<canvas id="game-canvas" />
	</div>
</main>

<style>
	#game-canvas {
		touch-action: none;
	}
</style>
