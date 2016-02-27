/**
 * Created by zacharyrosenthal on 2/27/16.
 */
var express = require('express');
var router = express.Router();
var comment = require('../repository/comment');

router.post('/', function (req,res) {

    var data = {
        text: req.text,
        postId: req.postId,
        userId: req.userId
    };

    comment.createComment(data, function (err, comment) {

        if (err != -1) {

            res.send(comment);
        } else {

            res.status(500).send({error: 'object creation failed'});
        }
    });
});