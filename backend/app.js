var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var homeRouter = require('./routes/home');
var registerRouter = require('./routes/register');
var meRouter = require('./routes/me');
var cabeleireiroRouter = require('./routes/cabeleireiro');
var newPublicationRouter = require('./routes/newPublication');
var scheduleRouter = require('./routes/schedule');


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', homeRouter);
app.use('/register', registerRouter);
app.use('/me', meRouter);
app.use('/cabeleireiro', cabeleireiroRouter);
app.use('/newPublication', newPublicationRouter);
app.use('/schedule', scheduleRouter);

module.exports = app;
