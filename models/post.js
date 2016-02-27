/**
 * Created by evan on 2/27/16.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
        postingUser: {
            type: Schema.ObjectId, ref: 'User'
        },
        userUpvotes: [{type: Schema.ObjectId, ref: 'User'}],
        postMessage: String,
        comments: [{type: Schema.ObjectId, ref: 'Comment'}]
    })
    ;

var Post = mongoose.model('Post', postSchema);

// make this available to our users in our Node applications
module.exports = Post;