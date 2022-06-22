var express = require('express');
var router = express.Router();

var bookings = [
  {
    "id": 1,
    "idProduct": 1,
    "date": "15/06/2022",
    "time": "22:29",
    "pay": "Dinheiro",
    "location": "Casa"
  },
  {
    "id": 2,
    "idProduct": 2,
    "date": "25/05/2022",
    "time": "21:28",
    "pay": "Dinheiro",
    "location": "Casa"
  },
  {
    "id": 3,
    "idProduct": 3,
    "date": "08/06/2022",
    "time": "21:28",
    "pay": "Dinheiro",
    "location": "Casa"
  },
  {
    "id": 4,
    "idProduct": 4,
    "date": "25/05/2022",
    "time": "21:28",
    "pay": "Dinheiro",
    "location": "Casa"
  },
  {
    "id": 5,
    "idProduct": 5,
    "date": "16/06/2022",
    "time": "19:00",
    "pay": "Dinheiro",
    "location": "Salão"
  },
  {
    "id": 6,
    "idProduct": 5,
    "date": "08/06/2022",
    "time": "05:24",
    "pay": "Dinheiro",
    "location": "Salão"
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