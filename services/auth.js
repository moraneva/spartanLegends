/**
 * Created by zacharyrosenthal on 2/27/16.
 */
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt-nodejs');
var User = require('../repository/user');

module.authenticate = function (name, password) {

    var user = User.getUser(name);

    if (bcrypt.compareSync(password, user.password)) {

        return user._id;
    } else {

        return false;g
    }
};