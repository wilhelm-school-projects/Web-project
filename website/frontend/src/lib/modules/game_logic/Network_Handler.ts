
import { get } from 'svelte/store'
import { CONTEXTID } from '$lib/modules/stores'
import type { Painter } from '$lib/modules/game_logic/Painting_Handler'

import { database } from '$lib/modules/firebase'
import { ref, set, update, onValue, get as fireGet, remove, type Unsubscribe } from "firebase/database";

export class NetworkHandler {
    painter: Painter;
    stopShapeRetrieval: Unsubscribe;

    constructor(painter: Painter) {
        this.painter = painter;
    }

    async updateShapes(message: Object): Promise<boolean> {
        try {
            let path = get(CONTEXTID) + '/shapes';
            let response = await this.sendUpdate(message, path);
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
        await update(ref(database), updates);
    }
    async sendSet(message: Object, path: string) {
        await set(ref(database, path), message);
    }

    initiateShapeRetrieval() {
        let contextPath: string = get(CONTEXTID) + '/shapes';
        let response: Object;

        this.stopShapeRetrieval = onValue(ref(database, contextPath), (snapshot) => {
            let data = snapshot.val();
            if (data === null) {
                data = {}
            }
            this.painter.reloadContext(data);
        });
    }

    private async canvasIsControlled(path: string): Promise<boolean> {
        try {
            let response = await fireGet(ref(database, path));
            if (!response.exists()) {
                return false;
            }
        } catch (e) {
            console.log("(canvasIsControlled) Failure:")
            console.log(e)
            return false;
        }
        return true;
    }

    async requestCanvasControl(): Promise<string> {
        return new Promise(async (resolve, reject) => {
            let userEmail: string | null = localStorage.getItem("email");
            if (userEmail === null) {
                reject("(reuquestCanvasControl) user email doens't exist in localstorage")
                return; // reject does not return the function
            }
            userEmail = encodeURIComponent(userEmail).replace('.', '%2E');
            let controlPath = get(CONTEXTID) + '/control'

            // Check if anyone has control of the canvas
            if (await this.canvasIsControlled(controlPath)) {
                reject("(requestCanvasControl) canvas is being controlled by someone else")
                return;
            }

            await this.sendUpdate(userEmail, controlPath);

            // Make sure we obtained the control
            try {
                let response = await fireGet(ref(database, controlPath));
                if (!response.exists()) {
                    reject("(requestCanvasControl) no email exists even though we tried to grab control")
                    return;

                }
                let email = response.val()
                if (email !== userEmail) {
                    // Someone else was quicker to grab the control
                    reject("Another user controls the canvas")
                    return
                }
            } catch (e) {
                reject("(requestCanvasControl) fireGet failed when checking if we got control:")
                return;
            }
            resolve("Successfully grabbed control over canvas")
        });
    }

    async removeCanvasControl() {
        let controlPath = get(CONTEXTID) + '/control'
        await remove(ref(database, controlPath));
    }


}