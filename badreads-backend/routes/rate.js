const express = require('express')
const router = express.Router()
const rateBookModel = require('../models/rate_book')

router.get('/:userId/:bookId', async(req,res)=>{
  try{
    const rating = await rateBookModel.findOne({book: req.params.bookId, user: req.params.userId})
    return res.json(rating)
  }catch(err){
    res.send(err)
  }
})

router.post('/:userId/:bookId', async(req,res)=>{
  try{
    const rating = await rateBookModel.update({
      book: req.params.bookId,
      user: req.params.userId,
    },{
      book: req.params.bookId,
      user: req.params.userId,
      rating: req.body.rating
    },{
      upsert: true
    })
    return res.json(rating)
  }catch(err){
    res.send(err)
  }
})

router.delete('/:userId/:bookId', async(req,res)=>{
  try{
    const rating = await rateBookModel.remove({
      book: req.params.bookId,
      user: req.params.userId,
    })
    return res.json(rating)
  }catch(err){
    res.send(err)
  }
})

module.exports = router
