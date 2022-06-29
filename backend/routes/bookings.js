var express = require('express');
var router = express.Router();
var bookingModel = require('../models/bookings');
const bodyParser = require('body-parser');

router.use(bodyParser.json())

/* GET (read) bookings listing. */
router.route("/").get(async (req, res, next) => {
  try {
    const booking = await bookingModel.find();
    res.status(200).json(booking || {});
  } catch (err) {
    res.status(404).json({});
  }
});

router.route("/:id").get(async (req, res, next) => {
  try {
    const booking = await bookingModel.findById(req.params.id);
    res.status(200).json(booking || {});
  } catch (err) {
    res.status(404).json({});
  }
});

/* POST (create) booking. */
router.route("/").post(async (req, res, next) => {
  let newbooking = new bookingModel({...req.body});

  try {
    const response = await newbooking.save();
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({});
  }
});

/* PUT (update) booking. */
router.route("/:id").put(async (req, res, next) => {
	try {
		const response = await bookingModel
			.findByIdAndUpdate(req.params.id, {
				...req.body
			});

		res.status(200).json(response);
	} catch (err) {
		res.status(500).json({});
	}
});

/* DELETE (delete) booking. */
router.route("/:id").delete(async (req, res, next) => {
  try {
    const response = await bookingModel.findByIdAndRemove(req.params.id);
    res.status(200).json(req.params.id);
  } catch (err) {
    res.status(404).json({});
  }
});

module.exports = router;