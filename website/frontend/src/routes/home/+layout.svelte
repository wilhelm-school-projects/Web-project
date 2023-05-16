<script lang="ts">
	import Navbar from "$lib/components/NavbarHome.svelte";

	//  Second path is used as a modal toggler, see NavbarHome
	let paths: string[] = ["/home", "", "/home"];
	let texts: string[] = ["Settings", "I am bored", "Logout"];
</script>

<Navbar {paths} {texts} />

<slot />
