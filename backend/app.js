require("dotenv").config();    
var express = require("express");
var session = require("express-session");
var mongoose = require('mongoose');
var passport = require('passport');
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

var indexRouter = require("./routes/index");
var productsRouter = require("./routes/products");
var bookingsRouter = require("./routes/bookings");
var sellersRouter = require("./routes/sellers");
var usersRouter = require("./routes/users");

var app = express();

mongoose
.connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("MongoDB is ready"))
.catch((err) => console.log(err));
  
app.use(logger("dev"));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({ 
    secret: process.env.SECRET_KEY, 
    saveUninitialized:true,
    cookie: { maxAge: Number.parseInt(process.env.COOKIE_MAX_AGE) },
    resave: false 
}));
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/products", productsRouter);
app.use("/bookings", bookingsRouter);
app.use("/sellers", sellersRouter);
app.use("/users", usersRouter);


module.exports = app;
