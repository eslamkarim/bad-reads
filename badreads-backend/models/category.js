const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
  categoryName: {type: String, index: true, required: [true,"category name is required"], unique: [true,"This category name is alredy exists"]},
  categoryDescription: {type: String, required: [true,"category description is required"]}
})


const categoryModel = mongoose.model('Category',categorySchema)


module.exports = categoryModel