require('dotenv').config()
var express = require('express');
var router = express.Router();
const Productos = require('../models/Productos');
const Carrito = require('../models/cart');


let cartList
/* GET home page. */
router.all('/', async(req, res, next)=>{
  cartList = await Carrito.find({});
  next();
});

router.get('/', async(req, res)=>{
  const destacados = await Productos.find({ destacado: true});
  console.log(cartList)
  res.render('index', {destacados: destacados, carrito: cartList}); 
});

router.get('/aboutus', function(req, res, ) {
  res.render('about',{
    title:'Sobre Nosotros',
    breadcumb1:'Inicio'
  
  }); 
});

router.get('/contact-us', function(req, res, ) {
  res.render('contact-us',{
    title:'Contáctenos',
    breadcumb1:'Inicio'
  }); 
});


router.get('/login', function(req, res, ) {
  res.render('login',{
    title:'Iniciar Sesión',
    breadcumb1:'Inicio'
  }); 
});

router.get('/products', async (req, res)=>{
  const dataLoaded = await Productos.find({});
  console.log(dataLoaded);
  // Productos.find({}, (err, data)=>{
  //   if(err) console.log(err)
  //   console.log(data)
  // });
  res.render('products', { title: 'Express', data: dataLoaded});
});

router.get('/add-to-cart/:id', async (req, res)=>{
  const idProduct = req.params.id
  const dataLoaded = await Productos.findById(idProduct);
  console.log(dataLoaded.title);

  const nuevoCarrito = new Carrito;
  nuevoCarrito.title = dataLoaded.title
  nuevoCarrito.imagePath = dataLoaded.imagePath
  nuevoCarrito.price = dataLoaded.price

  nuevoCarrito.save((err, result)=>{
    if(err) console.log(err)
    res.redirect('/');
  });
});



module.exports = router;
