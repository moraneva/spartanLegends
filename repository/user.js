/**
 * Created by zacharyrosenthal on 2/27/16.
 */
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt-nodejs');
var User = require('../models/user');

function getUser(userName) {

    User.findOne({username: userName}, '', function (err, user) {

        if (err) return handleError(err);

        return user;
    });
}