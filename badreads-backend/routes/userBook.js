const express = require('express')
const router = express.Router()
const usersBooksModel = require('../models/usersBooks')

router.get('/:userId/:bookId', async(req,res)=>{
  try{
    const action = await usersBooksModel.findOne({Bookid: req.params.bookId,usesrid: req.params.userId,})
    return res.json(action)
  }catch(err){
    res.send(err)
  }
})

router.post('/:userId/:bookId', async(req,res)=>{
  try{
    const action = await usersBooksModel.update({
      Bookid: req.params.bookId,
      usesrid: req.params.userId,
    },{
      Bookid: req.params.bookId,
      usesrid: req.params.userId,
      action: req.body.action
    },{
      upsert: true
    })
    return res.json(action)
  }catch(err){
    res.send(err)
  }
})


module.exports = router
