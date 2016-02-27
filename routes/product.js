/**
 * Created by zacharyrosenthal on 2/27/16.
 */
var express = require('express');
var router = express.Router();
var Product = require('../repository/product');

router.get('/:id', function (req, res) {

    console.log(req.params);
    Product.getProduct(req.params.id, function (document) {

        if (document != -1) {

            res.send(document);
        } else {

            res.status(500).send({error: 'database query failed'});
        }
    });
});

module.exports = router;
