<script lang="ts">
    import { onDestroy, onMount } from "svelte";
    import { slide, fade } from "svelte/transition";
    import { authHandlerShared } from "$lib/modules/stores";
    import { get } from "svelte/store";
    import { goto } from "$app/navigation";

    //"FirebaseUI is not compatiable with Firebase SDk v9.0.0+ for now, currently it
    //is still dependent on Firebase v8. We're working on it right now, you can see
    //update in this PR"
    //
    // Therefore I cannot use their simple login with google :(
    let signInBtn: HTMLButtonElement;
    let signUpBtn: HTMLButtonElement;
    let wrongCredentialsModal: HTMLDivElement;
    let userEmail: string;
    let password: string;

    function closeModal() {
        wrongCredentialsModal.style.display = "none";
    }

    function showModal() {
        wrongCredentialsModal.style.display = "block";
    }

    function initiateHTMLElements() {
        signInBtn = document.getElementById(
            "button-signin"
        ) as HTMLButtonElement;

        signUpBtn = document.getElementById(
            "button-signup"
        ) as HTMLButtonElement;

        signUpBtn.addEventListener("click", async () => {
            get(authHandlerShared).signUp(() => {
                showModal();
            });
        });

        signInBtn.addEventListener("click", async () => {
            get(authHandlerShared).signIn(() => {
                showModal();
            });
            console.log("logged in user:");
            console.log(get(authHandlerShared));
        });

        wrongCredentialsModal = document.getElementById(
            "modal-wrong-credentials"
        ) as HTMLDivElement;
    }

    $: {
        get(authHandlerShared).setEmail(userEmail);
        get(authHandlerShared).setPassword(password);
    }

    onMount(async () => {
        localStorage.setItem("email", "pinto@pinto.se");
        initiateHTMLElements();
    });
</script>

<!-- transition:slide={{ axis: 'x', duration: 700 }} -->
<main in:slide={{ axis: "x", duration: 700 }}>
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
                        type="password"
                        class=" rounded"
                    />
                </div>
            </div>
        </form>
        <!-- </div> -->
        <div id="right-col" class="col-2 border" />
    </div>
    <div class="row">
        <button id="button-signin" class="col btn btn-primary">
            Sign in
        </button>
    </div>
    <div class="row">
        <button id="button-signup" class="col btn btn-danger"> Sign up </button>
    </div>

    <div id="modal-wrong-credentials" class="modal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Wrong input!</h5>
                </div>
                <div class="modal-body">Try again..</div>
                <div class="modal-footer">
                    <button
                        type="button"
                        class="btn btn-primary"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        on:click={closeModal}
                    >
                        X
                    </button>
                </div>
            </div>
        </div>
    </div>
</main>

<style>
</style>
