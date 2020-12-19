const express = require('express');
const router = express.Router();
const orderModel = require('../model/order');
const tshirtModel = require('../model/tshirt');

router.put('/tshirt',(req,res) =>{
    let tshirtID = req.body.tshirtId;

    tshirtModel.findOne({_id:tshirtID},(err,tshirt) =>{
        if(err){
            res.status(500).send({Error:"Not found"})
        }
        else{
            let num = Math.ceil(Math.random()*1000);
            const order = new orderModel({
                orderNumber:num,
                tshirtId:tshirt._id,
                customerPhoneNumber:req.body.phone
            })
            const status = order.save((err,savedOrder) =>{
                if(err){
                    res.status(500).send({Error:"Couldn't save your order"});
                }
                else{
                    tshirtModel.updateOne({_id:tshirt._id},{$inc:{numberOfAvailableItems:-1}},(err,savedTshirt) =>{
                        if(err){
                            res.status(500).send({Error:"Couldn't decrement tshirt"});
                        }
                        else{
                            res.send(savedOrder + savedTshirt);
                        }
                    })
                }
            })
        }
    })
})

module.exports = router;