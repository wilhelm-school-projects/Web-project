<script lang="ts">
    import { closeModal } from "$lib/modules/DOMFunctions";
    import { get } from "svelte/store";
    import { gameHandler } from "$lib/modules/stores";
    import { GameClient } from "$lib/modules/game_logic/Game";
    import { onMount } from "svelte";

    // let client: ClientConnector = new ClientConnector();
    let canvasRoute: string = "/game/client";
    let canvasID: string = "context-id-1";
    let game: GameClient;
    let firstClick: boolean = true;

    onMount(() => {
        // Because goto doesn't work and I might not always want to directly
        // navigate on click to next page (need logic to handle the inputed
        // data) I have to do this work around and because event.target.href =
        // "/game/client" doesn't work in async arrow function for some reason I
        // have made this workaround with manually calling click(). That causes
        // recursive issues..
        let anchor = document.getElementById("anchor-game-client");
        anchor?.addEventListener("click", async (event) => {
            if (event.target === null) {
                throw Error("event is null");
            }
            if (firstClick) {
                console.log("klickat på anchor");
                closeModal("modal-game-type");

                gameHandler.set(new GameClient("game-canvas", canvasID));
                game = get(gameHandler) as GameClient;
                if (!(await game.canvasExists())) {
                    console.log("Canvas doesn't exist, do something about it");
                    return;
                }
                console.log("den finns!");
                console.log(event.target);

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
                <label class="col" for=""> Canvas Name </label>
                <!-- Use commented when done -->
                <!-- <input class="col rounded" type="text" bind:value={canvasID} /> -->
                <input class="col rounded" type="text" />
            </div>
            <div class="row">
                <div class="col d-flex justify-content-center">
                    <a
                        id="anchor-game-client"
                        class="col text-center btn btn-outline-secondary"
                        href=""
                    >
                        Connect
                    </a>
                </div>
            </div>
        </form>
    </div>
</main>
