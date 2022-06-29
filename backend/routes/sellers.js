var express = require('express');
var router = express.Router();
var sellerModel = require('../models/sellers');
const bodyParser = require('body-parser');

router.use(bodyParser.json())

/* GET (read) sellers listing. */
router.route("/").get(async (req, res, next) => {
  try {
    const seller = await sellerModel.find();
    res.status(200).json(seller || {});
  } catch (err) {
    res.status(404).json({});
  }
});

router.route("/:id").get(async (req, res, next) => {
  try {
    const seller = await sellerModel.findById(req.params.id);
    res.status(200).json(seller || {});
  } catch (err) {
    res.status(404).json({});
  }
});

/* POST (create) seller. */
router.route("/").post(async (req, res, next) => {
  let newSeller = new sellerModel({...req.body});

  try {
    const response = await newSeller.save();
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({});
  }
});

/* PUT (update) seller. */
router.route("/:id").put(async (req, res, next) => {
	try {
		const response = await sellerModel
			.findByIdAndUpdate(req.params.id, {
				...req.body
			});

		res.status(200).json(response);
	} catch (err) {
		res.status(500).json({});
	}
});

/* DELETE (delete) seller. */
router.route("/:id").delete(async (req, res, next) => {
  try {
    const response = await sellerModel.findByIdAndRemove(req.params.id);
    res.status(200).json(req.params.id);
  } catch (err) {
    res.status(404).json({});
  }
});

module.exports = router;