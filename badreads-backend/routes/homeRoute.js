const express = require('express');
const router = express.Router();
const categoryModel = require('../models/category.js')
const authorModel = require('../models/author.js')
const bookModel = require('../models/book.js')


router.get('/home/category', async (req , res )=>{
    try {
        const categoris = await categoryModel.find({})
        return res.json(categoris)
        
    } catch (error) {
        res.send(error)
    }
    
})

router.get('/home/author', async (req , res )=>{
    try {
        const authors = await authorModel.find({})
        console.log(authors);
        
        return res.json(authors)
        
    } catch (error) {
        res.send(error)
    }
    
})

router.get('/home/book', async (req , res )=>{
    try {
        const books = await bookModel.find({})
        return res.json(books)
        
    } catch (error) {
        res.send(error)
    }
    
})


// router.get('/:id',async(req , res)=>{
//     id = req.params.id
//     try {
//         const homes = await homeModel.findById(id)
//         res.json(homes)
        
//     } catch (error) {
//         res.send(error)
//     }

// })

// router.post('/',async(req , res)=>{
//     console.log(req.body.homeName);
    
//     try {        
//         const homes = await homeModel.create(req.body)
//         return res.json(homes)
        
//     } catch (error) {
        
//         res.send(error)
//     }
//     })    


module.exports = router
