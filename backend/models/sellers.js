const normalize = require("normalize-mongoose");
const mongoose = require("mongoose");
const schema = mongoose.Schema;

const SellerSchema = new schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: false
  },
  images: {
    type: [String],
    required: true,
  },
});

SellerSchema.plugin(normalize);

var sellers = mongoose.model("Seller", SellerSchema);
module.exports = sellers;