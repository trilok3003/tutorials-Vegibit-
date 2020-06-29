//step1
const Joi = require('joi');
const mongoose = require('mongoose');
 
const platformSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    }
});
//step 2
const Platform = mongoose.model('Platform', platformSchema);
// step 3 simple validation
function validatePlatform(platform) {
    const schema = {
        name: Joi.string().min(3).required()
    };
 
    return Joi.validate(platform, schema);
}
// step4   export
exports.platformSchema = platformSchema;
exports.Platform = Platform;
exports.validate = validatePlatform;
