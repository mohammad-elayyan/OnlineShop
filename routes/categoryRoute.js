const express = require('express');
const router = express.Router();
const categoryModel = require('../model/category');
const tshirtModel = require('../model/tshirt');

router.post('/',(req,res) =>{
    const category = new categoryModel({
        name: req.body.name
    });
    category.save((err,savedCategory) =>{
        if(err){
            res.status(500).send({Error:"Couldn't add category"});
        }
        else{
            res.send(savedCategory);
        }
    });
});

router.get('/',(req,res) =>{
    categoryModel.find({},(err,Category) =>{
        if(err){
            res.status(500).send({Error:"Couldn't get tshirt"})
        }
        else{
            res.send(Category);
        }
    });
});

router.put('/tshirt/add',(req,res) =>{
    let categoryId = req.body.categoryId;
    let tshirtId = req.body.tshirtId;

    categoryModel.findOne({_id:categoryId},(err,Category) =>{
        if(err){
            res,status(500).send({Error:"Couldn't find category"})
        }
        else{
            tshirtModel.updateOne({_id:tshirtId},{$addToSet:{category:Category._id}},(err,status) =>{
                if(err){
                    res.status(500).send({Error:"Couldn't update tshirt"});
                }
                else{
                    res.send(status);
                }
            });
        }
    });
});

module.exports = router;