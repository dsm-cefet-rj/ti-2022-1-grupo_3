const normalize = require("normalize-mongoose");
const passport = require("passport-local-mongoose");
const mongoose = require("mongoose");
const schema = mongoose.Schema;

const UserSchema = new schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true
  },
  profilePicture: {
    type: String,
    required: false
  },
  isSeller: {
    type: Boolean,
    required: true,
  },
});

UserSchema.plugin(normalize);
UserSchema.plugin(passport);

const user = mongoose.model("User", UserSchema);
module.exports = user;