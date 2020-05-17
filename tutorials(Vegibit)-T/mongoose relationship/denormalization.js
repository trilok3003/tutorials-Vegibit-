const mongoose = require('mongoose');
 
mongoose.connect('mongodb://localhost/mongo-games')
    .then(() => console.log('Now connected to MongoDB!'))
    .catch(err => console.error('Something went wrong', err));
 
// Publisher Schema
const publisherSchema = new mongoose.Schema({
    companyName: String,
    firstParty: Boolean,
    website: String
})
 
// Publisher Model
const Publisher = mongoose.model('Publisher', publisherSchema);
 
// Game Schema
const gameSchema = new mongoose.Schema({
    title: String,
    publisher: publisherSchema
})
 
// Game Model
const Game = mongoose.model('Game', gameSchema);

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
        //.select('title publisher');
    console.log(games);
}
//update a sub document directly

async function updatePublisher(gameId) {
    const game = await Game.findById(gameId);
    game.publisher.companyName = 'Epic Games';
    game.publisher.website = 'https://epicgames.com/';
    game.save();
}
//update a sub document with set
async function updatePublisherSubDoc(gameId) {
    const game = await Game.update({ _id: gameId }, {
        $set: {
            'publisher.companyName': 'Bethesda Softworks',
            'publisher.website': 'https://bethesda.net/'
        }
    });
}
//Removing a sub document with unset
async function updatePublisherRemove(gameId) {
    const game = await Game.update({ _id: gameId }, {
        $unset: {
            'publisher': ''
        }
    });
}
 
//updatePublisher('5b2bf100e588f40958a9b6e7');
//createGame('Rayman', new Publisher({ companyName: 'Ubisoft', firstParty: false, website: 'https://www.ubisoft.com/' }))
//updatePublisher("5cf0cee027f1551ce0a310b0")
//updatePublisherSubDoc("5cf0cee027f1551ce0a310b0")
//updatePublisherRemove("5cf0cdfcb32d8c45106af9b8")


listGames();