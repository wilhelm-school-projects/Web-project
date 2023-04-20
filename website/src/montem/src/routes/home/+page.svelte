<script lang="ts">
	// import { page } from '$app/stores';
	import { afterNavigate } from '$app/navigation';
	import { fade, fly, slide, draw } from 'svelte/transition';

	// const userId: string = $page.params.userId;
</script>

<!-- out:fly={{ y: 200, duration: 2000 }} -->
<!-- transition:slide={{ axis: 'x', duration: 500, delay: 100 }} -->
<!-- out:draw={{ delay: 0, speed: 2, duration: 2000 }} -->
<!-- transition:slide={{ axis: 'x', duration: 700 }} -->

<main
	in:slide={{ axis: 'x', duration: 700 }}
	out:fade
	id="sign-in-container"
	class="container text-danger"
>
	<div id="header" class="row bg-dark">
		<div class="col d-flex justify-content-center">
			<h1 class="h1">Logged in as a user</h1>
		</div>
	</div>
</main>

<style>
</style>
