var express = require('express');
var router = express.Router();
var mysql = require('./mysql');
var bcrypt = require("bcrypt");

router.post('/', function(req, res, next) {

    var hash;
    var email = req.body.signInUserData.email;
    var password = req.body.signInUserData.password;
    var userName;

    var getUser=" SELECT FirstName,Password FROM users WHERE EmailId='"+email+"'";

    console.log("Query is:"+getUser);

    var message;

    mysql.dbOperation(function(err,results){
        if(err){
            throw err;
        }
        else
        {
            console.log(results.length);

            if(results.length === 1){

                //Assigning the session
                req.session.email = email;
                req.session.username = results[0].FirstName;

                console.log("Session initialized from SignIn");

                hash =  results[0].Password;

                if(bcrypt.compareSync(password, hash)){

                    message = "valid SignIn";

                    console.log(message);

                    return res.json({ message: message});

                }

            }
            else {

                message = "Invalid SignIn";

                console.log(message);

                return res.json({ message: message});
            }
        }
    },getUser);

});

module.exports = router;


