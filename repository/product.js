/**
 * Created by evan on 2/27/16.
 */
var Product = require('../models/product');

ProductRepository = module.exports;

ProductRepository.getUser = function (companyId, callback) {

    Product.findOne(criteria, '', function (err, user) {

        if (err) return handleError(err);

        return callback(user);
    });
};

