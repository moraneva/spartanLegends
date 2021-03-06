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

    User.getUser({username: username}, function (user) {
        if (user) {

            if (bcrypt.compareSync(password, user.password)) {

                var claims = {
                    sub: user._id
                };

                jwt.sign(claims, secretKey, {}, function (token) {

                    callback({token: token, id: user._id, username: user.username});
                });

            } else {
                callback(false);
            }
        } else {

            callback(false);
        }
    });
};

Auth.authenticateNewLogin = function (usename, password, callback) {

    User.getUser({username: usename}, function (user) {
        if (user) {

            if (password == user.password) {

                var claims = {
                    sub: user._id
                };

                jwt.sign(claims, secretKey, {}, function (token) {

                    callback({token: token, id: user._id, username: user.username});
                });

            }
            else {
                callback(false);
            }
        } else {

            callback(false);
        }
    });
};

Auth.verify = function (token, callback) {

    jwt.verify(token, secretKey, {}, function (args, payload) {

        console.log(payload);

        callback(payload);

    });
};

Auth.register = function (user, callback) {
    user.password = bcrypt.hashSync(user.password);
    User.createUser(user, function (err, user) {
        callback(err, user);
    });
};

