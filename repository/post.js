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

PostRepository.getPost = function (postId, callback) {

    Post.findOne({_id: postId})
        .exec(function (err, post) {

            callback(err, post);

        });

};

PostRepository.upVote = function () {};

PostRepository.downVote = function () {};