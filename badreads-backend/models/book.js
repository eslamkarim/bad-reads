const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
  bookName: {type: String, required: [true,"Book name is required"], unique: [true,"This book name is alredy exists"]},
  img: {type: String, required: [true,"Book image is required"]},
  bookDescription: {type: String, required: [true,"Book description is required"],default: 0 },
  rating: {type: Number, default:0},
  author: {type: mongoose.Schema.Types.ObjectId, ref : 'Author'},
  category: {type: mongoose.Schema.Types.ObjectId, ref : 'Category'}

})


const bookModel = mongoose.model('Book',bookSchema)

module.exports = bookModel