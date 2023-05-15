<script lang="ts">
    import { ClientConnector } from "$lib/modules/ConnectToCanvas";
    let client: ClientConnector = new ClientConnector();
    let canvasRoute: string = "/game/client";
    let hostEmail: string = "";

    function connectToCanvas() {
        if (client.connectToCanvas(hostEmail)) {
            client.navigateTo(canvasRoute);
        } else {
            console.log("Canvas does not exist");
        }
    }
</script>

<main>
    <div class="row d-flex justify-content-center">
        <form class="row" action="">
            <div class="row">
                <label class="col" for=""> Host Email </label>
                <input class="col rounded" type="text" bind:value={hostEmail} />
            </div>
            <div class="row">
                <div class="col d-flex justify-content-center">
                    <button
                        class="row col text-center btn btn-outline-secondary"
                        on:click={connectToCanvas}
                    >
                        Connect
                    </button>
                </div>
            </div>
        </form>
    </div>
</main>
