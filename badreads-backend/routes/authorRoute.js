const express = require('express');
const router = express.Router();
const authorModel = require('../models/author')
const bookModel = require('../models/book')

 router.get('/', async  (req , res )=>{
    try {
        const authors = await authorModel.find({}).populate('author')
        return res.json(authors)
        
    } catch (error) {
        res.send(error)
    }
    
})

router.get('/book/:author', async (req , res )=>{
    author = req.params.author
    try {
        const books = await bookModel.find({author: author})        
        return res.json(books)
        
    } catch (error) {
        res.send(error)
    }
    
})
router.get('/:id',async(req , res)=>{
    id = req.params.id
    try {
        const authors = await authorModel.findById(id)
        res.json(authors)
        
    } catch (error) {
        res.send(error)
    }

})


router.post('/',async(req , res)=>{
    console.log(req.body);
    
    try {
        console.log("booooooooooooooooooooooooooooooy");
        
        const authors = await authorModel.create(req.body)
        return res.json(authors)
        
    } catch (error) {
        
        res.send(error)
    }
    })    


module.exports = router
