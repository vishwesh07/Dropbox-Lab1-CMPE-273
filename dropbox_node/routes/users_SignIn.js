var express = require('express');
var router = express.Router();
var mysql = require('./mysql');
var bcrypt = require("bcrypt");

router.post('/', function(req, res, next) {

    var hash;

    var getUser=" SELECT Password FROM users WHERE EmailId='"+req.body.signInUserData.email+"'";

    console.log("Query is:"+getUser);

    var message;

    mysql.dbOperation(function(err,results){
        if(err){
            throw err;
        }
        else
        {
            console.log(results.length);

            if(results.length > 0){

                hash =  results[0].Password;

                if(bcrypt.compareSync(req.body.signInUserData.password, hash)){

                    message = "valid SignIn";

                    console.log(message);

                    return res.json({status: 201, message: message});

                }

            }
            else {

                message = "Invalid SignIn";

                console.log(message);

                return res.json({status: 401, message: message});
            }
        }
    },getUser);

});

module.exports = router;


