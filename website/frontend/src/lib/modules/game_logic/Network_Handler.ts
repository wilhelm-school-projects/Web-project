
import { get } from 'svelte/store'
import { type FireAuth_Handler, databaseHandler } from '$lib/modules/stores'
import type { Painter } from '$lib/modules/game_logic/Painting_Handler'
import { ref, set, update, onValue, get as fireGet, remove, type Unsubscribe, type Database } from "firebase/database";
import axios, { type AxiosInstance } from 'axios';

export class NetworkHandler {
    painter: Painter;
    database: Database;
    canvasID: string;
    userEmail: string;
    authHandler: FireAuth_Handler;
    axiosInstance: AxiosInstance;
    stopShapeRetrieval: Unsubscribe;

    constructor(painter: Painter, authHandler: FireAuth_Handler) {
        this.painter = painter;
        this.authHandler = authHandler;
        this.userEmail = this.authHandler.userEmail
        this.database = get(databaseHandler)
        this.axiosInstance = axios.create({
            baseURL: 'https://us-central1-montem-d8829.cloudfunctions.net/api'  // prod
            // baseURL: 'http://localhost:5000/montem-d8829/us-central1/api',   // dev
        });
    }

    async updateShapes(message: Object): Promise<boolean> {
        try {
            let path = this.canvasID + '/shapes';
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
            let response = await this.sendSet(message, this.canvasID);
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
        console.log("skickar i sendSet message:")
        console.log(message)
        console.log("skickar i sendSet path:")
        console.log(path)
        await set(ref(this.database, path), message);
    }

    initiateShapeRetrieval() {
        let canvasPath: string = this.canvasID + '/shapes';
        let response: Object;
        try {
            this.stopShapeRetrieval = onValue(ref(this.database, canvasPath), (snapshot) => {
                let data = snapshot.val();
                if (data === null) {
                    data = {}
                }
                this.painter.reloadContext(data);
            });
        } catch (e) {
            console.log(e)
        }
    }

    private async canvasIsControlled(path: string): Promise<boolean> {
        try {
            let response = await fireGet(ref(this.database, path));
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

    async canvasExists(): Promise<boolean> {
        return new Promise(async (resolve, reject) => {
            console.log("looking if canvas exists in networker")

            // This try catch could probably be extracted to a more general
            // function shared by e.g., canvasIsControlled
            let path: string = "/" + this.canvasID
            try {
                let response = await fireGet(ref(this.database, path))
                if (!response.exists()) {
                    reject(false)
                    return;
                }
                // are we allowed etc.
            } catch (e) {
                console.log(e)
                reject(false)
                return;
            }
            resolve(true)
        })
    }


    async requestCanvasControl(): Promise<string> {
        return new Promise(async (resolve, reject) => {
            let userEmailEncoded: string | null;
            userEmailEncoded = encodeURIComponent(this.userEmail).replace('.', '%2E');

            let controlPath = this.canvasID + '/control'

            // Check if anyone has control of the canvas
            if (await this.canvasIsControlled(controlPath)) {
                reject("(requestCanvasControl) canvas is being controlled by someone else")
                return;
            }

            await this.sendUpdate(userEmailEncoded, controlPath);

            // Make sure we obtained the control
            try {
                let response = await fireGet(ref(this.database, controlPath));
                if (!response.exists()) {
                    reject("(requestCanvasControl) no email exists even though we tried to grab control")
                    return;

                }
                let email = response.val()
                if (email !== userEmailEncoded) {
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
        let controlPath = this.canvasID + '/control'
        console.log("jag tar bort den")
        await remove(ref(this.database, controlPath));
    }

    // Stuff that can't happen before mounting the game page
    async run() {
        this.initiateShapeRetrieval()
    }


    async loadCanvasID() {
        let canvasPath = 'users/' + encodeURIComponent(this.userEmail).replace('.', '%2E') + '/ownCanvas';
        let response = await fireGet(ref(this.database, canvasPath))
        this.canvasID = response.val()
    }

    // Requests to Cloud functions API
    async inviteEmailToCanvas(inviteEmail: string) {
        console.log("doing request")
        try {

            let response = await this.axiosInstance.post('/inviteUserToCanvas', {
                ownerEmail: this.userEmail,
                inviteEmail: inviteEmail,
                canvasID: this.canvasID
            })
            console.log("response from inviteUserToCanvas:")
            console.log(response)
        } catch (e) {
            console.log("Error in requesting to inviate email to canvas")
            console.log(e)
        }
    }
    // async setUserCanvasClaims(): Promise<boolean> {
    //     console.log("auth handle i set canvas claims")
    //     console.log(this.authHandler)
    //     return new Promise(async (resolve, reject) => {
    //         try {
    //             let response = await this.axiosInstance.post('/setUserClaimsNewCanvas', {
    //                 userID: this.authHandler.userCredentials?.user.uid,
    //                 canvasID: this.canvasID
    //             })
    //             console.log("setuserclaims response:")
    //             console.log(response)
    //         } catch (e) {
    //             console.log(e)
    //             reject(false)
    //             return
    //         }
    //         resolve(true)
    //     })
    // }
}