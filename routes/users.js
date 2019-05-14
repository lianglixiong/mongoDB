var express = require('express');
var router = express.Router();
var Address = require('../db/user');




/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  

  	/*Address.findById('5cd4e3e1a19038e1bd45f413', function(err, res){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
            res.send(res);
        }
    })*/
    Address.find((err, users) => {
	  	console.log(users)
	  	res.send({users:users});
	  	// db.close()
	});
});

module.exports = router;

