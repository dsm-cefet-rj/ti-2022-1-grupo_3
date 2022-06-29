const normalize = require("normalize-mongoose");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  idSeller: {
    type: Schema.Types.ObjectId,
    ref: "Seller",
    required: true,
  },
});

ProductSchema.plugin(normalize);

var products = mongoose.model("Product", ProductSchema);
module.exports = products;