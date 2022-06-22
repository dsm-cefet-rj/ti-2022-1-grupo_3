var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json())

var sellers = [
  {
    "id": 1,
    "name": "Cabeleireiro A",
    "username": "CabeA",
    "birthday": "06/11/2000",
    "email": "cabeleireiroa@gmail.com",
    "password": ""
  },
  {
    "id": 2,
    "name": "Cabeleireiro B",
    "username": "CabeB",
    "birthday": "26/04/2001",
    "email": "cabeleireirob@gmail.com",
    "password": ""
  }
];

/* GET (read) sellers listing. */
router.route("/").get((req, res, next) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.json(sellers);
});

router.route("/:id").get((req, res, next) => {
  const id = parseInt(req.params.id);
  const seller = sellers.filter((s) => (s.id = id));
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.json(seller);
});

/* POST (create) seller. */
router.route("/").post((req, res, next) => {
  let nextId = 1 + sellers.map((s) => s.id).reduce((x, y) => Math.max(x, y));
  let seller = { ...req.body, id: nextId };
  sellers.push(seller);
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.json(seller);
});

/* PUT (update) seller. */
router.route("/:id").put((req, res, next) => {
  let index = sellers.map((s) => s.id).indexOf(req.params.id);
  sellers.splice(index, 1, { id: index, ...req.body });
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.json(req.body);
});

/* DELETE (delete) seller. */
router.route("/:id").delete((req, res, next) => {
    const id = parseInt(req.params.id);
    sellers = sellers.filter((s) => s.id != id);
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json(req.params.id);
});

module.exports = router;