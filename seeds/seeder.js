/**
 * Created by evan on 2/27/16.
 */
var seeder = require('mongoose-seed');
var bcrypt = require('bcrypt-nodejs');
var ObjectId = require("mongodb").ObjectId;

// Connect to MongoDB via Mongoose
seeder.connect('mongodb://localhost', function () {

    // Load Mongoose models
    seeder.loadModels([
        'models/company.js',
        'models/user.js',
        'models/post.js',
        'models/product.js'
    ]);

    // Clear specified collections
    seeder.clearModels(['Company', 'User', 'Post', 'Product'], function () {

        // Callback to populate DB once collections have been cleared
        seeder.populateModels(data);

    });

});

// Data array containing seed data - documents organized by Model

var companyDocuments = [

    {
        _id: ObjectId("5126bc054aed4daf9e2ab773"),
        name: 'Facebook',
        icon: "fa-facebook-official"
    },
    {
        _id: ObjectId("5126bc054aed4daf9e2ab774"),
        name: 'Google',
        icon: "fa-google"
    },
    {
        _id: ObjectId("5126bc054aed4daf9e2ab775"),
        name: 'Twitter',
        icon: "fa-twitter"
    },
    {
        _id: ObjectId("5126bc054aed4daf9e2ab776"),
        name: 'Slack',
        icon: "fa-slack"
    },
    {
        _id: ObjectId("5126bc054aed4daf9e2ab777"),
        name: 'Amazon',
        icon: "fa-amazon"
    },
];
var data = [
        {
            'model': 'Company',
            'documents': companyDocuments
        },
        {
            'model': 'User',
            'documents': [
                {
                    _id: ObjectId("5126bc054aed4daf9e2ab778"),
                    name: 'Brian',
                    username: 'brianuser',
                    password: bcrypt.hashSync('brianpass'),
                },
                {
                    _id: ObjectId("5126bc054aed4daf9e2ab779"),
                    name: 'Zach',
                    username: 'zachuser',
                    password: bcrypt.hashSync('zachpass'),
                },
                {
                    _id: ObjectId("5126bc054aed4daf9e2ab780"),
                    name: 'Ryan',
                    username: 'ryanuser',
                    password: bcrypt.hashSync('ryanpass'),
                },
                {
                    _id: ObjectId("5126bc054aed4daf9e2ab781"),
                    name: 'Evan',
                    username: 'evanuser',
                    password: bcrypt.hashSync('evanpass'),
                },
                {
                    _id: ObjectId("5126bc054aed4daf9e2ab782"),
                    name: 'Bob',
                    username: 'bobuser',
                    password: bcrypt.hashSync('bobpass'),
                },
                {
                    _id: ObjectId("5126bc054aed4daf9e2ab783"),
                    name: 'Loser1',
                    username: 'loseruser',
                    password: bcrypt.hashSync('loserpass'),
                },
                {
                    _id: ObjectId("5126bc054aed4daf9e2ab784"),
                    name: 'test',
                    username: 'test',
                    password: bcrypt.hashSync('test')
                }
            ]
        },
        {
            model: 'Post',
            documents: [
                {
                    productId: ObjectId("5126bc054aed4daf9e2ab783"),
                    postingUser: ObjectId("5126bc054aed4daf9e2ab778"),
                    userUpvotes: [
                        ObjectId("5126bc054aed4daf9e2ab779"),
                        ObjectId("5126bc054aed4daf9e2ab780"),
                        ObjectId("5126bc054aed4daf9e2ab781"),
                        ObjectId("5126bc054aed4daf9e2ab782")
                    ],
                    postMessage: "I want FB to have a dislike button"
                },
            ]
        },
        {
            model: 'Product',
            documents: [
                {
                    company: ObjectId("5126bc054aed4daf9e2ab773"),
                    description: "Facebook News Feed"
                }
            ]
        }
    ]
    ;
