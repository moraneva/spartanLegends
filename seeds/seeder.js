/**
 * Created by evan on 2/27/16.
 */
var seeder = require('mongoose-seed');
var bcrypt = require('bcrypt-nodejs');

// Connect to MongoDB via Mongoose
seeder.connect('mongodb://localhost', function () {

    // Load Mongoose models
    seeder.loadModels([
        'models/company.js',
        'models/user.js',
        'models/product.js'
    ]);

    // Clear specified collections
    seeder.clearModels(['Company', 'User', 'Product'], function () {

        // Callback to populate DB once collections have been cleared
        seeder.populateModels(data);

    });

});

// Data array containing seed data - documents organized by Model
var data = [
    {
        'model': 'Company',
        'documents': [
            {
                name: 'Ford',
            },
            {
                name: 'Facebook',
                ' large_img_path': 'facebook.png',

            },
            {
                name: 'Google',
            },
            {
                name: 'Microsoft',
            },
            {
                name: 'Apple',
            },
            {
                name: 'Reddit',
            },
            {
                name: 'Youtube',
            },
            {
                name: 'Snapchat',
            },
            {
                name: 'Spartahack'
            }
        ]
    },
    {
        'model': 'User',
        'documents': [
            {
                name: 'Brian',
                username: 'brianuser',
                password: bcrypt.hashSync('brianpass'),
            },
            {
                name: 'Zach',
                username: 'zachuser',
                password: bcrypt.hashSync('zachpass'),
            },
            {
                name: 'Ryan',
                username: 'ryanuser',
                password: bcrypt.hashSync('ryanpass'),
            },
            {
                name: 'Evan',
                username: 'evanuser',
                password: bcrypt.hashSync('evanpass'),
            },
            {
                name: 'Bob',
                username: 'bobuser',
                password: bcrypt.hashSync('bobpass'),
            },
            {
                name: 'Loser1',
                username: 'loseruser',
                password: bcrypt.hashSync('loserpass'),
            },
            {
                name: 'test',
                username: 'test',
                password: bcrypt.hashSync('test')
            }
        ]
    },
];
