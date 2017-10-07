var express = require('express');
var router = express.Router();
var mysql = require('./mysql');
var bcrypt = require("bcrypt");

router.post('/', function(req, res, next) {

    var hash;
<<<<<<< HEAD

    var getUser=" SELECT Password FROM users WHERE EmailId='"+req.body.signInUserData.email+"'";
=======
    var email = req.body.signInUserData.email;
    var password = req.body.signInUserData.password;
    var userName;

    var getUser=" SELECT FirstName,Password FROM users WHERE EmailId='"+email+"'";
>>>>>>> master

    console.log("Query is:"+getUser);

    var message;

    mysql.dbOperation(function(err,results){
        if(err){
            throw err;
        }
        else
        {
            console.log(results.length);

<<<<<<< HEAD
            if(results.length > 0){

                hash =  results[0].Password;

                if(bcrypt.compareSync(req.body.signInUserData.password, hash)){
=======
            if(results.length === 1){

                //Assigning the session
                req.session.email = email;
                req.session.username = results[0].FirstName;

                console.log("Session initialized from SignIn");

                hash =  results[0].Password;

                if(bcrypt.compareSync(password, hash)){
>>>>>>> master

                    message = "valid SignIn";

                    console.log(message);

<<<<<<< HEAD
                    return res.json({status: 201, message: message});
=======
                    return res.json({ message: message});
>>>>>>> master

                }

            }
            else {

                message = "Invalid SignIn";

                console.log(message);

<<<<<<< HEAD
                return res.json({status: 401, message: message});
=======
                return res.json({ message: message});
>>>>>>> master
            }
        }
    },getUser);

});

module.exports = router;


