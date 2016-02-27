/**
 * Created by zacharyrosenthal on 2/27/16.
 */
var express = require('express');
var router = express.Router();
var comment = require('../repository/comment');

router.post('/comment', function (err, comment) {

    if (!err) {

        res.send(comment._id);
    } else {

        res.status(500).send({error: 'object creation failed'});
    }
});