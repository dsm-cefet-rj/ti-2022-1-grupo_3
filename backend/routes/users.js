var express = require("express");
var passport = require("passport");
var bodyParser = require('body-parser');
var router = express.Router();
var authenticate = require("../middlewares/auth");
var userModel = require("../models/users");

router.use(bodyParser.json())

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (_err, user, info) => {
    if (!user) {
      return res.status(401).json({message: 'Could not log in with provided credentials!', err: {...info}});
    }
    
    req.logIn(user, (err) => {
      if (err) {
        return res.status(401).json({message: 'Could not log in with provided credentials!', err: err.message});          
      }

      const token = authenticate.getToken({_id: req.user._id});
      res.status(200).json({ id: req.user._id, token: token});
    }); 
  }) (req, res, next);
});

router.get('/logout', (req, res, next) => {
    if(req.session) {
        req.session.destroy();
        res.clearCookie('session-id');
        res.redirect('/');
    } else {
        next(new Error('You are not logged in!'))
    }
})

router.post("/signup", async (req, res) => {
  try {
    const user = new userModel({...req.body});
    await userModel.register(user, req.body.password);
    res.status(200).json({message: 'Registered successfully! Please log in' });
  } catch(err) {
    console.log(err);
    res.status(400).json({ err: err.message });
  }
});

module.exports = router;