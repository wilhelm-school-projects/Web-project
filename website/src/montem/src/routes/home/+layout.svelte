<script lang="ts">
	import Navbar from '$lib/Navbar.svelte';

	let paths: string[] = ['/home', '/game', '/home'];
	let texts: string[] = ['Settings', 'I am bored', 'Logout'];
</script>

<Navbar {paths} {texts} />

<slot />
