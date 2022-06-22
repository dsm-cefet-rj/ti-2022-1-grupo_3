var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json')
  res.json([
    {
      "nome": "asdfgasdfa", 
      "sigka": "12312", 
      "id": 3
    }
  ]);
});

module.exports = router;
