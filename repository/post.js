/**
 * Created by zacharyrosenthal on 2/27/16.
 */
var Post = require('../models/post');
var Comment = require('../models/comment');
PostRepository = module.exports;

PostRepository.createPost = function (callback) {

    var post = new Post({});

    post.save(callback(err, post))
};

PostRepository.getPost = function (postId,comment, callback) {

    Post.findOne({_id: postId}).populate('comments')
        .exec(function (err, post) {
            callback(err, post,comment)
        });


};