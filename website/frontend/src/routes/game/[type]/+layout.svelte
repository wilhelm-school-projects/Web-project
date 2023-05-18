<!-- Probably redundant -->
<script lang="ts">
    let texts: string[] = ["Draw", "Send", "dummy"];
</script>

<nav
    id="bottom-navbar"
    class="navbar row padding-bottom justify-content-center d-flex"
>
    {#each texts as text, i}
        <button
            id="button-{text}-drawing-pane"
            class="col text-center btn btn-outline-secondary"
        >
            {texts[i]}
        </button>
    {/each}
</nav>

<slot />

<style>
</style>
