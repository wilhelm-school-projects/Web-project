import { readable, writable } from 'svelte/store'
import {
    GameHost,
    GameClient
} from './game_logic/Game';

export const CONTEXTID = readable("context-id-1");

// Drawing game related stores
export const gameHandler = writable()


// Firebase related stores
import { initializeApp } from "firebase/app";
import { getDatabase, set } from "firebase/database";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    getAuth,
    signOut as signOutFire,
    type UserCredential,
    type Auth,
    type Unsubscribe,
} from "firebase/auth";
import { goto } from '$app/navigation'

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

//databaseHandler is shared between components which subscribe to it
const initDatabase = getDatabase(firebaseApp);
export let databaseHandler = readable(initDatabase)

export class FireAuth_Handler {

    userCredentials: UserCredential | null;
    user: string;
    // email and password are binded to value of input fields at root page
    userEmail: string;
    password: string;
    fireAuth: Auth;

    unsubscribeAuthStateChange: Unsubscribe;

    constructor() {
        this.fireAuth = getAuth(firebaseApp);
    }

    async signIn(errorHandler: () => any) {
        console.log("hejhej")
        if (await this.inputsAreEmpty()) {
            return;
        }
        if (!this.validEmail()) {
            errorHandler();
            console.log("Input email not valid");
            return;
        }

        try {
            this.userCredentials = await signInWithEmailAndPassword(
                this.fireAuth,
                this.userEmail,
                this.password
            );
            console.log("har loggat in:")
            console.log(this)

        } catch (e) {
            errorHandler();
            console.log(e);
        }

        // Maybe use unsubscribeAuth... somewhere?
        this.unsubscribeAuthStateChange = onAuthStateChanged(this.fireAuth, (user) => {
            if (user) {
                goto('/home')
            } else {
                goto('/')
            }
        });

    }

    async signOut() {
        try {
            let response = await signOutFire(this.fireAuth)

            // Force user to go to index even if it wasn't logged in on the
            // current page. onAuthStateChange doesn't trigger if there isn't
            // any user logged in 
            goto('/')
        } catch (e) {
            console.log(e)
        }
    }

    async signUp(errorHandler: () => any) {

        console.log("signUp");
        if (await this.inputsAreEmpty()) {
            return;
        }
        if (!this.validEmail()) {
            errorHandler();
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

    setEmail(userEmail: string): void {
        this.userEmail = userEmail;
    }

    setPassword(password: string): void {
        this.password = password;
    }
}

//authHandler is shared between components which subscribe to it
let initHandler = new FireAuth_Handler();
export const authHandler = writable(initHandler)
