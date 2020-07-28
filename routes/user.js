var express = require('express');
var router = express.Router();
const paypal = require("paypal-rest-sdk");
var csrf = require('csurf');
var passport = require('passport');

const Carrito = require('../models/cart');
const Users = require('../models/user');
const Order = require('../models/Order');
const Orders = require('../models/Order');

var csrfProtection = csrf();
router.use(csrfProtection);

const cartListAsync = async ()=> await Carrito.find({},(eror, result)=>result);

// Configuracion del paypal
paypal.configure({
  'mode': 'sandbox', //sandbox or live
  'client_id': 'AQeUIAmHB1o119t4LIbh9rGq2LXm33odJrWwV4UHv4DbQ4bpmB8zJMzeO_uScV0S1CdfVX8EQuxHzv5C',
  'client_secret': 'EDvql9ZNZS2AFPcMmFmN4kb_n5PKOP5XwdSvwbrA_2KhwRk0L0NPE7JvITXRt4SFlArTNpjthQhUanBs'
});
//end
router.get('/profile',isLoggedIn,async(req, res,next)=>{
  const cartList = await cartListAsync().then((data)=>data)
  const dataLoaded = await Users.find({});
  res.render('user/profile',{
    title: 'Datos de Usuario', 
    breadcumb1:'Inicio',
    data:dataLoaded,
    carrito: cartList
  });
})

router.get('/checkout',isLoggedIn, async(req, res,next)=>{
  const userLogin = req.user ? true:false;
  const dataUser = req.user? req.user : {};
  const cartList = await cartListAsync().then((data)=>data)

  res.render('checkout',{
    title: 'Checkout', 
    breadcumb1:'Inicio',
    csrfToken:req.csrfToken(),
    carrito: cartList,
    isLoging: userLogin,
    dataUser: dataUser
  });
})
router.post('/pay', async(req, res)=>{
  const cartList = await cartListAsync().then((data)=>data)
  let items = [];
  let total = 0;
  for(x of cartList){
    items.push({
      "name": x.title,
      "sku": "item",
      "price": x.price,
      "currency": "USD",
      "quantity": 1
    });
    total = total + x.price;
  }
  console.log(total);
  var create_payment_json = {
    "intent": "sale",
    "payer": {
        "payment_method": "paypal"
    },
    "redirect_urls": {
        "return_url": "http://localhost:3000/user/succeed",
        "cancel_url": "http://localhost:3000/user/cancel"
    },
    "transactions": [{
        "item_list": {
            "items": items
        },
        "amount": {
            "currency": "USD",
            "total": total.toFixed(2)
        },
        "description": "This is the payment description."
    }]
};
paypal.payment.create(create_payment_json, function (error, payment) {
  if (error) {
      throw error;
  } else {
      for( let i = 0 ; i < payment.links.length; i++){
        if(payment.links[i].rel === 'approval_url'){
          res.redirect(payment.links[i].href);
        }
      }
  }
});

});
router.get('/succeed', async(req, res)=>{
  const payerId = req.query.PayerID;
  const paymentId = req.query.paymentId;

  const cartList = await cartListAsync().then((data)=>data)
  let total = 0;
  for(x of cartList){
    total = total + x.price;
  }
  console.log(total);

  const execute_payment_json = {
    'payer_id': payerId,
    'transactions': [{
      'amount': {
        'currency': 'USD',
        'total':total.toFixed(2)
      }
    }]
  };
  paypal.payment.execute(paymentId, execute_payment_json, function(error, payment){
    if(error){
      console.log(error.response);
      throw error;
    }else{
      const newOrder = new Order;
      newOrder.payID = payment.id
      newOrder.paymentMethod = payment.payer.payment_method
      newOrder.state = payment.state

      newOrder.save(function(error){
        if(error) return error;
        res.redirect('/user/orders');
      })
    }
  })

})
router.get('/orders',isLoggedIn, async(req, res)=>{
  const cartList = await cartListAsync().then((data)=>data)
  await Order.find({},(eror, result)=>{
    res.render('order', {order: result, carrito: cartList})
  })
});


router.get('/logout',isLoggedIn,function(req,res,next){
  req.logout();
  res.redirect('/');
});

router.use('/',notLoggedIn,function(req,res,next){
  next();
});



router.get('/signup', async (req, res,next)=>{
  var messages = req.flash('error');
  const cartList = await cartListAsync().then((data)=>data)
  res.render('user/signup', { 
    csrfToken:req.csrfToken(),
    title: 'Registro de Usuario', 
    breadcumb1:'Inicio',
    carrito: cartList,
    messages:messages,
    hasErrors:messages.length > 0
  });

});

router.post('/signup', passport.authenticate('local.signup',{
   successRedirect:'/user/signin',
   failureRedirect:'/user/signup',
   failureFlash:true
}), function(req, res, next){
  console.log("Redirect ---------------> ");
  res.redirect('/user/signin');
});



router.get('/signin',async(req, res,next)=>{
  var messages = req.flash('error');
  const cartList = await cartListAsync().then((data)=>data)
  res.render('user/signin',{
    csrfToken:req.csrfToken(),
    title: 'Iniciar Sesion', 
    breadcumb1:'Inicio',
    carrito: cartList,
    messages:messages,
    hasErrors:messages.length > 0
  });
})

router.post('/signin', passport.authenticate('local.signin',{
  successRedirect:'/user/profile',
  failureRedirect:'/user/signin',
  failureFlash:true
}));

module.exports = router;

function isLoggedIn(req,res,next){
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect('/');
}

function notLoggedIn(req,res,next){
  if(!req.isAuthenticated()){
    return next();
  }
  res.redirect('/');
}