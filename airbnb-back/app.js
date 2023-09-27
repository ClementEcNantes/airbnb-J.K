const express = require("express");
const app = express();
const cors = require('cors');
const sqlite3 = require("sqlite3").verbose();
const port = 3000;
const db = new sqlite3.Database('accommodations.db');

app.use(cors()); // Gestion des CORS

app.get('/', (req, res) => {
  res.send('API !');
});

app.get('/accommodations', (req, res) => {
  // Exécutez une requête SQL pour obtenir les données d'accommodations.db
  db.all('SELECT * FROM accommodations', (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: 'Erreur lors de la récupération des données' });
      return;
    }
    
    // Renvoyer les données en tant que réponse JSON
    res.json(rows);
  });
});

app.listen(port, () => {
  console.log(`Serveur écoutant sur le port ${port}`);
});
