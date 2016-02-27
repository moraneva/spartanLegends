/**
 * Created by zacharyrosenthal on 2/27/16.
 */
var express = require('express');
var router = express.Router();
var company = require('../repository/product');

router.get('/id:', function (req, res) {


    product.getProduct( req.params.id, function (document) {

        if (err != -1) {

            res.send(document);
        } else {

            res.status(500).send({error: 'database query failed'});
        }
    });
});

module.exports = router;
