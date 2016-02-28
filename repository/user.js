/**
 * Created by zacharyrosenthal on 2/27/16.
 */
var User = require('../models/user');

UserRepository = module.exports;

UserRepository.getUser = function (criteria, callback) {


    User.findOne(criteria, '', function (err, user) {


        if (err) {

            callback(null)
        } else {

            callback(user);
        }
    });
};

UserRepository.createUser = function (callback) {

    var user = new User({});

    user.save(callback(err, user));
};