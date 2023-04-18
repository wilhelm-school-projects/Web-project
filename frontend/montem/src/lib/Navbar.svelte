<script>
    function func() {
        console.log("func");
    }
</script>

<nav>
    <a href="/#/Home" on:click={() => func()}> Home! </a>
    <a href="/#/" on:click={() => func()}> Sign in! </a>
    <a href="/#/NotARealPath" on:click={() => func()}> some other! </a>
</nav>
