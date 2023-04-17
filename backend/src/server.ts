// "typescript"

const ETILE = 7331;
const INDEX_PATH  = __dirname + '/public/index.html';

const express = require('express');
const app = express();
const port = ETILE;

app.get('/', (req, res) => {
    console.log("bara _____dir: " + __dirname);
    res.sendFile(INDEX_PATH);
});
app.listen(port, () => {
    console.log("We're listening!");
});