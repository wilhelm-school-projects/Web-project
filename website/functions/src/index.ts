import * as functions from "firebase-functions";
import { Request, Response } from 'express';

// TODO:
//  1.  Split logic into different files
//  2.  "inviteToCanvas": check if user already exists
//  3.  relevant status codes


// Admin sdk
const { initializeApp } = require('firebase-admin/app');
// const { getAuth } = require('firebase-admin/auth');
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
        // Update real-time database to notify client to force refresh.
        // const metadataRef = getDatabase().ref('metadata/' + user.uid);

        let canvasID: string = "canvas-" + Math.round(Math.random() * 1000000);
        let userEmailEncoded = encodeURIComponent(user.email as string).replace('.', '%2E');

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

async function setAllClaims(canvasID: string, userEmail: string) {
    let constructedRules: any;
    db.getRulesJSON().then((rulesJSON: any) => {
        constructedRules = rulesJSON.rules

        concatCanvasClaim(canvasID, userEmail, userEmail, constructedRules);
        concatUserClaim(userEmail, constructedRules)

        let result = { rules: constructedRules }
        console.log("Finished rules:")
        log(result)
        setNewRules(result);

    }).catch((err: Error) => {
        console.log("Error in getrulesJSON:")
        console.log(err)
    })
}

async function setCanvasClaimToUser(canvasID: string, ownerEmail: string, inviteEmail: string) {
    // Errors are being thrown correctly
    let constructedRules: any;
    db.getRulesJSON().then((rulesJSON: any) => {
        constructedRules = rulesJSON.rules

        concatCanvasClaim(canvasID, ownerEmail, inviteEmail, constructedRules);

        let result = { rules: constructedRules }
        console.log("(setCanvasClaimTOUser) Finished rules:")
        log(result)
        setNewRules(result);

    }).catch((err: Error) => {
        console.log("Error in getrulesJSON:")
        throw err
    })
}

async function setNewRules(newRules: any) {

    db.setRules(newRules).then(() => {
        console.log("setRules supposedly when fine?")
    }).catch((e: Error) => {
        console.log("Error in setRules:", e)
    })
    db.getRules().then((newRules: string) => {
        console.log("After, rules in database:")
        console.log(newRules)
    })
}



async function concatCanvasClaim(canvasID: string, ownerEmail: string, inviteEmail: string, rules: any) {
    console.log("inside concatCanvasClaim:")
    console.log(inviteEmail)
    console.log(" ")
    console.log(ownerEmail)
    console.log(" ")
    console.log(canvasID)
    console.log(" ")
    console.log(rules)
    let emailCondition: string;

    //  True: Let inviteEmail be able to read / write on ownerEmail's canvas
    //  False: No one owns this canvas, give read / write to ownerEmail
    if (rules.hasOwnProperty(canvasID)) {
        let oldEmailCondition: string = rules[canvasID]['.read'] // read / write has same condition
        console.log("old email condition:")
        console.log(oldEmailCondition)
        emailCondition = oldEmailCondition + " || " + "auth.token.email === \'" + inviteEmail + "\'"
    } else {
        console.log("didn't have canvasID property")
        emailCondition = "auth.token.email === " + "\'" + ownerEmail + "\'"
    }
    console.log("new emailCondition:")
    console.log(emailCondition)

    let readWrite = {
        ".read": emailCondition,
        ".write": emailCondition
    }
    rules[canvasID] = readWrite
    console.log("new rules (inside concatCanvasClaim):")
    log(rules)
}

async function concatUserClaim(userEmail: string, rules: any) {
    console.log(userEmail)
    console.log(" ")
    console.log(rules)
    if (!rules.hasOwnProperty('users')) {
        console.log("doesn't have users key")
        rules.users = {}
        console.log("Now it does:")
        log(rules)
    } else {
        console.log("(console) hej den har nyckeln")
        log(rules)
    }
    let encodedEmail = encodeURIComponent(userEmail).replace('.', '%2E')
    let emailCondition = "auth.token.email === " + "\'" + userEmail + "\'"
    let readWrite = {
        ".read": emailCondition,
        ".write": emailCondition
    }
    rules.users[encodedEmail] = readWrite
}

// should get in body: email, canvas id 
app.post('/inviteUserToCanvas', async (req: Request, res: Response) => {
    // fetchSignInMethodsForEmail
    // add user claims to canvas
    // add canvas id to participations
    console.log("inside inviteUserToCanvas")
    let data = req.body;
    console.log(data.ownerEmail)
    console.log(" ")
    console.log(data.inviteEmail)
    console.log(" ")
    console.log(data.canvasID)
    try {
        // await expandCanvasParticipationList(data.canvasID, data.inviteEmail)
        await setCanvasClaimToUser(data.canvasID, data.ownerEmail, data.inviteEmail)
        res.status(201).send("User is invited to canvas")
        return; // necessary?
    } catch (e) {
        res.status(400).send("Something went wrong in the server")
        return;
    }

})

// TODO: Not done or used yet 
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

exports.api = functions.https.onRequest(app);