/**
 * Created by evan on 2/27/16.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
        company: {
            type: Schema.ObjectId, ref: 'Person'
        }
    })
    ;

var Product = mongoose.model('Product', productSchema);

// make this available to our users in our Node applications
module.exports = Product;