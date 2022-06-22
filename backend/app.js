var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var homeRouter = require('./routes/home');
var productsRouter = require('./routes/products');
var bookingsRouter = require('./routes/bookings');
var sellersRouter = require('./routes/sellers');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', homeRouter);
app.use('/products', productsRouter);
app.use('/bookings', bookingsRouter);
app.use('/sellers', sellersRouter);


module.exports = app;
