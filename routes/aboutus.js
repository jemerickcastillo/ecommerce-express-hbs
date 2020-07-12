var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
  
//   productos.find(function(err, data){
//     res.render('index', { title: 'Express', products: data});
//   });
// });

router.get('/aboutus', function(req, res, ) {
  res.render('about'); 
});

module.exports = router;
