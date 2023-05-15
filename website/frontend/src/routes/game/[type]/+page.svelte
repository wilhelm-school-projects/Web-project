<script lang="ts">
	import { page } from "$app/stores";
	import { onMount } from "svelte";
	import { getGameType, GameClient, GameHost } from "$lib/modules/Game";
	let path: string = $page.url.href;
	let game: GameHost | GameClient;
	onMount(() => {
		// Choose game type based on what route was navigated to, game/host or game/client
		game = getGameType(
			$page.url.href.split("/").at($page.url.href.split("/").length - 1)!
		);
		console.log("onMount game/type: ");
		console.dir(game);

		game.init();
		game.run();
		game.end();
	});
</script>

<main class="game-container">
	<div class="row">
		<h1 class="text-center col">{path}</h1>
	</div>
	<div class="row">
		<canvas id="game-canvas"> hej </canvas>
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
	/* #game-canvas {
		flex: auto;
		width: 100%;
		height: 100%;
	} */
</style>
