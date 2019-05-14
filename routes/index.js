var express = require('express');
var router = express.Router();
var test = require('../db/test');

console.log(test)
/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.render('index', { title: 'Express'});
  // res.send(test.getById());
});

module.exports = router;
