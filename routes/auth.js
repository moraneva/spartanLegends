/**
 * Created by zacharyrosenthal on 2/27/16.
 */
var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt-nodejs');
var User = require('../models/user');
var auth = require('..services/auth');
var uuid = require('node-uuid');

var secretKey = uuid.v4();

router.get('/', function (req, res) {

    var pword = bcrypt.hashSync('bacon');

    var user = new User({name: 'Zach Rosenthal', username: 'user1', password: pword});

    user.save();

    res.send('success');
});

/* GET home page. */
router.get('/login', function (req, res) {

    var userId = auth.authenticate(req.name, req.password);

    if (userId) {

        var claim = {
            sub: userId
        };

        var jwt = nJwt.create(claims,secretKey);

        console.log(jwt);

        var token = jwt.compact();

        new Cookies(req,res).set('access_token',token,{
            httpOnly: true,
            secure: true      // for your production environment
        });
    }




//    res.send('success2');

});

router.get('/logout', function (req, res) {


});

module.exports = router;