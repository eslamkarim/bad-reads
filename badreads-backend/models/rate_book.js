const mongoose = require('mongoose')

const rateBookSchema = new mongoose.Schema({
  
  book: {type: mongoose.Schema.Types.ObjectId, ref : 'Book'},
  user: {type: mongoose.Schema.Types.ObjectId, ref : 'User'},
  rateing: {type: Number, min: 1, max: 5}

})


const rateBookModel = mongoose.model('rate_book',rateBookSchema)

module.exports = rateBookModel