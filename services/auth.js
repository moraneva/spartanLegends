/**
 * Created by zacharyrosenthal on 2/27/16.
 */
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt-nodejs');
var User = require('../repository/user');
var uuid = require('node-uuid');

var secretKey = uuid.v4();

Auth = module.exports;

Auth.authenticate = function (username, password, callback) {

    User.getUser({username:username}, function (user) {

        if (bcrypt.compareSync(password, user.password)) {

            var claims = {
                sub: user._id
            };

            jwt.sign(claims, secretKey, {}, function (token) {

                callback(token);
            });

        } else {

            callback(false);
        }
    });
};

Auth.verify = function (token, callback) {

    jwt.verify(token, secretKey, {}, function (args,payload) {

        console.log(payload);

        callback(payload);

    });
};

