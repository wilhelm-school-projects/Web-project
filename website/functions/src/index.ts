import * as functions from "firebase-functions";
import { Request, Response } from 'express';

// Admin sdk
const { initializeApp } = require('firebase-admin/app');
const { getAuth } = require('firebase-admin/auth');
const { log } = require('firebase-functions/logger')
const { getDatabase } = require('firebase-admin/database');

// Other
const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

initializeApp()
const db = getDatabase();

app.get('/', (req: Request, res: Response) => {
    res.send('Nothing much here');
});




exports.processSignUp = functions.auth.user().onCreate(async (user) => {
    console.log("user in processSignUp:")
    console.log(user)

    try {
        // Set custom user claims on this newly created user.
        // await getAuth().setCustomUserClaims(user.uid, customClaims);

        // Update real-time database to notify client to force refresh.
        // const metadataRef = getDatabase().ref('metadata/' + user.uid);

        // let updates: { [key: string]: any } = {};
        let canvasID: string = "canvas-id-" + Math.round(Math.random() * 10000);
        console.log("canvasID")
        console.log(canvasID)
        let userEmailEncoded = encodeURIComponent(user.email as string).replace('.', '%2E');
        console.log("encoded")
        console.log(userEmailEncoded)
        console.log("getAuth return value: ")
        console.log(getAuth())
        let newCanvas = { [canvasID]: { owner: userEmailEncoded } }
        let newUser = { [userEmailEncoded]: { ownCanvas: canvasID } }
        const rootRef = db.ref('/');
        const usersRef = db.ref('/users')
        // Create canvas in database
        rootRef.update(newCanvas, (error: Error) => {
            if (error) {
                console.log('Data could not be saved.' + error);
            } else {
                console.log('Data saved successfully.');
            }
        })

        // Create users canvas participations in database
        usersRef.update(newUser, (error: Error) => {
            if (error) {
                console.log('Data could not be saved.' + error);
            } else {
                console.log('Data saved successfully.');
            }
        })

        // await claimCanvas(canvasID, user.email as string)
        console.log("calling claimcanvas:")
        console.log(canvasID + " " + user.email)
        // await claimCanvas(canvasID, user.email as string)
        claimCanvas(canvasID, user.email as string).then(() => {
            console.log("done with calling claimcanvas")
        }).catch((e: Error) => {
            console.log("Error in processSignUp")
            console.log(e)
        })
        // Set user permissions to read / write to canvas. Prob do in a function
        // so it can be used when inviting new users

        // db.setRules(j)
        // context-id-2108
        // await getAuth().setCustomUserClaims(user.uid, {
        //     "context-id-2108": "$user_id === auth.uid"
        // });
        // // Set the refresh time to the current UTC timestamp.
        // // This will be captured on the client to force a token refresh.
        // await metadataRef.set({ refreshTime: new Date().getTime() });
    } catch (error) {
        console.log(error);
    }
    // } else {
    //     log("Inte verifierad")
    //     log(user)
    // }

});

async function claimCanvas(canvasID: string, email: string) {
    // rulesJSON.rules gives me what object I want, change to that!!
    let rules: any;
    rules = await db.getRulesJSON()
    console.log("rules:")
    console.log(rules)
    // For some reason await doesn't work here
    // log(await db.getRulesJSON())
    // try {
    //     rules = await db.getRulesJSON()
    // } catch (e) {
    //     console.log("getUlresJSON didnt work:")
    //     console.log(e)
    // }

    // Get database rules
    db.getRulesJSON().then((rulesJSON: any) => {
        log("(console) i then")
        console.log(rulesJSON)
        rules = rulesJSON

        console.log("old rules:")
        log(rules)
        if (!rules.hasOwnProperty('users')) {
            console.log("doesn't have users key")
            rules.users = {}
            console.log("Now it does:")
            console.log(rules)
        } else {
            console.log("(console) hej den har nyckeln")
        }

        if (!rulesJSON.rules.hasOwnProperty('users')) {
            console.log("no variable doesn't have users key")
            rules.users = {}
            console.log("no variable Now it does:")
            console.log(rulesJSON.rules)
        } else {
            console.log("no variable it actually did have the key:")
            console.log(rulesJSON.rules)
        }


        let readWrite = {
            ".read": "true",
            ".write": "true"
        }
        let encodedEmail = encodeURIComponent(email).replace('.', '%2E')

        rules.users[encodedEmail] = readWrite
        rules[canvasID] = readWrite
        console.log("new rules:")
        console.log(rules)

        // let canvasAccessRules = {
        //     rules: {
        //         [canvasID]: {
        //             ".read": "true",
        //             ".write": "true"
        //         },
        //         "users": {
        //             [encodedEmail]: {
        //                 ".read": "true",
        //                 ".write": "true"
        //             }
        //         }
        //     }
        // }
        // try {
        //     await db.setRules(rules);
        // } catch (e) {
        //     console.error("Error updating rules:", e);
        // }
        db.setRules(rules).then().catch((e: Error) => {
            console.log("Error in setRules:", e)
        })
        db.getRules().then((rules: string) => {
            console.log("After, rules in database:")
            console.log(rules)
        })
    }).catch((err: Error) => {
        console.log("Error in getrulesJSON:")
        console.log(err)
    })

}

// should get in body: email, canvas id 
app.post('/claimReadWriteToCanvas', async (req: Request, res: Response) => {

    let data = req.body;
    // log("request body:")
    log(data.userEmail)
    log(data.canvasID)
    // async?
    await claimCanvas(data.canvasID, data.userEmail)
    // const claims = await getAuth().verifyIdToken(data.userID);
    // log("claims variable:")
    // log(claims)

    // // Add custom claims for additional privileges.
    // await getAuth().setCustomUserClaims(claims.sub, {
    //     canvasID: true
    // });

    // let response = { success: "Canvas created" }
    // res.status(201).send(response);
    // // res.status(400).send(response); Deal with this logic
    // // Verify the ID token and decode its payload.

    // // Verify user is eligible for additional privileges.
    // if (
    //     typeof claims.email !== 'undefined' &&
    //     typeof claims.email_verified !== 'undefined' &&
    //     claims.email_verified &&
    //     claims.email.endsWith('@admin.example.com')
    // ) {

    //     // Tell client to refresh token on user.
    //     res.end(JSON.stringify({
    //         status: 'success'
    //     }));
    // } else {
    //     // Return nothing.
    //     res.end(JSON.stringify({ status: 'ineligible' }));
    // }

})

exports.api = functions.https.onRequest(app);
