
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
const MongoClient = require('mongodb').MongoClient;
 
MongoClient.connect('mongodb://localhost:27017/StockApp', {
    useNewUrlParser: true
}, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB');
    }
    console.log('Connected to MongoDB');
 
    const db = client.db('StockApp');
    db.collection('Stocks').insertMany([{
        ticker: 'MDB',
        inPortfolio: true
    }, {
        ticker: 'NFLX',
        inPortfolio: true
    }, {
        ticker: 'AAPL',
        inPortfolio: true
    }, {
        ticker: 'MSFT',
        inPortfolio: true
    }, {
        ticker: 'IQ',
        inPortfolio: true
    }]).then((result) => {
        console.log(result);
    });
 
    client.close();
});