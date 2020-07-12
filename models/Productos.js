const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var productos = new Schema({
    imagePath: {type: String, required: true},
    title: {type: String, required: true},
    description: { type: String, required: true },
    price: {type: Number, required: true},
    model: {type: String, required: true}
});

const Productos = mongoose.model('Productos', productos);

module.exports = Productos;