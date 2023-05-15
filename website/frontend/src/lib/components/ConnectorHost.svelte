<script lang="ts">
    import { HostConnector } from "$lib/modules/ConnectToCanvas";
    let host: HostConnector = new HostConnector();
    let canvasRoute: string = "/game/host";
    let canvasName: string = "";

    function connectToCanvas() {
        if (host.establishCanvas(canvasName)) {
            host.navigateTo(canvasRoute);
        } else {
            console.log("Canvas already exists");
        }
    }
</script>

<main>
    <div class="row d-flex justify-content-center">
        <form class="row" action="">
            <div class="row">
                <label class="col" for="">Canvas Name </label>
                <input
                    class="col rounded"
                    type="text"
                    bind:value={canvasName}
                />
            </div>
            <div class="row">
                <div class="col d-flex justify-content-center">
                    <button
                        class="row col text-center btn btn-outline-secondary"
                        on:click={connectToCanvas}
                    >
                        Start Hosting
                    </button>
                </div>
            </div>
        </form>
    </div>
</main>
