require('dotenv').config()
var Product = require('../models/Productos');
var mongoose = require('mongoose');
const {connectDb,disconnectDb} = require('../dbConfig');
const { signedCookie } = require('cookie-parser');
const { handlebars } = require('hbs');

connectDb().then(() => {
    app.listen(PORT, () => {
      console.log(`Ejecutando en el puerto ${PORT}`);
    });
});

var products =[
    new Product({
        imagePath: 'http://via.placeholder.com/1024x576?placeholder=Dummy',
        title: 'Lorem ipsum dolor at simet',
        description: 'Just for thicc people',
        price: 34.99,
        destacado: true,
        model: 'T-shirt'
    }),
    new Product({
        imagePath: 'http://via.placeholder.com/1024x576?placeholder=Dummy',
        title: 'Lorem ipsum dolor at simet',
        description: 'Just for thicc people',
        price: 28.99,
        destacado: false,
        model: 'T-shirt'
    }),
    new Product({
        imagePath: 'http://via.placeholder.com/1024x576?placeholder=Dummy',
        title: 'Lorem ipsum dolor at simet',
        description: 'Just for thicc people',
        destacado: false,
        price: 28.99,
        model: 'T-shirt'
    }),
    new Product({
        imagePath: 'http://via.placeholder.com/1024x576?placeholder=Dummy',
        title: 'Lorem ipsum dolor at simet',
        description: 'Just for thicc people',
        price: 28.99,
        destacado: false,
        model: 'T-shirt'
    }),
    new Product({
        imagePath: 'http://via.placeholder.com/1024x576?placeholder=Dummy',
        title: 'Lorem ipsum dolor at simet',
        description: 'Just for thicc people',
        price: 34.99,
        destacado: true,
        model: 'T-shirt'
    }),
    new Product({
        imagePath: 'http://via.placeholder.com/1024x576?placeholder=Dummy',
        title: 'Lorem ipsum dolor at simet',
        description: 'Just for thicc people',
        price: 28.99,
        destacado: false,
        model: 'T-shirt'
    }),
    new Product({
        imagePath: 'http://via.placeholder.com/1024x576?placeholder=Dummy',
        title: 'Lorem ipsum dolor at simet',
        description: 'Just for thicc people',
        destacado: false,
        price: 28.99,
        model: 'T-shirt'
    }),
    new Product({
        imagePath: 'http://via.placeholder.com/1024x576?placeholder=Dummy',
        title: 'Lorem ipsum dolor at simet',
        description: 'Just for thicc people',
        price: 28.99,
        destacado: false,
        model: 'T-shirt'
    }),
    new Product({
        imagePath: 'http://via.placeholder.com/1024x576?placeholder=Dummy',
        title: 'Lorem ipsum dolor at simet',
        description: 'Just for thicc people',
        price: 28.99,
        destacado: false,
        model: 'T-shirt'
    })
];
console.log(products);
var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result){
        console.log(result);
        done++;
        if( done === products.length){
           disconnectDb();
        }
    });

}


