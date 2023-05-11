<script>
    function connectToCanvas() {
        console.log("connectToCanvas");
    }
</script>

<main>
    <div class="row d-flex justify-content-center">
        <!-- <div class="row"> -->
        <form class="row" on:submit={connectToCanvas}>
            <div class="row">
                <label class="col" for="">Host Email</label>
                <input class="col rounded" type="text" />
            </div>
            <div class="row">
                <div class="col d-flex justify-content-center">
                    <button
                        class="row col text-center btn btn-outline-secondary"
                    >
                        Connect
                    </button>
                </div>
            </div>
        </form>
    </div>
    <!-- col d-flex justify-content-center -->
</main>
