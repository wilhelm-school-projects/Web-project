import * as functions from "firebase-functions";
import { Request, Response } from 'express';

//    Path is used to handle paths for resources, 
//     and can help in the way of e.g., detecting
//     if a written path is faulty. Which wouldn't
//     been as easy if it wasn't used.
const { initializeApp } = require('firebase-admin/app');
// const { getAuth } = require('firebase-admin/auth');
const { log } = require('firebase-functions/logger')
const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

initializeApp()


exports.onCreate = functions.auth.user().onCreate(async (user) => {
    log("Functions")
    log(user)
});


app.get('/', (req: Request, res: Response) => {
    res.send('Igen!');
});

app.post('/createNewCanvas', (req: Request, res: Response) => {
    let data = req.body;
    log("user token id:")
    log(data)

    let response = { success: "Canvas created" }
    res.status(201).send(response);
    // res.status(400).send(response); Deal with this logic
})

exports.api = functions.https.onRequest(app);
