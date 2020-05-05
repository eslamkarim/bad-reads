const express = require('express');
const authModel = require('../models/author')
const bookModel =require('../models/book')
const categoryModel= require('../models/category')
const router = express.Router()
router.get('/author',async(req,res)=>{

   try{
     const authors = await authModel.find({})
     return res.json(authors)
        
    }
        catch (err)
        {
         next(err)
        }
 })
    


router.post('/author',async(req,res)=>{
   const {authorName,date_of_birth,img} = req.body;
   const authorInstance = new authModel({
    authorName,
    date_of_birth,
    img,



   })

  try{
 const author=  await authorInstance.save()
        return res.json(author)
}
catch(err)
{
    next(err)
}

   })
    
router.patch('/author/:id',async(req,res)=>{
    try{
   const author = await authModel.findByIdAndUpdate(req.params.id,{$set:req.body})
      return res.json(author)  
}
    catch(err)
    {
      next(err)

    }

    
})

router.delete('/author/:id',async(req,res)=>{
    try {
        const author = await authModel.findByIdAndDelete(req.params.id)
        return res.json(author)
    } catch (error) {
        next(err)
    } 
    

    
})



router.get('/book',async(req,res)=>{

    try{
      const books = await bookModel.find({})
      return res.json(books)
         
     }
         catch (err)
         {
          next(err)
         }
  })
     
 
 
 router.post('/book',async(req,res,next)=>{
    const {bookName,bookDescription,rating} = req.body;
    const bookInstance = new bookModel({
        bookName,
        bookDescription,
        rating,
        
 
 
 
    })
 
   try{
  const book=  await bookInstance.save()
         return res.json(book)
 }
 catch(err)
 {
     next(err)
 }
 
    })
     
 router.patch('/book/:id',async(req,res)=>{
     try{
    const book = await bookModel.findByIdAndUpdate(req.params.id,{$set:req.body})
       return res.json(book)  
 }
     catch(err)
     {
       next(err)
 
     }
 
     
 })
 
 router.delete('/book/:id',async(req,res)=>{
     try {
         const book = await bookModel.findByIdAndDelete(req.params.id)
         return res.json(book)
     } catch (error) {
         next(err)
     } 
     
 
     
 })
 
 router.get('/category',async(req,res)=>{

    try{
      const categorys = await categoryModel.find({})
      return res.json(categorys)
         
     }
         catch (err)
         {
          next(err)
         }
  })
     
 
 
 router.post('/category',async(req,res,next)=>{
    const {categoryName,categoryDescription} = req.body;
    const categoryInstance = new categoryModel({
        categoryName,
        categoryDescription   
  
 
    })
 
   try{
  const category=  await categoryInstance.save()
         return res.json(category)
 }
 catch(err)
 {
     next(err)
 }
 
    })
     
 router.patch('/category/:id',async(req,res)=>{
     try{
    const  category = await categoryModel.findByIdAndUpdate(req.params.id,{$set:req.body})
       return res.json( category)  
 }
     catch(err)
     {
       next(err)
 
     }
 
     
 })
 
 router.delete('/category/:id',async(req,res)=>{
     try {
         const category = await categoryModel.findByIdAndDelete(req.params.id)
         return res.json(category)
     } catch (error) {
         next(err)
     } 
     
 
     
 })
 

module.exports = router

