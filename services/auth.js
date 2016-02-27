/**
 * Created by zacharyrosenthal on 2/27/16.
 */
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt-nodejs');
var User = require('../repository/user');
var uuid = require('node-uuid');

var secretKey = uuid.v4();

Auth = module.exports;

Auth.authenticate = function (name, password, callback) {

    User.getUser(name, function (user) {

        if (bcrypt.compareSync(password, user.password)) {

                var claims = {
                    sub: user._id
                };

                jwt.sign(claims,secretKey,{} ,function (token) {

                    callback(token);
                });

        } else {

            callback(false);
        }
    });
};

Auth.verify = function (token, callback) {

    console.log(token);


    jwt.verify(token, secretKey, {}, function (payload) {

            console.log(payload)
    });


};

