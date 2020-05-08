const express = require('express');
const router = express.Router();
const bookModel = require('../models/book.js')
const rate_bookModel = require('../models/rate_book')

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
        let books = await bookModel.findById(id).populate('author','authorName').populate('category','categoryName')
        const test = await rate_bookModel.aggregate([
                                {
                                    $group:
                                    {
                                        _id: `${req.params.id}`,
                                        avg: { $avg: "$rating" }
                                    }
                                }
                            ])
        
        try{
            books.rating = test[0].avg
        }catch(err){
            books.rating=0
        }               
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
