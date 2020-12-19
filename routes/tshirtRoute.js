const express = require('express');
const router = express.Router();
const tshirtModel = require('../model/tshirt');

router.post('/',(req,res) =>{
    const tshirt = new tshirtModel({
        brand: req.body.brand,
        price: req.body.price,
        numberOfAvailableItems: req.body.items
    });

    tshirt.save((err,savedTshirt) =>{
        if(err){
            res.status(500).send({Error:"Couldn't add Tshirt"});
        }
        else{
            res.send(savedTshirt);
        }
    });
});

router.get('/',(req,res) =>{
    tshirtModel.find({}).populate({
        path:'category',
        model:'Category',
        select:'name -_id'
    }).select('-_id -__v').exec((err,Category) =>{
        if(err){
            res.status(500).send({Error:"Couldn't get category"});
        }
        else{
            res.send(Category);
        }
    });
});

module.exports = router;