// "typescript"

const PORT : number = 7331;
const INDEX_PATH    = __dirname + '/montem/build';

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

app.use('/', express.static( path.join(__dirname, '/montem/build') ) );




app.listen(PORT, () => {    
    console.log("We're listening!");
});