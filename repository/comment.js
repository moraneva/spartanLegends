/**
 * Created by zacharyrosenthal on 2/27/16.
 */
var Comment = require('../models/comment');

CommentRepository = module.exports;

CommentRepository.createComment = function (callback) {

    var comment = new Comment({});

    comment.save(callback(err, post));

};