import * as functions from "firebase-functions";
import { Request, Response } from 'express';

//    Path is used to handle paths for resources, 
//     and can help in the way of e.g., detecting
//     if a written path is faulty. Which wouldn't
//     been as easy if it wasn't used.
const express = require('express');
const app = express();
// const path = require('path');

app.get('/', (req: Request, res: Response) => {
    res.send('Igen!');
});


exports.api = functions.https.onRequest(app);
