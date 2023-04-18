// "typescript"

const PORT : number = 7331;

const express = require('express');
const app = express();
const path = require('path');   //    Path is used to handle paths for resources, 
                                //     and can help in the way of e.g., detecting
                                //     if a written path is faulty. Which wouldn't
                                //     been as easy if it wasn't used.

app.use( '/', express.static( path.join(__dirname, 'public') ) );

// app.get('/', (req, res) => {
//     console.log("bara _____dir: " + __dirname);
// });

app.listen(PORT, () => {
    console.log("We're listening!");
});