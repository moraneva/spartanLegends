/**
 * Created by zacharyrosenthal on 2/27/16.
 */
var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt-nodejs');
var auth = require('../services/auth');

/* GET home page. */
router.post('/login', function (req, res) {
    var userData = req.body;

    Auth.authenticate(userData.username, userData.password, function (retVal) {

        res.send(retVal);

    });

});

router.get('/logout', function (req, res) {

});

router.post('/test', function (req, res) {

    res.send(req.User);
});


module.exports = router;