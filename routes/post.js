
/**
 * Created by zacharyrosenthal on 2/27/16.
 */
var express = require('express');
var router = express.Router();
var Post = require('../repository/post');

router.post('/post', function (req, res) {

    Post.createPost(data, function (err, post) {

        if (!err) {

            res.send(post._id);
        } else {

            res.status(500).send({error: 'object creation failed'});
        }
    });
});


router.post('/vote/', function (req, res) {

    callback = function () {

    };

    //if 1 then upvote
    if (req.body.direction) {

        comment.upVote(req.body.uId, req.body.pId);
    } else {

        //downvote
        comment.downVote(req.body.uId, req.body.pId);
    }

});

module.exports = router;