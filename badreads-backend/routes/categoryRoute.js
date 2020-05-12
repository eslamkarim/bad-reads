const express = require('express');
const router = express.Router();
const categoryModel = require('../models/category.js')
const booksModel = require('../models/book')

router.get('/', async (req , res )=>{
    try {
        const categorys = await categoryModel.find({})
        return res.json(categorys)
        
    } catch (error) {
        res.send(error)
    }
    
})

router.get('/:id',async(req , res)=>{
    id = req.params.id
    try {
        const books = await booksModel.find({category: req.params.id},{},{ skip: 0, limit: 6 })
        res.json(books)
        
    } catch (error) {
        res.send(error)
    }

})

router.post('/',async(req , res)=>{
    console.log(req.body.categoryName);
    
    try {        
        const categorys = await categoryModel.create(req.body)
        return res.json(categorys)
        
    } catch (error) {
        
        res.send(error)
    }
    })    


module.exports = router
