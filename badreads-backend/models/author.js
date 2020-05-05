const mongoose = require('mongoose')

const authorSchema = new mongoose.Schema({
    authorName: {type: String, required: true, unique: true},
    date_of_birth: {type: String},
    img: {type: String}
});

const authModel = mongoose.model('Author', authorSchema);
module.exports = authModel
