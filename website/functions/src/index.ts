import * as functions from "firebase-functions";
import { Request, Response } from 'express';

// TODO:
//  1.  Split logic into different files
//  2.  "inviteToCanvas": check if user already exists
//  3.  relevant status codes
//  4.  This function is not done or used yet: 

// async function expandCanvasParticipationList(canvasID: string, userEmail: string) {
//     console.log("expand canvas participation:")
//     let encodedEmail = encodeURIComponent(userEmail).replace('.', '%2E')
//     let userPath = '/users/' + encodedEmail;
//     console.log(encodedEmail)
//     console.log(userPath)

//     const userRef = db.ref(userPath)
//     //  get list of canvas participations
//     //  concat this new canvasID
//     //  send update to db
// }

// 

// Firebase
const { initializeApp } = require('firebase-admin/app');
const { getDatabase } = require('firebase-admin/database');
const { log } = require('firebase-functions/logger')

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

//  When a user signs up on the web app, this important stuff is done:
//  1.  Create a canvas in the database
//  2.  Create the user in the database
//  3.  Make the user able to read/write to these
exports.processSignUp = functions.auth.user().onCreate(async (user) => {
    try {
        let canvasID: string = "canvas-" + Math.round(Math.random() * 1000000);
        let userEmailEncoded = encodeURIComponent(user.email as string).replace('.', '%2E');

        // Create canvas in database
        let newCanvas = { [canvasID]: { owner: userEmailEncoded } }
        const rootRef = db.ref('/');

        rootRef.update(newCanvas, (error: Error) => {
            if (error) {
                console.log('Data could not be saved.' + error);
            } else {
                console.log('Data saved successfully.');
            }
        })

        // Create users canvas participations in database
        let newUser = { [userEmailEncoded]: { ownCanvas: canvasID } }
        const usersRef = db.ref('/users')

        usersRef.update(newUser, (error: Error) => {
            if (error) {
                console.log('Data could not be saved.' + error);
            } else {
                console.log('Data saved successfully.');
            }
        })

        setAllClaims(canvasID, user.email as string).then(() => {
            console.log("done with calling claimcanvas")
        }).catch((e: Error) => {
            console.log("Error in processSignUp")
            console.log(e)
        })
    } catch (error) {
        console.log(error);
    }
});

// TODO: Use "fetchSignInMethodsForEmail" to check that the invited email
// actually is signed up on the web app
app.post('/inviteUserToCanvas', async (req: Request, res: Response) => {
    let data = req.body;
    try {
        await setCanvasClaimToUser(data.canvasID, data.ownerEmail, data.inviteEmail)
        res.status(201).send("User is invited to canvas")
    } catch (e) {
        res.status(400).send("Something went wrong in the server")
    }
})

// Real time database rules functions
async function setAllClaims(canvasID: string, userEmail: string) {
    let constructedRules: any;
    db.getRulesJSON().then((rulesJSON: any) => {
        constructedRules = rulesJSON.rules

        concatCanvasClaim(canvasID, userEmail, userEmail, constructedRules);
        concatUserClaim(userEmail, constructedRules)

        let result = { rules: constructedRules }
        console.log("Finished new rules:")
        log(result)
        setNewRules(result);

    }).catch((err: Error) => {
        console.log("Error in getrulesJSON:")
        console.log(err)
    })
}

async function setCanvasClaimToUser(canvasID: string, ownerEmail: string, inviteEmail: string) {
    let constructedRules: any;
    db.getRulesJSON().then((rulesJSON: any) => {
        constructedRules = rulesJSON.rules

        concatCanvasClaim(canvasID, ownerEmail, inviteEmail, constructedRules);

        let result = { rules: constructedRules }
        console.log("Finished new rules:")
        log(result)
        setNewRules(result);

    }).catch((err: Error) => {
        console.log("Error in getrulesJSON:")
        throw err
    })
}

async function setNewRules(newRules: any) {
    db.setRules(newRules).then(() => {
        console.log("setNewRules went fine")
    }).catch((e: Error) => {
        console.log("Error in setRules:", e)
    })
}

async function concatCanvasClaim(canvasID: string, ownerEmail: string, inviteEmail: string, rules: any) {
    let emailCondition: string;
    if (rules.hasOwnProperty(canvasID)) {
        let oldEmailCondition: string = rules[canvasID]['.read'] // read / write has same condition
        emailCondition = oldEmailCondition + " || " + "auth.token.email === \'" + inviteEmail + "\'"
    } else {
        emailCondition = "auth.token.email === " + "\'" + ownerEmail + "\'"
    }

    let readWriteRules = {
        ".read": emailCondition,
        ".write": emailCondition
    }
    rules[canvasID] = readWriteRules
}

async function concatUserClaim(userEmail: string, rules: any) {
    if (!rules.hasOwnProperty('users')) {
        rules.users = {}
    }

    let encodedEmail = encodeURIComponent(userEmail).replace('.', '%2E')
    let emailCondition = "auth.token.email === " + "\'" + userEmail + "\'"
    let readWrite = {
        ".read": emailCondition,
        ".write": emailCondition
    }
    rules.users[encodedEmail] = readWrite
}


exports.api = functions.https.onRequest(app);