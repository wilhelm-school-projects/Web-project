<script lang="ts">
	import Navbar from '$lib/components/NavbarHome.svelte';

	let paths: string[] = ['/home', '', '/home'];
	let texts: string[] = ['Settings', 'I am bored', 'Logout'];
</script>

<!-- Second path is used as a modal toggler, see NavbarHome -->
<Navbar {paths} {texts} />

<slot />
