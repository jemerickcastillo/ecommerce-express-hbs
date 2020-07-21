require('dotenv').config()
var createError = require('http-errors');
var express = require('express');
var hbs  = require('express-handlebars');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var sassMiddleware = require('node-sass-middleware');

const Handlebars = require('handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')

// Routes
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// DB connection
const mongoose = require('mongoose');

const MONGO_URL = `mongodb://${process.env.MONGODB_SERVER || 'localhost'}:${process.env.MONGODB_PORT}/${process.env.MONGODB_DATABASE}`;

const mongoOptions = {
  user: process.env.MONGODB_USER,
  pass: process.env.MONGODB_PASSWORD,
  useNewUrlParser: true,
  useUnifiedTopology: true
};

var app = express();

mongoose.connect(MONGO_URL, mongoOptions);
// view engine setup
app.engine('hbs', hbs(
  {extname: 'hbs',
   defaultLayout: 'main',
   partialsDir:__dirname + '/views/partials',
   layoutsDir: __dirname + '/views/layouts',
   handlebars: allowInsecurePrototypeAccess(Handlebars)
  }
   )
);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
// app.set('view options', { layout: 'admin' });
// view engine setup

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: false, // true = .sass and false = .scss
  sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
