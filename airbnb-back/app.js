const express = require("express");
const app = express();
const cors = require('cors');
//const split = require("split3").verbose();
const port = 3000;
//const db = new sqlite3.Database('accomodation.db');


app.get('/', (req, res) => {
  res.send('API !');
});

// app.get('/accomodation', (req, res) => {

// })

app.listen(port, () => {
    console.log(`Serveur écoutant sur le port ${port}`);
});