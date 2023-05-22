// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    getAuth,
    type UserCredential,
    type Auth,
    type Unsubscribe,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBMLLbj09IxQOez5cTlmApwZMSi_qyJfHc",
    authDomain: "montem-d8829.firebaseapp.com",
    databaseURL: "https://montem-d8829-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "montem-d8829",
    storageBucket: "montem-d8829.appspot.com",
    messagingSenderId: "496898410589",
    appId: "1:496898410589:web:6b68e67278d86b71c0e5b4",
    measurementId: "G-QQ5SSKR29X"
};

const firebaseApp = initializeApp(firebaseConfig);
export const database = getDatabase(firebaseApp);


// Authentication class and shared firebase "authenticator"

class fireAuthenticator {

    userCredentials: UserCredential | null;
    user: string;
    userEmail: string;
    password: string;
    fireAuth: Auth;
    signInBtn: HTMLButtonElement;
    signUpBtn: HTMLButtonElement;
    wrongCredentialsModal: HTMLElement;
    unsubscribeAuthStateChange: Unsubscribe;

    constructor() {
        this.fireAuth = getAuth(firebaseApp);
    }

    async signIn() {
        console.log("signin");
        if (await this.inputsAreEmpty()) {
            return;
        }
        if (!this.validEmail()) {
            this.showModal();
            console.log("not valid!");
            return;
        }

        try {
            this.userCredentials = await signInWithEmailAndPassword(
                this.fireAuth,
                this.userEmail,
                this.password
            );
            console.log(this.userCredentials);
        } catch (e) {
            this.showModal();
            console.log(e);
        }

        // Maybe use unsubscribeAuth... somewhere?
        this.unsubscribeAuthStateChange = onAuthStateChanged(this.fireAuth, (user) => {
            if (user) {
                window.location.href = "/home"; // /home/user is perhaps better, but not a priority
            } else {
                window.location.href = "/"; // Maybe?
            }
        });

    }

    async signOut() {
        // Something
    }

    async signUp() {

        console.log("signUp");
        if (await this.inputsAreEmpty()) {
            return;
        }
        if (!this.validEmail()) {
            this.showModal();
            console.log("not valid!");
            return;
        }
        try {
            let userCredentials = await createUserWithEmailAndPassword(
                this.fireAuth,
                this.userEmail,
                this.password
            );
            console.log(userCredentials);
        } catch (e) {
            console.log(e);
        }
    }

    async inputsAreEmpty(): Promise<boolean> {
        if (this.userEmail === "" || this.password === "") {
            return true;
        }
        return false;
    }

    async validEmail(): Promise<boolean> {
        if (
            String(this.userEmail)
                .toLowerCase()
                .match(
                    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
                ) === null
        ) {
            return false;
        }
        return true;
    };

    async closeModal() {
        this.wrongCredentialsModal.style.display = "none";
    }

    async showModal() {
        this.wrongCredentialsModal.style.display = "block";
    }
    async initiateHTMLElements() {
        this.signInBtn = document.getElementById(
            "button-signin"
        ) as HTMLButtonElement;

        this.signUpBtn = document.getElementById(
            "button-signup"
        ) as HTMLButtonElement;

        this.signUpBtn.addEventListener("click", async () => {
            this.signUp();
        })

        this.signInBtn.addEventListener("click", async () => {
            this.signIn()
        })

        this.wrongCredentialsModal = document.getElementById(
            "modal-wrong-credentials"
        ) as HTMLButtonElement;
    }
}

export let customFire: fireAuthenticator = new fireAuthenticator();