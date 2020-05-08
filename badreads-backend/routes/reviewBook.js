const express = require('express')
const router = express.Router()
const reviewBookModel = require('../models/bookReviews')

router.get('/:bookId', async(req,res)=>{
  try{
    const reviews = await reviewBookModel.find({book: req.params.bookId}).populate('user')
    return res.json(reviews)
  }catch(err){
    res.send(err)
  }
})

router.post('/:userId/:bookId', async(req,res)=>{
  try{
    const review = await reviewBookModel.create({
      book: req.params.bookId,
      user: req.params.userId,
      review: req.body.review
    })
    return res.json(review)
  }catch(err){
    res.send(err)
  }
})


module.exports = router
