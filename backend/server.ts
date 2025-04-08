import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import mysql from 'mysql';

dotenv.config(); // serve per mettere le variabili di sistema

const PORT = process.env.PORT || 4000;
const PWD = process.env.PWD;

let app = express();
app.use(express.json());

const db = mysql.createConnection({
    host: 'srv-captain--db-witc-db',
    user: 'root',
    password: PWD,  
    database: 'witc'
});

app.listen(PORT, () => {
    console.log(`Server in ascolto sulla porta ${PORT}`);
});

// Connetti al database
db.connect((err: mysql.MysqlError | null) => {
    if (err) {
        console.error('Errore di connessione:', err);
        return;
    }
    console.log('Connesso a MySQL');
});

// test endpoint
app.get('/api', (req, res) => {
    res.send('API attiva!');
});

// // Esempio: recupera dati da una tabella
// app.get('/utenti', (req, res) => {
//     db.query('SELECT * FROM utenti', (err, results) => {
//         if (err) {
//             res.status(500).send(err);
//             return;
//         }
//         res.json(results);
//     });
// });
