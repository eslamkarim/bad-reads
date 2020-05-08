const express = require('express');
const authModel = require('../models/author')
const bookModel =require('../models/book')
const categoryModel= require('../models/category')
const router = express.Router()
const utils = require('../helpers/util.js');
const userModel = require('../models/user.js')

router.get('/author',async(req,res)=>{

   try{
     const authors = await authModel.find({})
     return res.json(authors)
        
    }
        catch (err)
        {
         res.send(err);
        }
 })
    

 
 router.post('/author',async(req,res)=>{
     
     const {authorName,date_of_birth,img} = req.body;
     console.log(authorName);
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
    res.send(err);
}

   })
    
router.patch('/author/:id',async(req,res)=>{
    try{
   const author = await authModel.findByIdAndUpdate(req.params.id,{$set:req.body})
      return res.json(author)  
}
    catch(err)
    {
        res.send(err);

    }

    
})

router.delete('/author/:id',async(req,res)=>{
    try {
        const author = await authModel.findByIdAndDelete(req.params.id)
        return res.json(author)
    } catch (error) {
        res.send(err);
    } 
    

    
})



router.get('/book',async(req,res)=>{

    try{
      const books = await bookModel.find({})
      return res.json(books)
         
     }
         catch (err)
         {
            res.send(err);
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
    res.send(err);
 }
 
    })
     
 router.patch('/book/:id',async(req,res)=>{
     try{
    const book = await bookModel.findByIdAndUpdate(req.params.id,{$set:req.body})
       return res.json(book)  
 }
     catch(err)
     {
        res.send(err);
 
     }
 
     
 })
 
 router.delete('/book/:id',async(req,res)=>{
     try {
         const book = await bookModel.findByIdAndDelete(req.params.id)
         return res.json(book)
     } catch (error) {
        res.send(err);
     } 
     
 
     
 })
 
 router.get('/category',async(req,res)=>{

    try{
      const categorys = await categoryModel.find({})
      return res.json(categorys)
         
     }
         catch (err)
         {
            res.send(err);
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
    res.send(err);
 }
 
    })
     
 router.patch('/category/:id',async(req,res)=>{
     try{
    const  category = await categoryModel.findByIdAndUpdate(req.params.id,{$set:req.body})
       return res.json( category)  
 }
     catch(err)
     {
        res.send(err);
 
     }
 
     
 })
 
 router.delete('/category/:id',async(req,res)=>{
     try {
         const category = await categoryModel.findByIdAndDelete(req.params.id)
         return res.json(category)
     } catch (error) {
        res.send(err);
     } 
     
 
     
 })
 
 router.post('/login', async function(req,resp){
    const email = req.body.email;
    const pwd = req.body.password;
    
    // return 400 status if username/password is not exist
    if (!email || !pwd) {
      return resp.status(400).json({
        error: true,
        message: "Username or Password required."
      });
    }
    try{
        userData = await userModel.findOne({ email: email }).exec();
        if(!userData){
          return resp.status(401).send({error: true,  message: "The email is not found" });
        }
        if(!userData.isAdmin){
            return resp.status(401).send({error: true,  message: "The email is not an admin" });
        }
        userData.comparePassword(pwd, (error, match) => {
            if(!match) {
                return resp.status(401).send({error: true, message: "The password is invalid" });
            }
        });

        const token = utils.generateToken(userData);
        // get basic user details
        const userObj = utils.getCleanUser(userData);
        // return the token along with user details
        
        return resp.status(200).json({ user: userObj, token });
    }catch(error){
        return resp.status(401).json({
            error: true,
            message: error._message
        });
    }
});
module.exports = router

