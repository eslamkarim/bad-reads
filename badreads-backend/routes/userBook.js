const express = require('express')
const router = express.Router()
const usersBooksModel = require('../models/usersBooks')

router.get('/:userId/:bookId', async(req,res)=>{
  try{
    const action = await usersBooksModel.findOne({bookId: req.params.bookId,userId: req.params.userId,})
    return res.json(action.action)
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

router.get('/', async (req , res )=>{
  try {
      const books = await usersBooksModel.find({})
      return res.json(books)
      
  } catch (error) {
      res.send(error)
  }
  
})

router.post('/',async(req , res)=>{
  try {        
      const books = await usersBooksModel.create(req.body)
      return res.json(books)
      
  } catch (error) {
      
      res.send(error)
  }
  })

  router.get('/:userId',async(req , res)=>{
    userId = req.params.userId
    console.log(userId);
    
    try {
        const books = await usersBooksModel.find({userId: userId}).populate('bookId')
        console.log(books + "fdmskfmsddklg");
        
        res.json(books)
        
    } catch (error) {
        res.send(error)
    }

})

module.exports = router
