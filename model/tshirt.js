const mongoose = require('mongoose');
const objectId = mongoose.SchemaTypes.ObjectId;

let tshirtSchema = mongoose.Schema({
    brand: {type: String, required: true},
    price:{type: Number, required: true},
    numberOfAvailableItems:{type: Number, required: true},
    category:[{type: objectId, ref:'Category'}]
});

module.exports = mongoose.model('Tshirt',tshirtSchema);