var express = require('express');
var router = express.Router();

var products = [
  {
    "id": 1,
    "images": [
      "https://images.unsplash.com/photo-1560869713-bf165a9cfac1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=326&q=80"
    ],
    "name": "Cabelo Teste",
    "price": 30,
    "seller": "Cabeleireiro A"
  },
  {
    "id": 2,
    "images": [
      "https://images.unsplash.com/photo-1579084061716-7a321d7687eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGhhaXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    ],
    "name": "Cabelo B",
    "price": 45,
    "seller": "Cabeleireiro B"
  },
  {
    "id": 3,
    "images": [
      "https://images.unsplash.com/photo-1548207800-8c16d068bf17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTV8fGhhaXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    ],
    "name": "Cabelo C",
    "price": 50.5,
    "seller": "Cabeleireiro C"
  },
  {
    "id": 4,
    "images": [
      "https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fGhhaXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    ],
    "name": "Cabelo D",
    "price": 100,
    "seller": "Cabeleireiro D"
  },
  {
    "id": 5,
    "images": [
      "https://images.unsplash.com/photo-1570779380181-43ab3111bbb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
    ],
    "name": "Cabelo Comprido",
    "price": "100",
    "seller": "Cabeleireiro E"
  }
];

/* GET (read) products listing. */
router.route("/").get((req, res, next) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.json(products);
});

/* POST (create) product. */
router.route("/").post((req, res, next) => {
  let nextId = 1 + products.map((p) => p.id).reduce((x, y) => Math.max(x, y));
  let product = { ...req.body, id: nextId };
  products.push(product);
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.json(product);
});

/* DELETE (delete) product. */
router
  .route("/:id")
  .delete((req, res, next) => {
    products = products.filter(function (value, index, arr) {
      return value.id != req.params.id;
    });

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json(req.params.id);
  })
  .get((req, res, next) => {
    const id = parseInt(req.params.id);
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    const product = products.filter((product) => product.id === id);
    res.json(product);
  });
router.route("/id");

/* PUT (update) product. */
router.route("/:id").put((req, res, next) => {
  let index = products.map((p) => p.id).indexOf(req.params.id);
  products.splice(index, 1, req.body);

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.json(req.body);
});

module.exports = router;