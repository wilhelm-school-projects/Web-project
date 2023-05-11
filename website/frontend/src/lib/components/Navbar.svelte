<script lang="ts">
	export let paths: string[];
	export let texts: string[];
</script>

<nav
	id="bottom-navbar"
	class="navbar fixed-bottom row padding-bottom justify-content-center d-flex"
>
	<!-- <a class="col text-center btn btn-outline-secondary" href={paths.at(0)} />
	<a class="col text-center btn btn-outline-secondary" href={paths.at(1)} />
	<a class="col text-center btn btn-outline-secondary" href={paths.at(2)} /> -->

	{#each paths as path, i}
		<a class="col text-center btn btn-outline-secondary" href={path}> {texts[i]} </a>
	{/each}
</nav>

<style>
	#bottom-navbar {
		padding-bottom: 1rem;
	}
</style>
