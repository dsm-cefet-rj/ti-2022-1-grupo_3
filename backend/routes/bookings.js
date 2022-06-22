var express = require('express');
var router = express.Router();

var bookings = [
  {
    "id": 1,
    "images": [
      "https://images.unsplash.com/photo-1560869713-bf165a9cfac1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=326&q=80"
    ],
    "name": "Cabelo A",
    "price": 30,
    "seller": "Cabeleireiro A",
    "date": "2022-06-15",
    "time": "22:29",
    "pay": "Dinheiro",
    "location": "Casa"
  },
  {
    "id": 2,
    "images": [
      "https://images.unsplash.com/photo-1579084061716-7a321d7687eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGhhaXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    ],
    "name": "Cabelo B",
    "price": 45,
    "seller": "Cabeleireiro B",
    "date": "25/05/2022",
    "time": "21:28",
    "pay": "Dinheiro",
    "location": "Casa"
  },
  {
    "id": 3,
    "images": [
      "https://images.unsplash.com/photo-1548207800-8c16d068bf17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTV8fGhhaXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    ],
    "name": "Cabelo C",
    "price": 50.5,
    "seller": "Cabeleireiro C",
    "date": "2022-06-08",
    "time": "21:28",
    "pay": "Dinheiro",
    "location": "Casa"
  },
  {
    "id": 4,
    "images": [
      "https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fGhhaXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    ],
    "name": "Cabelo D",
    "price": 100,
    "seller": "Cabeleireiro D",
    "date": "25/05/2022",
    "time": "21:28",
    "pay": "Dinheiro",
    "location": "Casa"
  },
  {
    "date": "2022-06-22",
    "time": "16:00",
    "pay": "Dinheiro",
    "location": "Casa",
    "id": 5
  }
];

router.route("/").get((req, res, next) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.json(bookings);
});

router.route("/:id").get((req, res, next) => {
  let id = parseInt(req.params.id);
  let booking = bookings.filter((booking) => (booking.id = id));
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.json(booking);
});
router.route("/:id").delete((req, res, next) => {
  let id = parseInt(req.params.id);
  bookings = bookings.filter((booking) => booking.id != id);
  res.statusCode = 200;
  res.setHeader("Content-type", "application/json");
  res.json(id);
});
router.route("/:id").put((req, res, next) => {
  let id = parseInt(req.params.id);
  id = bookings.map((booking) => (booking = booking.id)).indexOf(id);
  bookings.splice(id, 1, req.body);
  res.setHeader("Content-Type", "application/json");
  res.statusCode = 200;
  res.json(req.body);
});
router.route("/").post((req, res, next) => {
  let nextId =
    bookings.map((booking) => booking.id).reduce((x, y) => Math.max(x, y)) + 1;
  let booking = { ...req.body, id: nextId };
  bookings.push(booking);
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.json(booking);
});
module.exports = router;