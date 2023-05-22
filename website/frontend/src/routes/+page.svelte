<script lang="ts">
    import { onMount } from "svelte";
    import { slide, fade } from "svelte/transition";
    import { fireAuth } from "$lib/modules/firebase";

    //"FirebaseUI is not compatiable with Firebase SDk v9.0.0+ for now, currently it
    //is still dependent on Firebase v8. We're working on it right now, you can see
    //update in this PR"
    //
    // Therefore I cannot use their simple login with google :(

    let userEmail: string;
    let password: string;
    let isdisabled: boolean = false;
    let signInBtn: HTMLButtonElement;
    let signUpBtn: HTMLButtonElement;

    function logout() {
        console.log("logout");
    }

    const validEmail = (email: string): boolean => {
        if (
            String(email)
                .toLowerCase()
                .match(
                    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
                ) === null
        ) {
            return false;
        }
        return true;
    };
    function signInUser() {
        console.log("signin");
        if (inputsAreEmpty()) {
            return;
        }
        if (!validEmail(userEmail)) {
            console.log("not valid!");
            return;
        }
    }
    function signUpUser() {
        console.log("signUp");
        if (inputsAreEmpty()) {
            return;
        }
    }
    // function initiateButtons() {
    //     signInBtn = document.getElementById(
    //         "button-signin"
    //     ) as HTMLButtonElement;
    //     signUpBtn = document.getElementById(
    //         "button-signin"
    //     ) as HTMLButtonElement;
    // }
    function inputsAreEmpty() {
        if (userEmail === "" || password === "") {
            return true;
        }
        return false;
    }
    onMount(async () => {
        // initiateButtons();
        // login();
    });

    // signInWithEmailAndPassword(auth, email, password)
    //     .then((userCredential) => {
    //         // Signed in
    //         const user = userCredential.user;
    //         // ...
    //     })
    //     .catch((error) => {
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
    //     });
</script>

<!-- transition:slide={{ axis: 'x', duration: 700 }} -->
<main in:slide={{ axis: "x", duration: 700 }}>
    <script
        src="https://www.gstatic.com/firebasejs/ui/6.0.1/firebase-ui-auth.js"
    ></script>
    <link
        type="text/css"
        rel="stylesheet"
        href="https://www.gstatic.com/firebasejs/ui/6.0.1/firebase-ui-auth.css"
    />

    <div id="header" class="row">
        <div class="col d-flex justify-content-center">
            <h1 class="h1">Montem!</h1>
        </div>
    </div>

    <div class="row">
        <div id="left-col" class="col-2 border" />
        <form id="main-col" class="col d-flex justify-content-center">
            <!-- this div makes ^d-flex and justify-content-center work-->
            <div>
                <div class="row">
                    <label for="userEmail"> Email: </label>
                    <input
                        name="userEmail"
                        bind:value={userEmail}
                        type="email"
                        class=" rounded"
                    />
                </div>
                <div class="row">
                    <label for="password"> Password: </label>
                    <input
                        name="password"
                        bind:value={password}
                        type="text"
                        class=" rounded"
                    />
                </div>
            </div>
        </form>
        <!-- </div> -->
        <div id="right-col" class="col-2 border" />
    </div>
    <div class="row">
        <button
            id="button-signin"
            class="col btn btn-primary"
            on:click={signInUser}
        >
            Sign in
        </button>
    </div>
    <div class="row">
        <button
            id="button-signup"
            class="col btn btn-danger"
            on:click={signUpUser}
        >
            Sign up
        </button>
    </div>
</main>

<style>
</style>
