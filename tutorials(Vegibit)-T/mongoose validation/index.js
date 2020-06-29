const mongoose = require('mongoose');
 
mongoose.connect('mongodb://localhost/mongo-games')
    .then(() => console.log('Now connected to MongoDB!'))
    .catch(err => console.error('Something went wrong', err));
 
const gameSchema = new mongoose.Schema({
    title: {
        type: String, required: true,
        minlength: 4,
        maxlength: 200 },
    publisher: String,
   // tags: [String],
   /* tags: {
    type: [String],
    required: true,
    enum: ['sports', 'racing', 'action', 'rpg']
}, */
//custom validators
/* tags: {
    type: [String],
    validate: {
        validator: function (v) {
            return v.length > 1
        },
        message: 'You must provide more than 1 tag.'
    }
}, */
// async validators
tags: {
    type: [String],
    validate: {
        isAsync: true,
        validator: function (v, callback) {
            // Complete async task
            setTimeout(() => {
                const result = v.length > 1;
                callback(result);
            }, 2000);
        },
        message: 'You must provide more than 1 tag.'
    }
},
    date: { type: Date, default: Date.now },
    onSale: Boolean,
    //price: Number,
    price: {
        type: Number,
        required: function () { return this.onSale }
    }
});

const Game = mongoose.model('Game', gameSchema);
 
async function saveGame() {
    const game = new Game({
        title:"trilok",
        publisher: "Nintendo",
        tags: ["sports", "action"],
        onSale: true,
        price: 59.99,
    });
    try {
        const result = await game.save();
        console.log(result);
    } catch (err) {
        console.log(err.message)
    }
 
   // const result = await game.save();
   // console.log(result);
}
 
saveGame();