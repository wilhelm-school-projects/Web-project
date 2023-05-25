<script lang="ts">
    import { authHandlerShared } from "$lib/modules/stores";
    import { get } from "svelte/store";

    let authHandler = get(authHandlerShared);

    function signOut() {
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
