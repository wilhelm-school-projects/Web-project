// TODO: put database stuff in seperate file

const PORT: number = 7331;
const INDEX_PATH = __dirname + '/montem/build';

// get environment variables
require('dotenv').config();

// init connection to database
const mysql = require('mysql2')
const connection_values = {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB
}
const connection = mysql.createConnection(connection_values);
// connection.connect(error => {
//     if (error) throw error;
//     console.log("Successfully connected to " + process.env.DB);
// })
const { exec } = require('child_process');  //  { exec } betyder att ta ut objectet (eller funktionen?) från ett object eller array. 
//  Det är alltså samma som "const exec = require('child_process').exec;"
// const COMMAND       = 'ls ' + INDEX_PATH; 
// const lsProcess = exec( COMMAND ); 
// lsProcess.stdout.pipe(process.stdout);

const express = require('express');
const app = express();
const path = require('path');   //    Path is used to handle paths for resources, 
//     and can help in the way of e.g., detecting
//     if a written path is faulty. Which wouldn't
//     been as easy if it wasn't used.

app.use('/', express.static(path.join(__dirname, '/montem/build')));




app.listen(PORT, () => {
    console.log("We're listening!");
});