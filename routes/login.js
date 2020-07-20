var express = require('express');
var router = express.Router();

router.get('/login', function(req, res, ) {
  res.render('login',{
    title:'Iniciar Sesión',
    breadcumb1:'Inicio'
    

  }); 
});

module.exports = router;
