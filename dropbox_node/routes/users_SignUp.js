var express = require('express');
var router = express.Router();
var mysql = require('./mysql');
var bcrypt = require('bcrypt');

router.post('/SignUp', function(req, res, next) {

    console.log("In Node user_SignUp, email = "+req.body.signUpUserData.email);

    var getUser="SELECT * FROM users WHERE EmailId='"+req.body.signUpUserData.email+"'";

    console.log("Query is:"+getUser);

    mysql.dbOperation(function(err,results){
        if(err){
            throw err;
        }
        else
        {
            //Check if user already exists or not.
            if(results.length > 0){

                var message = "This email is already taken.";

                console.log(message);

                //Send message: "User already exists" back as response and render message variable.
                return res.json({status: 401, message: message});

            }

            //If user doesn't exists in database then insert user data in database.
            else {

                var salt = bcrypt.genSaltSync(10);

                var hash = bcrypt.hashSync(req.body.signUpUserData.password, salt);

                var setUser="INSERT INTO users (FirstName, LastName, EmailId, Password, Salt) VALUES ('" + req.body.signUpUserData.firstName +"' , '"+ req.body.signUpUserData.lastName +"' , '"+ req.body.signUpUserData.email +"' , '"+ hash +"' , '"+salt+ "')";

                console.log("Valid SignUp");

                mysql.dbOperation(function(err,results){

                    if(err){
                        throw err;
                    }

                    else
                    {

                        var message = "Successful Sign up";

                        //Send message: "Successful Sign up" back as response and render message variable.
                        return res.json({status: 201, message: message});

                    }
                },setUser);
            }
        }
    },getUser);

});

module.exports = router;
