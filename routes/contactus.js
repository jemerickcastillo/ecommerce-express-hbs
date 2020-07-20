var express = require('express');
var router = express.Router();

router.get('/contact-us', function(req, res, ) {
  res.render('contact-us',{
    title:'Contáctenos',
    breadcumb1:'Inicio'
    

  }); 
});

module.exports = router;
