const mongoose = require('mongoose');
const objectId = mongoose.SchemaTypes.ObjectId;

const orderSchema = mongoose.Schema({
    orderNumber:{type: Number, required:true},
    tshirtId:{type: objectId, ref:'Tshirt'},
    orderDateTime: {type: Date, default: Date.now},
    customerPhoneNumber:{type: Number, required: true}
});

module.exports = mongoose.model('Order',orderSchema);