<script lang="ts">
    import { onMount } from "svelte";
    // import { fuseAttributes } from "$lib/modules/DOMFunctions";
    // onMount(initNavbar); // onMount seems to run once every time i navigate to the page, seems redundant?

    let texts: string[] = ["Draw", "dummy", "dummy"];
    function initDrawButton(id: string) {
        console.log("fusing event");
        let button = document.getElementById(id) as HTMLButtonElement;
        button.addEventListener("click", () => {
            // console.log("clicking event");
            let canvas = document.getElementById(
                "game-canvas"
            ) as HTMLCanvasElement;
            // canvas.style.pointerEvents = "none";
            // grab ownership over canvas
        });
    }
    onMount(() => initDrawButton("button-Draw-drawing-pane"));
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
    /* #bottom-navbar {
        padding-bottom: 1rem;
    } */
</style>
