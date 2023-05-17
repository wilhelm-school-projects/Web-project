<script lang="ts">
	import { page } from "$app/stores";
	import { onMount } from "svelte";
	import {
		getGameType,
		GameClient,
		GameHost,
	} from "$lib/modules/game_logic/Game";
	// extract the game type from the url
	let gameType: string = $page.url.href
		.split("/")
		.at($page.url.href.split("/").length - 1)!;
	let game: GameHost | GameClient;
	onMount(() => {
		game = getGameType(gameType);

		game.run();
		game.end();
	});
</script>

<main class="game-container">
	<div class="row">
		<h1 class="text-center col">{gameType}</h1>
	</div>
	<div id="canvas-wrapper" class="row">
		<canvas id="game-canvas" />
	</div>
	<!-- Should make a Canvas component -->
</main>

<style>
	/* html,
	body {
		margin: 0px;
		height: 100%;
	} */
	/* .game-container {
		width: 100vh; 
		height: 100vh;
	}  */
	#game-canvas {
		touch-action: none;
		/* image-rendering: -moz-crisp-edges; */
		/* image-rendering: -webkit-crisp-edges; */
		/* image-rendering: pixelated; */
		/* image-rendering: crisp-edges; */
	}
</style>
