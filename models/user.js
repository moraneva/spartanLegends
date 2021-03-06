/**
 * Created by evan on 2/27/16.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    username: String,
    password: String
});

var User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
module.exports = User;