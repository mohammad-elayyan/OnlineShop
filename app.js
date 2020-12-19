const express = require('express');
const app = express();

const mongoose = require('mongoose');


const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const db = mongoose.connect('mongodb://localhost/OnlineShop',{useNewUrlParser:true, useUnifiedTopology:true});

const tshirtRoute = require('./routes/tshirtRoute');
app.use('/tshirt',tshirtRoute);

const categoryRoute = require('./routes/categoryRoute');
app.use('/category',categoryRoute);

const orderRoute = require('./routes/orderRoute');
app.use('/order',orderRoute);

app.listen(3000, () => console.log("Server is running"));