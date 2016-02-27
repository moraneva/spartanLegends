/**
 * Created by zacharyrosenthal on 2/27/16.
 */
var Company = require('../models/company');
var Product = require('../models/product');

CompanyRepository = module.exports;

CompanyRepository.getCompanies = function (callback) {

    Company.find().select('name icon').exec(function (err, docs) {

        if (!err) {

            callback(docs);
        } else {

            callback(-1);
        }
    });

};

CompanyRepository.getCompany = function (name, callback) {

    var populateQuery = [{path: 'products', select: 'name img _id', model: 'Product'}];
    Company.findOne({name: name}).populate(populateQuery).exec(function (err, document) {
        console.log(document);
        if (!err) {

            callback(document);
        } else {

            callback(-1);
        }
    });
};