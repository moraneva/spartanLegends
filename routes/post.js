/**
 * Created by zacharyrosenthal on 2/27/16.
 */
var express = require('express');
var router = express.Router();
var Post = require('../repository/post');

router.post('/new', function (req, res) {

    Post.createPost(req.body, function (err, post) {

        if (!err) {

            res.send(post);
        } else {

            res.status(500).send({error: 'object creation failed'});
        }
    });
});

router.post('/vote/', function (req, res) {

    callback = function (err) {

        if (!err) {

            res.send(req.body.uId);
        } else {

            res.status(500).send({error: 'opps we got some mongoose issues'});
        }
    };

    //if 1 then upvote
    if (req.body.direction) {

        Post.upVote(req.body.uId, req.body.pId, callback);
    } else {

        //downvote
        Post.downVote(req.body.uId, req.body.pId, callback);
    }

});

module.exports = router;