/**
 * Created by zacharyrosenthal on 2/27/16.
 */
var Post = require('../models/post');

PostRepository = module.exports;

PostRepository.createPost = function (callback) {

    var post = new Post({});

    post.save(callback(err, post))
};

PostRepository.getPost = function (postId, callback) {

    Post.findById(postId, callback(err, post));
};