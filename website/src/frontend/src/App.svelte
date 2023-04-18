<script lang="ts">
    // third-party imports
    import Router, { location } from "svelte-spa-router"; // Used to do SPA-routing
    import { fade } from "svelte/transition";
    // Custom imports
    import SignIn from "./routes/SignIn.svelte";
    import PageNotFound from "./routes/PageNotFound.svelte";
    import Home from "./routes/Home.svelte";
    import Navbar from "./lib/Navbar.svelte";
</script>

<main class="bg-white container-fluid">
    <Router
        routes={{
            "/": SignIn,
            "/Home": Home,
            "/*": PageNotFound,
        }}
    />
</main>

<!-- Used for development routing -->
<nav class="row justify-content-center d-flex" transition:fade>
    <a class="col text-center" href="/#/Home"> Home </a>
    <a class="col text-center" href="/#/"> Sign in </a>
    <a class="col text-center" href="/#/NotARealPath"> some other </a>
</nav>

<style>
</style>
