var express = require('express');
var router = express.Router();
var mysql = require('./mysql');
var bcrypt = require("bcrypt");

router.post('/', function(req, res, next) {

    var hash;
    var email = req.body.userData.email;
    var password = req.body.userData.password;

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

                    console.log(req.session);

                    // return res.status(200).json({username: req.session.email});

                    return res.json({status: 200, username: req.session.email});

                }

            }
            else {

                message = "Invalid SignIn";

                console.log(message);

                // req.session.destroy();

                return res.json({status: 401});

                // return res.status(401).send();

            }
        }
    },getUser);

});

module.exports = router;


