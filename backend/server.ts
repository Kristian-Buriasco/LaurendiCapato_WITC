import express, {Request, Response} from 'express';
import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config(); // serve per mettere le variabili di sistema

const MONGO_URI = process.env.MONGO_URI || "";
const PORT = 4000;
const DB_NAME = "5E";
const COLLECTION_NAME = "unicorns";

// DEBUG insert a request to http://srv-captain--backend-witc;
fetch("http://srv-captain--backend-witc/")
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));


let ex = express();
const client = new MongoClient(MONGO_URI);

async function connectDB() {

    try
    {
        await client.connect();
        console.log("Connesso");
    }
    catch(error){
        console.log("Errore", error);
    }
}

ex.listen(PORT, () => {
    console.log(`Server in ascolto su: http://localhost:${PORT}`);
});


ex.get("/", (req: Request, res: Response) => {
    res.send("Server is running!");
});
