const config = require('config');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const mongoose = require('mongoose');
 
// Extract Schema to it's own constant
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024
    },
});
 
// Information Expert Principle (add method to model)
userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, config.get('PrivateKey'));
    return token;
};
 
// Create new user model
const User = mongoose.model('User', userSchema);
 
function validateUser(user) {
    const schema = {
        name: Joi.string().min(5).max(50).required(),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required()
    };
    return Joi.validate(user, schema);
}
 
exports.User = User;
exports.validate = validateUser;