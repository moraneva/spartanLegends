/**
 * Created by zacharyrosenthal on 2/27/16.
 */
var Comment = require('../models/comment');
require('../models/post')
var Post = require('../repository/post');

CommentRepository = module.exports;

CommentRepository.createComment = function (data, callback) {

    var comment = new Comment(data);

    comment.save(function (err, comment) {
        if (err) return console.error(err);
        Comment.populate(comment, {path: "user"}, function (err, comment) {
            Post.getPost(data.post, function (err, post) {

                if (err) {
                    callback(err, -1);
                } else {

                    post.comments.push(comment._id);

                    post.save(function (err) {

                        callback(err, comment);

                    });
                }
            });
        });

    });
};