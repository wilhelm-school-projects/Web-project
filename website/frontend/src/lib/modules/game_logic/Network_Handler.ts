
import { get } from 'svelte/store'
import { CONTEXTID } from '$lib/modules/stores'
import type { Painter } from '$lib/modules/game_logic/Painting_Handler'

// Import the functions you need from the SDKs you need
import { initializeApp, type FirebaseApp } from "firebase/app";
import { getDatabase, ref, set, update, onValue, type Database, type Unsubscribe } from "firebase/database";
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

// Initialize Firebase

export class NetworkHandler {
    firebaseApp: FirebaseApp;
    database: Database;
    painter: Painter;
    stopShapeRetrieval: Unsubscribe;

    constructor(painter: Painter) {
        this.firebaseApp = initializeApp(firebaseConfig);
        this.database = getDatabase(this.firebaseApp);
        this.painter = painter;

    }

    async updateShapes(message: Object): Promise<boolean> {
        try {
            let response = await this.sendUpdate(message, get(CONTEXTID));
        } catch (e) {
            console.log("Update failed")
            console.log(e)
            return false;
        }
        return true;
    }
    async setShapes(message: Object): Promise<boolean> {
        try {
            let response = await this.sendSet(message, get(CONTEXTID));
            console.log("Set: successful")
        } catch (e) {
            console.log("Send shapes error:")
            console.log(e)
            return false;
        }
        return true;
    }

    async sendUpdate(message: Object, path: string) {
        let updates: { [key: string]: any } = {};
        updates[path] = message;
        await update(ref(this.database), updates);
    }
    async sendSet(message: Object, path: string) {
        await set(ref(this.database, path), message);
    }

    initiateShapeRetrieval() {
        let contextPath: string = get(CONTEXTID);
        let response: Object;

        this.stopShapeRetrieval = onValue(ref(this.database, contextPath), (snapshot) => {
            let data = snapshot.val();
            if (data === null) {
                data = {}
            }
            this.painter.reloadContext(data);
        });
    }
}