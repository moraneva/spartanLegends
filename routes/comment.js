/**
 * Created by zacharyrosenthal on 2/27/16.
 */
var express = require('express');
var router = express.Router();
var comment = require('../repository/comment');

router.post('/', function (req, res) {

    console.log("Params:  " + req.body.text);

    var data = {
        _id: 12541,
        text: req.body.text,
        post: req.body.postId,
        user: 1
    };


    comment.createComment(data, function (err, comment) {

        console.log(err);
        console.log(comment);
        if (err != -1) {

            res.send(comment);
        } else {

            res.status(500).send({error: 'object creation failed'});
        }
    });
});

module.exports = router;