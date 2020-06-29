const MongoClient = require('mongodb').MongoClient;
 
MongoClient.connect('mongodb://localhost:27017/StockApp', {
    useNewUrlParser: true
},(err, client) => {
    
    if (err) {
        return console.log('Unable to connect to MongoDB');
    }
    console.log('Connected to MongoDB');
    // create
    const db = client.db('StockApp');
    db.collection('Stocks').insertOne({
        ticker: 'AAPL',
        inPortfolio: false
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert stock', err);
        }
 
        console.log(JSON.stringify(result.ops, undefined, 2));
    });
 
    client.close();
});