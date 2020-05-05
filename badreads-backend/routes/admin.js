const express = require('express');
const authModel = require('../models/author')
const router = express.Router()
router.get('/author',(req,res)=>{

    authModel.find({},(err,authors)=>{
         if(!err)
         {
             return  res.json(authors)
         }
        //  next(err)

 })
    
})

router.post('/author',(req,res)=>{
   const {authorName,date_of_birth,img} = req.body;
   const authorInstance = new authModel({
    authorName,
    date_of_birth,
    img,



   })
   authorInstance.save((err,author)=>{
        if(!err) return res.json(author)
        // next(err)

   })
    
})
router.patch('/admin',(req,res)=>{
    res.send("update ")

    
})

router.delete('/admin',(req,res)=>{
    res.send("delete")

    
})

module.exports = router

