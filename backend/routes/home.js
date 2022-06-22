var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json())

let cortes = [
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
  } 
];




/* GET users listing. */
router.get('/', function(req, res, next) {

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json(cortes);

});

router.delete('/', function(req, res, next) {

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json(cortes);

});

module.exports = router;