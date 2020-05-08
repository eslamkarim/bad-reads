const express = require('express');
const router = express.Router();
const bookModel = require('../models/book.js')

router.get('/', async (req , res )=>{
    try {
        const books = await bookModel.find({}).populate('author','category')
        return res.json(books)
        
    } catch (error) {
        res.send(error)
    }
    
})

router.get('/:id',async(req , res)=>{
    id = req.params.id
    try {
        const books = await bookModel.findById(id).populate('author','authorName').populate('category','categoryName')
        res.json(books)
        
    } catch (error) {
        res.send(error)
    }

})

router.post('/',async(req , res)=>{
    try {        
        const books = await bookModel.create(req.body)
        return res.json(books)
        
    } catch (error) {
        
        res.send(error)
    }
    })    


module.exports = router
