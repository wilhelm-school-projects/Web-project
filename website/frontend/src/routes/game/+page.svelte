<!-- THIS FILE IS REDUNDANT (probably, isn't used when navigating website) -->
<script lang="ts">
	import Navbar from "$lib/components/Navbar.svelte";
	let paths: string[] = ["/home", "/game/host", "/game/client"];
	let texts: string[] = ["Home", "host", "client"];
</script>

<main>
	<div class="row">
		<h1 class="text-center col">Paint</h1>
	</div>
</main>

<Navbar {paths} {texts} />

<style>
</style>
