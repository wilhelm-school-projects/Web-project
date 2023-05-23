<script lang="ts">
    import { HostConnector } from "$lib/modules/ConnectToCanvas";
    import { closeModal } from "$lib/modules/DOMFunctions";
    import { get } from "svelte/store";
    import { gameHandler } from "$lib/modules/stores";
    import { GameHost } from "$lib/modules/game_logic/Game";

    let host: HostConnector = new HostConnector();
    let canvasRoute: string = "/game/host";
    let canvasID: string = "";

    // TODO: If canvasID already exists, do not closeModal and navigate to page.
    // This will be tricky to solve
    function connectToCanvas() {
        closeModal("modal-game-type");
        console.log("navigating to host from connectorhost");
        gameHandler.set(new GameHost("game-canvas", canvasID));
    }
</script>

<main>
    <div class="row d-flex justify-content-center">
        <form class="row" action="">
            <div class="row">
                <label class="col" for="">Canvas Name </label>
                <input class="col rounded" type="text" bind:value={canvasID} />
            </div>
            <div class="row">
                <div class="col d-flex justify-content-center">
                    <a
                        class="col text-center btn btn-outline-secondary"
                        href="/game/host"
                        on:click={connectToCanvas}
                    >
                        Host
                    </a>
                </div>
            </div>
        </form>
    </div>
</main>
