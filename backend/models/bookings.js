const normalize = require("normalize-mongoose");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookingSchema = new Schema({
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  pay: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  idProduct: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
});

BookingSchema.plugin(normalize);

var bookings = mongoose.model("Booking", BookingSchema);
module.exports = bookings;