const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const categories = require('../models/category')

router.get('/',(req,res,next) =>{
    categories.find()
        .exec()
        .then(doc =>{
            res.status(200).json({doc })
        })
        .catch(err =>{
            console.log(err);
        })
  

});

router.post('/',(req,res,next) =>{
    const categoryData = new categories({
        _id:new mongoose.Types.ObjectId(),
        name: req.body.name,
    })
    console.log(categoryData);
    categoryData.save((err,doc)=>{
        if(!err){
            console.log(doc);
        } else{
            console.log(err);
        }
    })
    res.status(200).json({
        message: 'data inserted successfully',
        insertedData:categoryData
    })
    });

module.exports = router;