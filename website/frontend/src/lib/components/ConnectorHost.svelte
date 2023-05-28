<script lang="ts">
    import { FireAuth_Handler, authHandlerShared } from "$lib/modules/stores";
    import { closeModal } from "$lib/modules/DOMFunctions";
    import { get } from "svelte/store";
    import { gameHandler } from "$lib/modules/stores";
    import { GameHost } from "$lib/modules/game_logic/Game";
    import { onMount } from "svelte";

    // canvasID is not choosed by host manually any more but each user gets one
    // generated when signing up, so a bit of code to remove from here
    let canvasRoute: string = "/game/host";
    let game: GameHost;
    let firstClick: boolean = true;
    let authHandler: FireAuth_Handler = get(authHandlerShared);

    onMount(() => {
        // Because goto doesn't work and I might not always want to directly
        // navigate on click to next page (need logic to handle the inputed
        // data) I have to do this work around and because event.target.href =
        // "/game/client" doesn't work in async arrow function for some reason I
        // have made this workaround with manually calling click(). That causes
        // recursive issues..
        let anchor = document.getElementById("anchor-game-host");
        anchor?.addEventListener("click", async (event) => {
            if (event.target === null) {
                throw Error("event is null");
            }
            if (firstClick) {
                gameHandler.set(new GameHost("game-canvas", authHandler));
                game = get(gameHandler) as GameHost;
                if (!(await game.initiateCanvas())) {
                    console.log("Canvas couldn't be initiated");
                    return;
                }
                closeModal("modal-game-type");

                firstClick = false; // I am not proud of this "solution"
                event.target.click();
                return;
            }
            event.target.href = canvasRoute;
        });
    });
</script>

<main>
    <div class="row d-flex justify-content-center">
        <form class="row" action="">
            <div class="row">
                <h2 class="">Here goes canvas name input.</h2>
                <p class="text-secondary">Feature coming soon... prob not</p>
                <!-- <label class="col" for=""> Canvas Name </label> -->
                <!-- Use commented when done -->
                <!-- <input class="col rounded" type="text" bind:value={canvasID} /> -->
                <!-- <input class="col rounded" type="text" /> -->
            </div>
            <div class="row">
                <div class="col d-flex justify-content-center">
                    <a
                        id="anchor-game-host"
                        class="col text-center btn btn-outline-secondary"
                        href=""
                    >
                        Host
                    </a>
                </div>
            </div>
        </form>
    </div>
</main>
