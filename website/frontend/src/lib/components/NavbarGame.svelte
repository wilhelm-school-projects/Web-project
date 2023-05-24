<script lang="ts">
    import { onMount } from "svelte";
    import ButtonLogout from "$lib/components/ButtonLogout.svelte";

    let texts: string[] = ["Draw", "Clear", "Settings"];

    onMount(() => {
        let logoutButton = document.getElementById("button-logout");
        logoutButton?.classList.add("text-white", "btn-primary");
    });
</script>

<div
    id="bottom-navbar"
    class="navbar row padding-bottom justify-content-center d-flex"
>
    <ButtonLogout />
</div>
<nav
    id="bottom-navbar"
    class="navbar row padding-bottom justify-content-center d-flex"
>
    {#each texts as text, i}
        <button
            id="button-{text}-drawing-pane"
            class="col text-dark text-center btn btn-outline-secondary"
        >
            {texts[i]}
        </button>
    {/each}
</nav>

<style>
    #bottom-navbar {
        padding-bottom: 1rem;
    }
</style>
