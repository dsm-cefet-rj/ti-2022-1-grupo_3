var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var JwtStrategy = require("passport-jwt").Strategy;
var ExtractJwt = require("passport-jwt").ExtractJwt;
var User = require("../models/users");
var {sign} = require("jsonwebtoken");

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

var options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = process.env.SECRET_KEY;

exports.getToken = function (user) {
  return sign(user, process.env.SECRET_KEY, { expiresIn: "1 h" });
};

exports.jwtPassport = passport.use(
  new JwtStrategy(options, function (jwt_payload, done) {
    User.findOne({ _id: jwt_payload._id }, (err, user) => {
      if (err) {
        return done(err, false);
      }
      if (user) {
        return done(null, user);
      } else {
        return done(null, true);
      }
    });
  })
);

exports.verifyUser = passport.authenticate("jwt", { session: false });