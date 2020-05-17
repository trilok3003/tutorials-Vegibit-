const mongoose = require('mongoose');
 
mongoose.connect('mongodb://localhost/mongo-games')
    .then(() => console.log('Now connected to MongoDB!'))
    .catch(err => console.error('Something went wrong', err));
 
const Publisher = mongoose.model('Publisher', new mongoose.Schema({
    companyName: String,
    firstParty: Boolean,
    website: String
}));
 
const Game = mongoose.model('Game', new mongoose.Schema({
    title: String,
    publisher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Publisher'
    }
}));
 
async function createPublisher(companyName, firstParty, website) {
    const publisher = new Publisher({
        companyName,
        firstParty,
        website
    });
 
    const result = await publisher.save();
    console.log(result);
}
 
async function createGame(title, publisher) {
    const game = new Game({
        title,
        publisher
    });
 
    const result = await game.save();
    console.log(result);
}
 
async function listGames() {
    const games = await Game
        .find()
        .select('title');
    console.log(games);
}
async function listGames() {
    const games = await Game
        .find()
        //.populate('publisher')
       // .populate('publisher', 'companyName')
       .populate('publisher', 'companyName -_id')
       // .select('title');
        .select('title publisher');
    console.log(games);
}
 
 
//createPublisher('Nintendo', true, 'https://www.nintendo.com/');
//createGame('Super Smash Bros', '5cf0cde6153d2b459cb788a3');
listGames();
