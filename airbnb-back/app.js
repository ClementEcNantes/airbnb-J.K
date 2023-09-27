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

app.get('/accommodations/:id', (req, res) => {
    const id = req.params.id; // Récupérer l'ID de la demande
  
    // Exécutez une requête SQL pour obtenir une seule ligne en fonction de l'ID
    db.get('SELECT * FROM accommodations WHERE id = ?', [id], (err, row) => {
      if (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erreur lors de la récupération des données' });
        return;
      }
  
      // Vérifiez si une ligne avec l'ID spécifié a été trouvée
      if (!row) {
        res.status(404).json({ error: 'Aucun hébergement trouvé avec cet ID' });
        return;
      }
  
      // Renvoyer la ligne trouvée en tant que réponse JSON
      res.json(row);
    });
  });
  
  


app.listen(port, () => {
  console.log(`Serveur écoutant sur le port ${port}`);
});
