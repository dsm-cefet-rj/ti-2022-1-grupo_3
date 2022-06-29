const normalize = require("normalize-mongoose");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookingSchema = new Schema({
  date: {
    type: Date,
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

bookingSchema.virtual('time')
.get(function () {
    const hours = this.date.getHours();
    const minutes = this.date.getMinutes();
    return `${hours}:${minutes}`;
})
.set(function(newTime) {
    const hours = newTime.split(':')[0];
    const minutes = newTime.split(':')[1];

    const newDate = this.date;
    newDate.setHours(hours);
    newDate.setMinutes(minutes);
    newDate.setSeconds(0);
    newDate.setMilliseconds(0);

    this.set('date', newDate);
});

bookingSchema.plugin(normalize);

var bookings = mongoose.model("Booking", BookingSchema);
module.exports = bookings;