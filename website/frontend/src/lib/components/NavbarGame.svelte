<script lang="ts">
    import { onMount } from "svelte";
    import ButtonLogout from "$lib/components/ButtonLogout.svelte";
    onMount(() => {
        let logoutButton = document.getElementById("button-logout");
        logoutButton?.classList.add("text-white", "btn-primary");
    });
</script>

<nav
    id="bottom-navbar"
    class="navbar row padding-bottom justify-content-center d-flex"
>
    <ButtonLogout />
</nav>

<style>
    #bottom-navbar {
        padding-bottom: 1rem;
    }
</style>
