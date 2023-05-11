// H
// https://stackoverflow.com/questions/50918961/serve-html-file-using-firebase-function
import * as functions from "firebase-functions";
import { Request, Response } from 'express';

const PORT: number = 7331;
// const INDEX_PATH = __dirname + '/montem/build';

// get environment variables
// require('dotenv').config();

// init connection to database
// const mysql = require('mysql2')
// const connection_values = {
//     host: process.env.HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB
// }
// const connection = mysql.createConnection(connection_values);
// connection.connect(error => {
//     if (error) throw error;
//     console.log("Successfully connected to " + process.env.DB);
// })

//  { exec } betyder att ta ut objectet (eller funktionen?) från ett object eller array. 
//  Det är alltså samma som "const exec = require('child_process').exec;"
const { exec } = require('child_process');
const COMMAND = 'ls frontend/build';
const lsProcess = exec(COMMAND);
lsProcess.stdout.pipe(process.stdout);
exec(COMMAND,
    (stdout: any) => {
        functions.logger.log(stdout);
    }
);

//    Path is used to handle paths for resources, 
//     and can help in the way of e.g., detecting
//     if a written path is faulty. Which wouldn't
//     been as easy if it wasn't used.
const express = require('express');
const app = express();
// const path = require('path');

app.get('/', (req: Request, res: Response) => {
    res.send('Hello world!');
});


app.listen(PORT, () => {
    console.log("We're listening!");
});

exports.api = functions.https.onRequest(app);
