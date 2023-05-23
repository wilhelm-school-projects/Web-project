<script lang="ts">
    import { ClientConnector } from "$lib/modules/ConnectToCanvas";
    import { closeModal } from "$lib/modules/DOMFunctions";
    import { get } from "svelte/store";
    import { gameHandler } from "$lib/modules/stores";
    import { GameClient } from "$lib/modules/game_logic/Game";

    let client: ClientConnector = new ClientConnector();
    let canvasRoute: string = "/game/client";
    let canvasID: string = "";

    function connectToCanvas() {
        closeModal("modal-game-type");
        console.log("navigating to game/client from conenctorClient");
        gameHandler.set(new GameClient("game-canvas", canvasID));
    }
</script>

<main>
    <div class="row d-flex justify-content-center">
        <form class="row" action="">
            <div class="row">
                <label class="col" for=""> Canvas Name </label>
                <input class="col rounded" type="text" bind:value={canvasID} />
            </div>
            <div class="row">
                <div class="col d-flex justify-content-center">
                    <a
                        class="col text-center btn btn-outline-secondary"
                        href="/game/client"
                        on:click={connectToCanvas}
                    >
                        Connect
                    </a>
                </div>
            </div>
        </form>
    </div>
</main>
