require("dotenv").config();    
var express = require("express");
var mongoose = require('mongoose');
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var session = require('express-session');
var FileStore = require('session-file-store')(session);
var cors = require("cors");

var indexRouter = require("./routes/index");
var productsRouter = require("./routes/products");
var bookingsRouter = require("./routes/bookings");
var sellersRouter = require("./routes/sellers");

var app = express();

mongoose
.connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("MongoDB is ready"))
.catch((err) => console.log(err));
  
app.use(logger("dev"));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser('12345-67890-73567-54123'));

app.use(session({
    name: 'session-id',
    secret: '12345-67890-73567-54123',
    saveUninitialized: false, 
    resave: false,
    store: new FileStore()
}));

function auth(req, res, next) {
    console.log(req.headers);

    if(!req.session.user) {
        var authHeader = req.headers.authorization;
        if(!authHeader) {
            var err = new Error('You are not authenticates!');
            res.setHeader('WWW-Authenticate', 'Basic');
            err.status = 401;
            next(err);
            return;
        }

        var auth = new Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':');
        var user = auth[0];
        var pass = auth[1];

        if (user == 'admin' && pass=='password') {
            req.session.user = 'admin';
            next();
        }else {
            var err = new Error('You are not authenticates!');
            res.setHeader('WWW-Authenticate', 'Basic');
            err.status = 401;
            next(err);
        }

    } else {
        if (req.session.user == 'admin') {
            console.log('req.session: ', req.session);
            next();
        }
        else {
            var err = new Error('You are not authenticates!');
            err.status = 401;
            next(err);
        }
    }  
}

app.use(auth);

app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/products", productsRouter);
app.use("/bookings", bookingsRouter);
app.use("/sellers", sellersRouter);


module.exports = app;
