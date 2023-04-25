// "typescript"

<<<<<<< HEAD
const PORT: number = 7331;
const INDEX_PATH = __dirname + '/frontend/dist';
=======
const PORT : number = 7331;
const INDEX_PATH    = __dirname + '/montem/build';
>>>>>>> 6847b9e229519b4f587db5ecd9d2b9a0df28d250

require('dotenv').config();
const { exec } = require('child_process');  //  { exec } betyder att ta ut objectet (eller funktionen?) från ett object eller array. 
//  Det är alltså samma som "const exec = require('child_process').exec;"
// const COMMAND       = 'ls ' + INDEX_PATH; 
// const lsProcess = exec( COMMAND ); 
// lsProcess.stdout.pipe(process.stdout);
console.log(process.env.PASSWORD);

const express = require('express');
const app = express();
const path = require('path');   //    Path is used to handle paths for resources, 
//     and can help in the way of e.g., detecting
//     if a written path is faulty. Which wouldn't
//     been as easy if it wasn't used.

<<<<<<< HEAD
app.use('/', express.static(path.join(__dirname, '/frontend/dist')));
=======
app.use('/', express.static( path.join(__dirname, '/montem/build') ) );
>>>>>>> 6847b9e229519b4f587db5ecd9d2b9a0df28d250

app.listen(PORT, () => {
    console.log("We're listening!");
});