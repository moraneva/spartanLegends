/**
 * Created by evan on 2/27/16.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
    _id: Number,
    text: String,
    user: {
        type: Number, ref: 'User'
    },
    post: {type: Number, ref: 'Post'}
});

var Comment = mongoose.model('Comment', commentSchema);

// make this available to our users in our Node applications
module.exports = Comment;