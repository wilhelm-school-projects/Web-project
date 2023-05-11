<script lang="ts">
    import { Host } from "$lib/modules/ConnectToCanvas";

    function connectToCanvas() {
        console.log(canvasName);
    }
    let canvasName: string = "";
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
