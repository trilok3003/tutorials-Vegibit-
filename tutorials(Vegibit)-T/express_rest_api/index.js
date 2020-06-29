const express = require('express');
const app = express();
const games = require('./data');
const Joi = require('joi');

app.use(express.json());

 
app.get('/', (req, res) => {
    res.send("hello");
});
app.get('/api/games', (req, res) => {
    res.send(['Mario', 'Zelda', 'Donkey Kong']);
});
// single params
app.get('/api/games/:id', (req, res) => {
    res.send(req.params.id);
});
// multiple params
app.get('/api/games/:title/:publisher', (req, res) => {
    res.send(req.params);
});
// query params
app.get('/api/games1/:title/:publisher', (req, res) => {
    res.send([req.params, req.query]);
});
// all games
app.get('/api1/games', (req, res) => {
    res.send(games);
});
// get game by id
app.get('/api1/games/:id', (req, res) => {
    const game = games.find(g => g.id === parseInt(req.params.id));
    if (!game) return res.status(404).send('The game with the given ID was not found.');
    res.send(game);
});
// add a game
app.post('/api1/games', (req, res) => {
   //joi 
    const schema = {
        title: Joi.string().min(2).required()
    };
 
    const result = Joi.validate(req.body, schema);
    if (result.error) {
        res.status(400).send(result.error)
    }
    // end joi
    const game = {
        id: games.length + 1,
        title: req.body.title
    }
    games.push(game);
    res.send(game);
});

// update a game
app.put('/api1/games/:id', (req, res) => {
    const game = games.find(g => g.id === parseInt(req.params.id));
    if (!game) return res.status(404).send('The game with the given ID was not found.');
 
    const schema = {
        title: Joi.string().min(2).required()
    };
 
    const result = Joi.validate(req.body, schema);
    if (result.error) {
        res.status(400).send(result.error)
    }
 
    game.title = req.body.title;
    res.send(game);
});

// delete a game
app.delete('/api1/games/:id', (req, res) => {
    const game = games.find(g => g.id === parseInt(req.params.id));
    if (!game) return res.status(404).send('The game with the given ID was not found.');
 
    const index = games.indexOf(game);
    games.splice(index, 1);
 
    res.send(game);
});

// setting port with environment variable
const port = process.env.PORT || 3000;
 
app.listen(port, () => console.log(`Listening on port ${port}`));