const mongoose = require('mongoose')

// many to many realation between users and books
const usesrsBooksSchema = new mongoose.Schema({

    usesrid: {type: mongoose.Schema.Types.ObjectId, ref : 'User'},
    Bookid: {type: mongoose.Schema.Types.ObjectId, ref : 'Book'},
    //specify the action twards books like if the user want to read the book -> -1 or curently reading -> 0 or read -> 1
    action: {type: Number, default:-1},
});

const authModel = mongoose.model('UsesrsBooks', usesrsBooksSchema);
module.exports = authModel

//3atef el lefa
