const express = require("express");
const app = express();
//const cors = require('cors');
//const split = require("split3").verbose();
const port = 3000;

app.get('/', (req, res) => {
  res.send('API !');
});

app.get('/items', (req, res) => {
    const data = [{
        name : "yanis",
        subItems : [{
            price : "150"
            }]
    }]
    res.json(data);
})

app.listen(port, () => {
    console.log(`Serveur écoutant sur le port ${port}`);
});