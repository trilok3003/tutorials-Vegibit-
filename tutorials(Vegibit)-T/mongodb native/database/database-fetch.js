const MongoClient = require('mongodb').MongoClient;
 
MongoClient.connect('mongodb://localhost:27017/StockApp', {
    useNewUrlParser: true
}, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB');
    }
    console.log('Connected to MongoDB');
 
    const db = client.db('StockApp');
    async function fetch(){
        db.collection('Stocks').find().toArray().then((docs) => {
            console.log('Stocks');
            console.log(JSON.stringify(docs, undefined, 2));
        }, (err) => {
            console.log('Unable to fetch stocks', err);
        });
    }
    async function fetch1(){
        db.collection('Stocks').find({inPortfolio:true}).toArray().then((docs) => {
            console.log('Stocks');
            console.log(JSON.stringify(docs, undefined, 2));
        }, (err) => {
            console.log('Unable to fetch stocks', err);
        });
    }
    async function count(){
        db.collection('Stocks').find().count().then((docs) => {
            console.log('Stocks');
            console.log(JSON.stringify(docs, undefined, 2));
        }, (err) => {
            console.log('Unable to fetch stocks', err);
        });
    }
    count();
    client.close();
});