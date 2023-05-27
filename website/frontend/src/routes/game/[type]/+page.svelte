<script lang="ts">
	import NavbarGame from "$lib/components/NavbarGame.svelte";
	import { page } from "$app/stores";
	import { onMount } from "svelte";
	import { gameHandler } from "$lib/modules/stores";
	import { get } from "svelte/store";
	import type { GameHost, GameClient } from "$lib/modules/game_logic/Game";

	// extract the game type from the url
	let displayCanvasID: string = "";
	let gameType: string = $page.url.href
		.split("/")
		.at($page.url.href.split("/").length - 1)!;

	// gameHandler is set to host or client at the component
	// Connector(Host/Client) before routing to this page
	let game: GameHost | GameClient;
	onMount(() => {
		game = get(gameHandler) as GameHost | GameClient;
		console.log("Game:");
		console.log(game);
		game.run();
		console.log("i onmount");
		console.log(game.canvasID);
		displayCanvasID = game.canvasID;
	});
</script>

<main class="game-container">
	<NavbarGame />
	<div class="row">
		<!-- For some reason game.canvasID won't work, even though it is
		initialized before navigating to this page -->
		<h4 class="text-center col">
			{gameType}, canvas ID: {displayCanvasID}
		</h4>
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
