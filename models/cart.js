const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var carrito = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    imagePath: {type: String, required: true},
    title: {type: String, required: true},
    price: {type: Number, required: true},
});

const Carrito = mongoose.model('Carrito', carrito);

module.exports = Carrito;