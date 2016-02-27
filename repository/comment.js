/**
 * Created by zacharyrosenthal on 2/27/16.
 */
var Comment = require('../models/comment');
var Post = require('../models/post');

CommentRepository = module.exports;

CommentRepository.createComment = function (data, callback) {

    var comment = new Comment(data);

    comment.save(function (err, comment) {

        Post.getPost(data.postId, function (err, post) {

            if (err) {

                callback(-1);
            } else {

                post.push(comment._id);

                post.save( function (err) {

                    if (err) {

                        callback(-1);
                    } else {

                        callback(comment);
                    }
                });
            }
        });
    });
};