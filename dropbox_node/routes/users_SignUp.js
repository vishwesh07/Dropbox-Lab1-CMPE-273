var express = require('express');
var router = express.Router();
var mysql = require('./mysql');
var bcrypt = require('bcrypt');

router.post('/SignUp', function(req, res, next) {

<<<<<<< HEAD
    console.log("In Node user_SignUp, email = "+req.body.signUpUserData.email);

    var getUser="SELECT * FROM users WHERE EmailId='"+req.body.signUpUserData.email+"'";

    console.log("Query is:"+getUser);
=======
    var email = req.body.signUpUserData.email;
    var firstName = req.body.signUpUserData.firstName;
    var lastName = req.body.signUpUserData.lastName;
    var password = req.body.signUpUserData.password;

    var getUser="SELECT * FROM users WHERE EmailId='"+email+"'";
>>>>>>> master

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
<<<<<<< HEAD
                return res.json({status: 401, message: message});
=======
                return res.json({message: message});
>>>>>>> master

            }

            //If user doesn't exists in database then insert user data in database.
            else {

                var salt = bcrypt.genSaltSync(10);

<<<<<<< HEAD
                var hash = bcrypt.hashSync(req.body.signUpUserData.password, salt);

                var setUser="INSERT INTO users (FirstName, LastName, EmailId, Password, Salt) VALUES ('" + req.body.signUpUserData.firstName +"' , '"+ req.body.signUpUserData.lastName +"' , '"+ req.body.signUpUserData.email +"' , '"+ hash +"' , '"+salt+ "')";
=======
                var hash = bcrypt.hashSync(password, salt);

                var setUser="INSERT INTO users (FirstName, LastName, EmailId, Password, Salt) VALUES ('" + firstName +"' , '"+ lastName +"' , '"+ email +"' , '"+ hash +"' , '"+salt+ "')";
>>>>>>> master

                console.log("Valid SignUp");

                mysql.dbOperation(function(err,results){

                    if(err){
                        throw err;
                    }

                    else
                    {

<<<<<<< HEAD
                        var message = "Successful Sign up";

                        //Send message: "Successful Sign up" back as response and render message variable.
                        return res.json({status: 201, message: message});
=======
                        //Assigning the session
                        req.session.email = email;
                        req.session.username = firstName;

                        console.log("Session initialized from SignUp");

                        var message = "Successful Sign up";

                        //Send message: "Successful Sign up" back as response and render message variable.
                        return res.json({ message: message});
>>>>>>> master

                    }
                },setUser);
            }
        }
    },getUser);

});

module.exports = router;
