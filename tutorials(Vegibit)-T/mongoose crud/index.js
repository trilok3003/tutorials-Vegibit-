

// connect mongodb
const mongoose = require('mongoose');
 
mongoose.connect('mongodb://localhost:27017/mongo-games')
    .then(() => 'You are now connected to Mongo!')
    .catch(err => console.error('Something went wrong', err));
// create schema
    const gameSchema = new mongoose.Schema({
        title: String,
        publisher: String,
        tags: [String],
        date: {
            type: Date,
            default: Date.now
        },
        onSale: Boolean,
        price: Number
    });
// create model
    const Game = mongoose.model('Game', gameSchema);
// create game
    async function saveGame() {
        const game = new Game({
            title: "The Legend of Zelda: Breath of the Wild",
            publisher: "Trilok",
            tags: ["adventure", "action"],
            onSale: false,
            price: 35,
        });
     
        const result = await game.save();
        console.log(result);
    }
  // get games
    async function getGames() {
        const games = await Game.find();
        console.log(games);
    }
     
// filter
async function getGamesFilter() {
    const games = await Game.find({
        publisher: 'Nintendo',
        onSale: false
    });
    console.log(games);
}
// sort

async function getGamesSort() {
    const games = await Game
        .find({ publisher: 'Nintendo', onSale: false })
        .sort({ price: 1 });
 
    console.log(games);
}
// selecting only certain thing
 
async function getGamesSelect() {
    const games = await Game
        .find({ publisher: 'Nintendo', onSale: false })
        .sort({ price: 1 })
        .select({ title: 1, price: 1 });
 
    console.log(games);
}
// Comparison Query Operators
async function getGamesCompare() {
    const games = await Game
        //.find({ price: { $lt: 50 } })
       // .find({ price: { $in: [19.99, 35.99, 59.99] } })
       .find({ price: { $gt: 10, $lt: 50 } })
        .sort({ price: 1 })
        .select({ title: 1, price: 1 });
 
    console.log(games);
}
//Logical Query Operators
async function getGamesOr() {
    const games = await Game
        .find()
        .or([{ publisher: 'Nintendo' }, { onSale: false }])
        .sort({ price: 1 })
        .select({ publisher: 1, title: 1, onSale: 1 });
 
    console.log(games);
}
async function getGamesOrAnd() {
    const games = await Game
        .find()
        .or([{ publisher: 'Nintendo' }, { onSale: true }])
        .and([{ price: { $lt: 50 } }])
        .sort({ price: 1 })
        .select({ publisher: 1, title: 1, onSale: 1, price: 1 });
 
    console.log(games);
}
//Updating Documents  using Query First
async function updateGame(id) {
    const game = await Game.findById(id);
    if (!game) return
 
    game.price = 24;
 
    const result = await game.save();
    console.log(result);
}
//Updating a Document using Update First
async function updateGame1(id) {
    const result = await Game.update({ _id: id }, {
        $set: {
            title: 'A Link Between Worlds',
            price: 55
        }
    });
    console.log(result);
}
//seeing Updating a Document after Update 

async function updateGame2(id) {
    const game = await Game.findByIdAndUpdate({ _id: id }, {
        $set: {
            title: 'Ocarina of Time ',
            price: 35
        }
    }, { new: true });
    console.log(game);
}
// Remove(Delete) Documents
async function deleteGame(id) {
    const result = await Game.deleteOne({ _id: id })
    console.log(result);
}
