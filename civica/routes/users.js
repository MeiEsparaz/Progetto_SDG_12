var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient; //Importo la libreria mongodb

/* GET users listing. */
router.get('/', function (req, res, next) {
    const uri = "mongodb+srv://FulgaCristian:FulgaCristian@fulgacluster0.8odzw.mongodb.net/dbname?retryWrites=true&w=majority"
    // const uri = "mongodb+srv://FulgaCristian:FulgaCristian@fulgacluster0.8odzw.mongodb.net/test"
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
        const collection = client.db("SDG12").collection("12_1"); //Mi connetto alla collection movies
        // perform actions on the collection object
        collection.find().limit(10).toArray((err, result) => {
            if (err) console.log(err.message); //Se c'è qualche errore lo stampo
            else res.send(result);
            //else console.log(result);
            client.close(); //Quando ho terminato la find chiudo la sessione con il db
        }); //Eseguo la query e passo una funzione di callback

    });
   // res.send('respond with a resource');
});

router.get('/12_2', function (req, res, next) {
    const uri = "mongodb+srv://FulgaCristian:FulgaCristian@fulgacluster0.8odzw.mongodb.net/dbname?retryWrites=true&w=majority"
    // const uri = "mongodb+srv://FulgaCristian:FulgaCristian@fulgacluster0.8odzw.mongodb.net/test"
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
        const collection = client.db("SDG12").collection("12_2"); //Mi connetto alla collection movies
        // perform actions on the collection object
        collection.find().limit(10).toArray((err, result) => {
            if (err) console.log(err.message); //Se c'è qualche errore lo stampo
            else res.send(result);
            //else console.log(result);
            client.close(); //Quando ho terminato la find chiudo la sessione con il db
        }); //Eseguo la query e passo una funzione di callback

    });
   // res.send('respond with a resource');
});

router.get('/12_3', function (req, res, next) {
    const uri = "mongodb+srv://FulgaCristian:FulgaCristian@fulgacluster0.8odzw.mongodb.net/dbname?retryWrites=true&w=majority"
    // const uri = "mongodb+srv://FulgaCristian:FulgaCristian@fulgacluster0.8odzw.mongodb.net/test"
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
        const collection = client.db("SDG12").collection("12_3"); //Mi connetto alla collection movies
        // perform actions on the collection object
        collection.find().limit(10).toArray((err, result) => {
            if (err) console.log(err.message); //Se c'è qualche errore lo stampo
            else res.send(result);
            //else console.log(result);
            client.close(); //Quando ho terminato la find chiudo la sessione con il db
        }); //Eseguo la query e passo una funzione di callback

    });
   // res.send('respond with a resource');
});

router.get('/12_4', function (req, res, next) {
    const uri = "mongodb+srv://FulgaCristian:FulgaCristian@fulgacluster0.8odzw.mongodb.net/dbname?retryWrites=true&w=majority"
    // const uri = "mongodb+srv://FulgaCristian:FulgaCristian@fulgacluster0.8odzw.mongodb.net/test"
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
        const collection = client.db("SDG12").collection("12_4"); //Mi connetto alla collection movies
        // perform actions on the collection object
        collection.find().limit(10).toArray((err, result) => {
            if (err) console.log(err.message); //Se c'è qualche errore lo stampo
            else res.send(result);
            //else console.log(result);
            client.close(); //Quando ho terminato la find chiudo la sessione con il db
        }); //Eseguo la query e passo una funzione di callback

    });
   // res.send('respond with a resource');
});


router.get('/12_5', function (req, res, next) {
    const uri = "mongodb+srv://FulgaCristian:FulgaCristian@fulgacluster0.8odzw.mongodb.net/dbname?retryWrites=true&w=majority"
    // const uri = "mongodb+srv://FulgaCristian:FulgaCristian@fulgacluster0.8odzw.mongodb.net/test"
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
        const collection = client.db("SDG12").collection("12_5"); //Mi connetto alla collection movies
        // perform actions on the collection object
        collection.find().limit(10).toArray((err, result) => {
            if (err) console.log(err.message); //Se c'è qualche errore lo stampo
            else res.send(result);
            //else console.log(result);
            client.close(); //Quando ho terminato la find chiudo la sessione con il db
        }); //Eseguo la query e passo una funzione di callback

    });
   // res.send('respond with a resource');
});

module.exports = router;