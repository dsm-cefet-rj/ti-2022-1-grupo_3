var express = require('express');
var router = express.Router();
var userModel = require('../models/users');
var bodyParser = require('body-parser');
var { verifyUser } = require("../middlewares/auth");

router.use(bodyParser.json())

/* GET (read) sellers listing. */
router.route("/").get(verifyUser, async (req, res, next) => {
  try {
    const seller = await userModel.find({ isSeller: true });
    res.status(200).json(seller || {});
  } catch (err) {
    res.status(404).json({});
  }
});

router.route("/:id").get(verifyUser, async (req, res, next) => {
  try {
    const seller = await userModel.findById(req.params.id);
    res.status(200).json(seller || {});
  } catch (err) {
    res.status(404).json({});
  }
});

/* POST (create) seller. */
router.route("/").post(verifyUser, async (req, res, next) => {
  let newSeller = new userModel({...req.body, isSeller: true});

  try {
    const response = await newSeller.save();
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({});
  }
});

/* PUT (update) seller. */
router.route("/:id").put(verifyUser, async (req, res, next) => {
	try {
		const response = await userModel
			.findByIdAndUpdate(req.params.id, {
				...req.body,
        isSeller: true
			});

		res.status(200).json(response);
	} catch (err) {
		res.status(500).json({});
	}
});

/* DELETE (delete) seller. */
router.route("/:id").delete(verifyUser, async (req, res, next) => {
  try {
    const response = await userModel.findByIdAndRemove(req.params.id);
    res.status(200).json(req.params.id);
  } catch (err) {
    res.status(404).json({});
  }
});

module.exports = router;