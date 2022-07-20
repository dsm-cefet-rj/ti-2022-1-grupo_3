var express = require('express');
var router = express.Router();
var productModel = require('../models/products');
var bodyParser = require('body-parser');
var { verifyUser } = require("../middlewares/auth");

router.use(bodyParser.json())

/* GET (read) products listing. */
router.route("/").get(verifyUser, async (req, res, next) => {
  try {
    const product = await productModel.find().populate({
      path: 'idSeller',
      select: 'id'
    });

    res.status(200).json(product || {});
  } catch (err) {
    res.status(404).json({});
  }
});

router.route("/:id").get(verifyUser, async (req, res, next) => {
  try {
    const product = await productModel.findById(req.params.id).populate({
      path: 'idSeller',
      select: 'id'
    });

    res.status(200).json(product || {});
  } catch (err) {
    res.status(404).json({});
  }
});

/* POST (create) product. */
router.route("/").post(verifyUser, async (req, res, next) => {
  let newproduct = new productModel({...req.body});

  try {
    const response = await newproduct.save();
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({});
  }
});

/* PUT (update) product. */
router.route("/:id").put(verifyUser, async (req, res, next) => {
	try {
		const response = await productModel
			.findByIdAndUpdate(req.params.id, {
				...req.body
			});

		res.status(200).json(response);
	} catch (err) {
		res.status(500).json({});
	}
});

/* DELETE (delete) product. */
router.route("/:id").delete(verifyUser, async (req, res, next) => {
  try {
    const response = await productModel.findByIdAndRemove(req.params.id);
    res.status(200).json(req.params.id);
  } catch (err) {
    res.status(404).json({});
  }
});

module.exports = router;