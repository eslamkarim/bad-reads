const mongoose = require('mongoose')

const authorSchema = new mongoose.Schema({

    authorName: {type: String, required: true, unique: true},
    authorInfo: {type: String},
    date_of_birth: {type: String},
    img: {type: String , required: true}
});

const authModel = mongoose.model('Author', authorSchema);
module.exports = authModel


// middleware
// const mongoose = require('mongoose');

// module.exports = function(req, res, next) {
// if (!mongoose.Types.ObjectId.isValid(req.params.id))
// return res.status(404).send('Invalid ID.');


// next();
// }