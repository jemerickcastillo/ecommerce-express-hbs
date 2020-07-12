var express = require('express');
var router = express.Router();
const productos = require('../models/Productos');

/* GET home page. */
// router.get('/', function(req, res, next) {
  
//   productos.find(function(err, data){
//     res.render('index', { title: 'Express', products: data});
//   });
// });

router.get('/', function(req, res, ) {
  res.render('index'); 
});

module.exports = router;
