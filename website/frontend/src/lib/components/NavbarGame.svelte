<script lang="ts">
    import { onMount } from "svelte";
    import ButtonLogout from "$lib/components/ButtonLogout.svelte";
    import InviteModule from "./InviteModule.svelte";
    import { get } from "svelte/store";
    import { gameHandler } from "$lib/modules/stores";
    import { GameHost } from "$lib/modules/game_logic/Game";

    let texts: string[] = ["Draw", "Clear", "Settings"];

    onMount(() => {
        let logoutButton = document.getElementById("button-logout");
        logoutButton?.classList.add("text-white", "btn-primary");

        // Maybe redundant
        let inviteButton = document.getElementById("button-invite");
        inviteButton?.classList.add("text-white");
    });
</script>

<div
    id="bottom-navbar"
    class="navbar row padding-bottom justify-content-center d-flex"
>
    <ButtonLogout />
    {#if get(gameHandler) instanceof GameHost}
        <InviteModule />
    {/if}
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
