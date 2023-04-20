<script lang="ts">
	// import { page } from '$app/stores';
	// const userId: string = $page.params.userId;
	import { afterNavigate } from '$app/navigation';
	import { fade, fly, slide, draw } from 'svelte/transition';
</script>

<!-- out:fly={{ y: 200, duration: 2000 }} -->
<!-- transition:slide={{ axis: 'x', duration: 500, delay: 100 }} -->
<!-- out:draw={{ delay: 0, speed: 2, duration: 2000 }} -->
<!-- transition:slide={{ axis: 'x', duration: 700 }} -->
<!-- class="container row text-danger overflow-auto justfiy-content-center align-items-center" -->

<main in:slide={{ axis: 'x', duration: 700 }} class="row d-flex justify-content-center text-info">
	<div class="col-1 border bg-danger" />
	<div id="content" class="col bg-info">
		<h1 class="h1">Logged in as a a Lorem ipsumquam ducimus, neque magni corrupti rem non.</h1>
	</div>
	<div class="col-1 border bg-danger">
		<div />
	</div>
</main>

<style>
</style>
