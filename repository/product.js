/**
 * Created by evan on 2/27/16.
 */
var Product = require('../models/product');
var Post = require('../models/post');
var Comment = require('../models/comment');
var ObjectId = require('mongodb').ObjectId;
ProductRepository = module.exports;

ProductRepository.getProduct = function (productId, callback) {

    Product.findOne({_id: ObjectId(productId)}, function (err, product) {
        Product.populate(product, [{path: 'posts'}, {path: 'posts.comments'}], function (err, product) {
            if (!err) {

                callback(product);
            } else {

                callback(-1);
            }
        });
    });
};

