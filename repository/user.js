/**
 * Created by zacharyrosenthal on 2/27/16.
 */
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt-nodejs');
var User = require('../models/user');

UserRepository = module.exports;

UserRepository.getUser = function (criteria, callback) {


    User.findOne(criteria, '', function (err, user) {


        if (err) return handleError(err);

        return callback(user);
    });
};