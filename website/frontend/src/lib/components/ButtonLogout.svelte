<script lang="ts">
    import { authHandlerShared } from "$lib/modules/stores";
    import type { GameHost, GameClient } from "$lib/modules/game_logic/Game";
    import { onMount } from "svelte";
    import { gameHandler } from "$lib/modules/stores";
    import { get } from "svelte/store";

    let authHandler = get(authHandlerShared);
    let game: GameHost | GameClient;
    onMount(() => {
        game = get(gameHandler) as GameHost | GameClient;
    });
    function signOut() {
        game.cleanUp();
        authHandler.signOut();
    }
</script>

<button
    id="button-logout"
    class=" col btn btn-outline-secondary"
    on:click={signOut}
>
    Logout
</button>

<style>
</style>
