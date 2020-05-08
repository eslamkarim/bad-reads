const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
  bookId: {type: Number, unique: true},
  bookName: {type: String, required: [true,"Book name is required"], unique: [true,"This book name is alredy exists"]},
  img: {type: String, required: [true,"Book image is required"]},
  bookDescription: {type: String, required: [true,"Book description is required"]},
  rating: {type: Number, default:-1},
  author: {type: mongoose.Schema.Types.ObjectId, ref : 'Author'},
  category: {type: mongoose.Schema.Types.ObjectId, ref : 'Category'}

})


bookSchema.statics.getLastID = () => {
  this.find({}).sort({bookId:-1}).limit(1).bookId
}

const bookModel = mongoose.model('Book',bookSchema)

// bookSchema.pre(save, async function(next){
//   if (!this.bookId){
//     this.bookId = bookModel.
//   }
// })


module.exports = bookModel