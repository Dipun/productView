const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const product = require('../models/product')

router.get('/',(req,res,next) =>{
    product.find()
        .exec()
        .then(doc =>{
            res.status(200).json({doc })
        })
        .catch(err =>{
            console.log(err);
        })
  

});

router.post('/',(req,res,next) =>{
    const productData = new product({
        _id:new mongoose.Types.ObjectId(),
        name: req.body.name,
        categoryname: req.body.categoryname,
        categoryid: req.body.categoryid
    })
    console.log(productData);
    productData.save((err,doc)=>{
        if(!err){
            console.log(doc);
        } else{
            console.log(err);
        }
    })
    res.status(200).json({
        message: 'data inserted successfully',
        insertedData:productData
    })
    });

module.exports = router;