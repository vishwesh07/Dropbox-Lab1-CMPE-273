var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

    var message;

    //Reset the session
    req.session.destroy();

    console.log("Session destroyed from SignOut");

    message = "successful SignOut";

    console.log(message);

    return res.json({status:304, message: message});

});

module.exports = router;


