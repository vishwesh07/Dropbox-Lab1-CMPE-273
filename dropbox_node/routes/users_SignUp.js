var express = require('express');
var router = express.Router();
var mysql = require('./mysql');
var bcrypt = require('bcrypt');
var shelljs = require('shelljs');
var path=require('path');

router.post('/SignUp', function(req, res, next) {

    var email = req.body.userData.email;
    var firstName = req.body.userData.firstName;
    var lastName = req.body.userData.lastName;
    var password = req.body.userData.password;

    var getUser="SELECT * FROM users WHERE EmailId='"+email+"'";

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
                return res.json({status:401, message: message});

            }

            //If user doesn't exists in database then insert user data in database.
            else {

                var salt = bcrypt.genSaltSync(10);

                var hash = bcrypt.hashSync(password, salt);

                var setUser="INSERT INTO users (FirstName, LastName, EmailId, Password, Salt) VALUES ('" + firstName +"' , '"+ lastName +"' , '"+ email +"' , '"+ hash +"' , '"+salt+ "')";

                var uploadpath=path.resolve(__dirname,'../','public','upload');

                console.log(uploadpath);

                shelljs.mkdir(uploadpath+"/"+email);

                console.log("Valid SignUp");

                mysql.dbOperation(function(err,results){

                    if(err){
                        throw err;
                    }

                    else
                    {

                        //Assigning the session
                        req.session.email = email;
                        req.session.username = firstName;

                        console.log("Session initialized from SignUp");

                        var message = "Successful Sign up";

                        //Send message: "Successful Sign up" back as response and render message variable.
                        // return res.json({ message: message});

                        //res.status(200).send({username: req.session.email});

                        return res.json({status: 200, username: req.session.email});
                    }
                },setUser);
            }
        }
    },getUser);

});

module.exports = router;
