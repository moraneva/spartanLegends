/**
 * Created by zacharyrosenthal on 2/27/16.
 */
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt-nodejs');
var User = require('../repository/user');

Auth = module.exports;

Auth.authenticate = function (username, password, callback) {

    var user = User.getUser(username, function (user) {

        if (bcrypt.compareSync(password, user.password)) {

            return callback(user._id);
        } else {

            return callback(false);
        }

    });

};

