/**
 * Created by evan on 2/27/16.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
    _id: Number,
    user: {
        type: Number, ref: 'User'
    },
    up_votes: [{type: Number, ref: 'User'}],
    down_votes: [{type: Number, ref: 'User'}],
    post: String,
    comments: [{type: Number, ref: 'Comment'}],
    title: String
});

var Post = mongoose.model('Post', postSchema);

// make this available to our users in our Node applications
module.exports = Post;