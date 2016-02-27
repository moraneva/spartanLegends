/**
 * Created by evan on 2/27/16.
 */
var seeder = require('mongoose-seed');

// Connect to MongoDB via Mongoose
seeder.connect('mongodb://localhost', function () {

    // Load Mongoose models
    seeder.loadModels([
        'models/company.js'
    ]);

    // Clear specified collections
    seeder.clearModels(['Company'], function () {

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
            }
        ]
    }
];
