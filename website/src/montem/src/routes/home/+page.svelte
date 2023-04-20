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

<main
	in:slide={{ axis: 'x', duration: 700 }}
	out:fade
	class="row d-flex justify-content-center text-danger overflow-auto"
>
	<div class="col-2 justify-content-center d-flex border bg-danger">hej</div>
	<div id="header" class="col justify-content-center d-flex bg-dark">
		<div class="col d-flex justify-content-center">
			<h1 class="h1">
				Logged in as a a Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus deleniti a
				ad pariatur mollitia quia corporis saepe est delectus odit?
			</h1>
		</div>
	</div>
	<div class="col-2 justify-content-center d-flex border bg-danger">
		då <div />
	</div>
</main>

<style>
</style>
