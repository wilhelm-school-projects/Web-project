<script lang="ts">
    import { get } from "svelte/store";
    import { gameHandler } from "$lib/modules/stores";
    import type { GameHost } from "$lib/modules/game_logic/Game";

    let inviteEmail: string = "Email to invite";
    let game: GameHost = get(gameHandler) as GameHost;

    function invite() {
        console.log("Invite Email:");
        console.log(inviteEmail);

        console.log("game object inside invitemodule:");
        console.log(game);

        game.invite(inviteEmail);
    }
</script>

<!-- <main class="row"> -->
<button
    id="button-invite"
    class="col text-white bg-danger btn btn-primary btn-outline-secondary"
    on:click={invite}
>
    Invite
</button>
<input
    type="email"
    class="col text-secondary btn-outline-danger"
    bind:value={inviteEmail}
/>

<!-- </main> -->

<style>
</style>
