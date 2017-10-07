var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {

    var message;

    //Reset the session
    req.session.reset();

    console.log("Session destroyed from SignOut");

    message = "successful SignOut";

    console.log(message);

    return res.json({ message: message});

});

module.exports = router;


