/**
 * Created by zacharyrosenthal on 2/27/16.
 */
var Company = require('../models/company');

CompanyRepository = module.exports;

CompanyRepository.getCompanies = function (callback) {

    Company.find().select('name icon').exec( function (err, docs) {

        if (!err) {

            callback(docs);
        } else {

            callback(-1);
        }
    });

};

CompanyRepository.getCompany = function (name, callback) {

    Company.find({name: name}).populate('products').exec( function (err, document) {


        if (!err) {

            callback(document);
        } else {

            callback(-1);
        }
    });
};