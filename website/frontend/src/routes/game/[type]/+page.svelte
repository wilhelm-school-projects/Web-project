<script lang="ts">
	import { page } from "$app/stores";
	import { onDestroy, onMount } from "svelte";
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
	});
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
