<script lang="ts">
    import { get } from "svelte/store";
    import { gameHandler } from "$lib/modules/stores";
    import type { GameHost } from "$lib/modules/game_logic/Game";

    let inviteEmail: string = "Email to invite";
    let game: GameHost = get(gameHandler) as GameHost;

    async function invite() {
        try {
            await game.inviteUserToCanvas(inviteEmail);
            // Let user know inviting was successful (more than emptying input)
            inviteEmail = "";
        } catch (e) {
            console.log("Error when inviting: ");
            console.log(e);
        }
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
    class="col text-secondary input-outline-danger"
    on:focus={() => (inviteEmail = "")}
    bind:value={inviteEmail}
/>

<!-- </main> -->

<style>
</style>
