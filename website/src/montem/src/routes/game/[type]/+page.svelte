<script lang="ts">
	import { page } from '$app/stores';
	let path: string = $page.url.href;
</script>

<main>
	<div class="row">
		<h1 class="text-center col">Paint</h1>
	</div>
	{path}
</main>

<!-- function initCanvas() {
		console.log('init canvas!');
	} -->
<!-- 
<div class="row">
	<canvas class="bg-danger" on:load={initCanvas}> hej </canvas>
</div> -->

<style>
</style>
