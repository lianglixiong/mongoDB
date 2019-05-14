
var express = require('express');
var router = express.Router();
var create = require('../util/dal/tb_informationDAL');




/* GET users listing. */
router.get('/', function(req, res, next) {
  	// res.send('respond with a resource');
  	create(function(err,data){
  		if(err){
  			console.log(err)
  		}else{
  			console.log(res)
  			res.send({data:data});
  		}
  		
  	})
});

module.exports = router;

