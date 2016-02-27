/**
 * Created by zacharyrosenthal on 2/27/16.
 */
var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt-nodejs');
var auth = require('../services/auth');
var uuid = require('node-uuid');

var secretKey = uuid.v4();

router.get('/', function (req, res) {

    var pword = bcrypt.hashSync('bacon');

    var user = new User({name: 'Zach Rosenthal', username: 'user1', password: pword});

    user.save();
    console.log("auth: " + JSON.stringify(auth));

    res.send('success');
});

/* GET home page. */
router.post('/login', function (req, res) {
    var userData = req.body;
    auth.authenticate(userData.username, userData.password, function (userId) {

        if (userId) {

            //console.log(userId);

            var claims = {
                sub: userId
            };

            jwt.sign(claims, secretKey, {}, function (token) {

                res.send(token);
            });

        }

    });

});

router.get('/logout', function (req, res) {

});

module.exports = router;