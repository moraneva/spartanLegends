/**
 * Created by evan on 2/27/16.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var companySchema = new Schema({
    name: String,
    thumbnail_img_path: String,
    icon: String,
    large_img_path: String,
    description: String,
    products: [{type: Number, ref: 'Products'}]

});

var Company = mongoose.model('Company', companySchema);

// make this available to our users in our Node applications
module.exports = Company;