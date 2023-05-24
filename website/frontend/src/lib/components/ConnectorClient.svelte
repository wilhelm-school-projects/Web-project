<script lang="ts">
    import { ClientConnector } from "$lib/modules/ConnectToCanvas";
    import { closeModal } from "$lib/modules/DOMFunctions";
    import { get } from "svelte/store";
    import { gameHandler } from "$lib/modules/stores";
    import { GameClient } from "$lib/modules/game_logic/Game";
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";

    let client: ClientConnector = new ClientConnector();
    let canvasRoute: string = "/game/client";
    let canvasID: string = "";
    let game: GameClient;

    async function connectToCanvas() {
        closeModal("modal-game-type");
        console.log("navigating to game/client from conenctorClient");
        gameHandler.set(new GameClient("game-canvas", canvasID));
        // await goto("/game/client");
    }

    onMount(() => {
        // Because goto doesn't work and I might not always want to directly
        // navigate on click to next page (need logic to handle the inputed
        // data) I have to do this work around
        let anchor = document.getElementById("anchor-game");
        anchor?.addEventListener("click", async (event) => {
            console.log("klickat på anchor");
            if (event.target === null) {
                throw Error("event is null");
            }
            closeModal("modal-game-type");

            gameHandler.set(new GameClient("game-canvas", canvasID));
            game = get(gameHandler) as GameClient;
            if (!(await game.canvasExists())) {
                console.log("Canvas doesn't exist, do something about it");
                return;
            }
            console.log("den finns!");
            console.log(event.target);

            // when this function is marked as async the event.target.href
            // doesn't change page, therefore I force a new click which is
            // recursive which makes me fucked
            event.target.href = "/game/client";
            event.target.click();
        });
    });
</script>

<main>
    <button
        on:click={() => {
            closeModal("modal-game-type");
            gameHandler.set(new GameClient("game-canvas", canvasID));
            console.log("goto!");
            goto("/game/client");
        }}
    >
        X
    </button>
    <div class="row d-flex justify-content-center">
        <form class="row" action="">
            <div class="row">
                <label class="col" for=""> Canvas Name </label>
                <input class="col rounded" type="text" bind:value={canvasID} />
            </div>
            <div class="row">
                <div class="col d-flex justify-content-center">
                    <a
                        id="anchor-game"
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
