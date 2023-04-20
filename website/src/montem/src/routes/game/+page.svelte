<script lang="ts">
	import Navbar from '$lib/Navbar.svelte';
	let paths: string[] = ['/home', '/game', '/game'];
	let texts: string[] = ['Home', '', 'Logout'];
</script>

<main>
	<div class="row">
		<h1 class="text-center col">Paint</h1>
	</div>
</main>

<Navbar {paths} {texts} />

<!-- 
function initCanvas() {
        console.log('init canvas!');
    } 
<div class="row">
	<canvas class="bg-danger" on:load={initCanvas}> hej </canvas>
</div> -->

<style>
</style>
