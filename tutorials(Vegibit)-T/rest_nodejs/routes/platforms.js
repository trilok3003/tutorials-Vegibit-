
// step1 
const {Platform, validate} = require('../models/platform');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
// step2
router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
 
    let platform = new Platform({ name: req.body.name });
    platform = await platform.save();
 
    res.send(platform);
});
// step 3
router.get('/', async (req, res) => {
    const platforms = await Platform.find().sort('name');
    res.send(platforms);
});
// step 4
router.put('/:id', async (req, res) => {
    const { error } = validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
 
    const platform = await Platform.findByIdAndUpdate(req.params.id, { name: req.body.name }, {
        new: true
    });
 
    if (!platform) {
        return res.status(404).send('That platform ID was not found');
    }
 
    res.send(platform);
});
// step 5
router.delete('/:id', async (req, res) => {
    const platform = await Platform.findByIdAndRemove(req.params.id);
 
    if (!platform) {
        return res.status(404).send('That platform ID was not found');
    }
 
    res.send(platform);
});
// step 6
router.get('/:id', async (req, res) => {
    const platform = await Platform.findById(req.params.id);
 
    if (!platform) {
        return res.status(404).send('That platform ID was not found');
    }
 
    res.send(platform);
});
// step 7
 
module.exports = router;



