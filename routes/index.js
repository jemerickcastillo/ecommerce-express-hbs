require('dotenv').config()
var express = require('express');
var router = express.Router();
const Productos = require('../models/Productos');
const Carrito = require('../models/cart');
const Users = require('../models/user');

const cartListAsync = async ({userLogin})=> {
  if(userLogin){
    console.log("1");
    return await Carrito.find({user: userLogin},(eror, result)=>result)
  }else{
    console.log("2");
    return []
  }
};

router.get('/', async(req, res)=>{
  const cartList = await cartListAsync({userLogin: req.user}).then((data)=>data);
  const destacados = await Productos.find({ destacado: true});
  
  console.log(cartList);
  res.render('index', {
    destacados: destacados, 
    carrito: cartList,
    title:"Vielyck's Details"
  }); 
});

router.get('/aboutus', async (req, res ) =>{
  const cartList = await cartListAsync({userLogin: req.user}).then((data)=>data);

  res.render('about',{
    title:'Sobre Nosotros',
    breadcumb1:'Inicio',
    carrito: cartList
  }); 
});

router.get('/contact-us', async (req, res, )=>{
  const cartList = await cartListAsync({userLogin: req.user}).then((data)=>data);

  res.render('contact-us',{
    title:'Contáctenos',
    breadcumb1:'Inicio',
    carrito: cartList
  }); 
});


router.get('/products', async (req, res)=>{
  const cartList = await cartListAsync({userLogin: req.user}).then((data)=>data)
  const dataLoaded = await Productos.find({});

  res.render('products', { 
    title: 'Productos', 
    data: dataLoaded,
    breadcumb1:'Inicio',
    carrito: cartList
  });
});

router.get('/bodas', async (req, res)=>{
  const cartList = await cartListAsync({userLogin: req.user}).then((data)=>data)
  const bodas = await Productos.find({ bodas: true});
  const dataLoaded = await Productos.find({});

  res.render('bodas', { 
    title: 'Bodas', 
    data: dataLoaded,
    bodas: bodas, 
    breadcumb1:'Inicio',
    carrito: cartList
  });
});

router.get('/manualidades', async (req, res)=>{
  const cartList = await cartListAsync({userLogin: req.user}).then((data)=>data)
  const manualidades = await Productos.find({ manualidades: true});
  const dataLoaded = await Productos.find({});

  res.render('manualidades', { 
    title: 'Manualidades', 
    data: dataLoaded,
    manualidades: manualidades, 
    breadcumb1:'Inicio',
    carrito: cartList
  });
});

router.get('/accesorios', async (req, res)=>{
  const cartList = await cartListAsync({userLogin: req.user}).then((data)=>data)
  const accesorios = await Productos.find({ accesorios: true});
  const dataLoaded = await Productos.find({});

  res.render('accesorios', { 
    title: 'Accesorios', 
    data: dataLoaded,
    accesorios: accesorios, 
    breadcumb1:'Inicio',
    carrito: cartList
  });
});







router.get('/delete-to-cart/:id', async (req, res) => {
  try {
      await Carrito.findByIdAndRemove(req.params.id)
      .then((data)=>res.redirect('/user/shopping_cart'));
      
  } catch (error) {
      res.json(error);
  }
});


router.get('/product_details/:id', async (req, res) => {
  const idString = req.params.id;
  const cartList = await cartListAsync({userLogin: req.user}).then((data)=>data);
  const dataLoaded = await Productos.findById(idString);
  console.log(dataLoaded);
  res.render('product_details',{
    title:dataLoaded.title,
    breadcumb1:'Inicio',
    prueba:idString,
    product: dataLoaded,
    carrito: cartList
  }); 
});



module.exports = router;


