/**
 * Created by evan on 2/27/16.
 */
var seeder = require('mongoose-seed');

// Connect to MongoDB via Mongoose
seeder.connect('mongodb://localhost', function () {

    // Load Mongoose models
    seeder.loadModels([
        'models/company.js',
        'models/user.js'
    ]);

    // Clear specified collections
    seeder.clearModels(['Company', 'User'], function () {

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
                'name': 'Ford',
            },
            {
                'name': 'Facebook',
            },
            {
                'name': 'Google',
            },
            {
                'name': 'Microsoft',
            },
            {
                'name': 'Apple',
            },
            {
                'name': 'Reddit',
            },
            {
                'name': 'Youtube',
            },
            {
                'name': 'Snapchat',
            },
            {
                'name': 'Spartahack'
            }
        ]
    },
    {
        'model': 'User',
        'documents': [
            {
                'name': 'Brian',
                'username': 'brianuser',
                'password': 'brianpass',
            },
            {
                'name': 'Zach',
                'username': 'zachuser',
                'password': 'zachpass',
            },
            {
                'name': 'Ryan',
                'username': 'ryanuser',
                'password': 'ryanpass',
            },
            {
                'name': 'Evan',
                'username': 'evanuser',
                'password': 'evanpass',
            },
            {
                'name': 'Bob',
                'username': 'bobuser',
                'password': 'bobpass',
            },
            {
                'name': 'Loser',
                'username': 'loseruser',
                'password': 'loserpass',
            }
        ]
    },
];
