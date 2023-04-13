const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("This is a svelte app!");
});
app.listen(port, () => {
    console.log("We're listening!");
});