/**
 * Created by zacharyrosenthal on 2/27/16.
 */
var Post = require('../models/post');
var Comment = require('../models/comment');
var Product = require('../repository/product');
PostRepository = module.exports;

PostRepository.createPost = function (post, callback) {
    var schema = {
        user: post.user,
        post: post.post,
        title: post.title
    };

    var newPost = new Post(schema);
    newPost.up_votes = [];
    newPost.down_votes = [];
    newPost.comments = [];

    newPost.save(function (err, newPost) {
        Product.getProduct(post.product, function (product) {
            product.posts.push(newPost);
            product.save(function(err,a){
                callback(err, newPost);
            });
        });
    });
};

PostRepository.getPost = function (postId, callback) {

    Post.findOne({_id: postId})
        .exec(function (err, post) {

            callback(err, post);

        });

};


PostRepository.upVote = function (uId, pId, callback) {

    PostRepository.getPost(pId, function (err, post) {

        if (err) {
            callback(err, -1);
        } else {

            var a = post.up_votes.some(function (p) {
                return p.equals(uId);
            });

            var b = post.up_votes.some(function (p) {
                return p.equals(uId);
            });

            if (a || b) {

                callback(-1);
            } else {


                post.up_votes.push(uId);

                post.save(function (err) {

                    callback(err);

                });
            }
        }

    })

};

PostRepository.downVote = function (uId, pId, callback) {

    PostRepository.getPost(pId, function (err, post) {

        if (err) {
            callback(err, -1);
        } else {

            var a = post.up_votes.some(function (p) {
                return p.equals(uId);
            });

            var b = post.up_votes.some(function (p) {
                return p.equals(uId);
            });

            if (a || b) {

                callback(-1);
            } else {

                post.down_votes.push(uId);

                post.save(function (err) {

                    callback(err);

                });
            }
        }

    })

};