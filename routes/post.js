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

module.exports = router;