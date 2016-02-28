/**
 * Created by evan on 2/27/16.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
    text: String,
    user: {
        type: Schema.Types.ObjectId, ref: 'User'
    },
    post: {type: Schema.Types.ObjectId, ref: 'Post'}
});

var Comment = mongoose.model('Comment', commentSchema);

// make this available to our users in our Node applications
module.exports = Comment;