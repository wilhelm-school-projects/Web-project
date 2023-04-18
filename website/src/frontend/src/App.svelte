<script lang="ts">
    // third-party imports
    import Router, { location } from "svelte-spa-router"; // Used to do SPA-routing

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
<Navbar />

<style>
</style>
