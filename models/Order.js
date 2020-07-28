const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var orders = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    state: {type: String, required: true},
    payID: {type: String, required: true},
    paymentMethod: { type: String, required: true }
});

const Orders = mongoose.model('Orders', orders);

module.exports = Orders;