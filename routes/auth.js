/**
 * Created by zacharyrosenthal on 2/27/16.
 */
var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt-nodejs');
var auth = require('../services/auth');


router.get('/', function (req, res) {

    var pword = bcrypt.hashSync('bacon');

    var user = new User({name: 'Zach Rosenthal', username: 'user1', password: "bacon"});

    user.save();
    console.log("auth: " + JSON.stringify(auth));


    res.send('success');
});

/* GET home page. */
router.get('/login', function (req, res) {

    auth.authenticate("user1", "bacon", function (retVal) {

        res.send(retVal);
    });

});

router.get('/logout', function (req, res) {


});

module.exports = router;