var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  res.send({ title: 'Express' });
});

module.exports = router;
