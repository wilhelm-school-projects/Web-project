<script lang="ts">
    import { authHandler } from "$lib/modules/stores";
    import { get } from "svelte/store";

    let authHandlerShared = get(authHandler);

    function signOut() {
        console.log("button signOut");
        console.log(authHandlerShared);

        authHandlerShared.signOut();
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
