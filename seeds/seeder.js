/**
 * Created by evan on 2/27/16.
 */
var seeder = require('mongoose-seed');
var bcrypt = require('bcrypt-nodejs');
var ObjectId = require('mongodb').ObjectId;
var Faker = require('Faker');

console.log(Faker.Name.firstName());

// Connect to MongoDB via Mongoose
seeder.connect('mongodb://localhost', function () {

    // Load Mongoose models
    seeder.loadModels([
        'models/company.js',
        'models/user.js',
        'models/post.js',
        'models/product.js',
        'models/comment.js'
    ]);

    // Clear specified collections
    seeder.clearModels(['Company', 'User', 'Post', 'Product', 'Comment'], function () {

        // Callback to populate DB once collections have been cleared
        seeder.populateModels(data);

    });

});

var products = [];
var posts = [];
var comments = [];
var users = [];

var companyDocuments = [

    {
        _id: 1,
        name: 'Facebook',
        icon: "fa-facebook-official",
        products: []
    },
    {
        _id: 2,
        name: 'Google',
        icon: "fa-google",
        products: []
    },
    {
        _id: 3,
        name: 'Twitter',
        icon: "fa-twitter",
        products: []
    },
    {

        _id: 4,
        name: 'Slack',
        icon: "fa-slack",
        products: []
    },
    {
        _id: 5,
        name: 'Amazon',
        icon: "fa-amazon",
        products: []
    },
];

function createUser(id) {

    return {_id: id, name: Faker.Name.findName(), username: Faker.Name.lastName(), password: bcrypt.hashSync('test')};
}


var i = 0;
for (; i < 20;) {

    users.push(createUser(++i));

}

console.log(users);

function createProduct(cId, id) {

    companyDocuments[cId-1].products.push(id);

    return {_id: id, company: cId, img: "abc123", description: Faker.Lorem.sentences(2), name: Faker.Address.streetName(), posts: []};

}

for (i = 0; i < 50;) {

    products.push(createProduct(companyDocuments[i%5]._id, ++i));
}

console.log(products);

function createPost(pId, uId, id) {

    var uV = [];
    var dV = [];

    products[pId-1].posts.push(id);

    for (var x = 0; x < Math.floor(Math.random())*19; x++) {

        if (x%2) {
            uV.push(users[x]._id);
        } else {

            dV.push(users[x]._id);
        }
    }

    var post = (Math.floor(Math.random())*100 > 50) ? Faker.Lorem.sentences(Math.floor(Math.random()) * 4): Faker.Lorem.paragraphs(Math.floor(Math.random()) * 3);

    return {
        _id: id,
        user: uId,
        product: pId,
        up_votes: uV,
        down_votes: dV,
        post: post,
        comments: [],
    };
}


for (i = 0; i < 300;) {


    posts.push(createPost(products[Math.floor(Math.random()) * 50]._id, users[Math.floor(Math.random()) * 20]._id, ++i));
}

console.log(posts);

function createComment(pId, uId, id) {

    posts[pId -1].comments.push(id);

    var text = (Math.floor(Math.random())*100 > 50) ? Faker.Lorem.sentences(Math.floor(Math.random()) * 3): Faker.Lorem.paragraphs(Math.floor(Math.random()) * 2);

    return {
        text: text,
        posterId: uId,
        post: pId,
        _id: id
    }

}

for (i = 0; i < 1500;) {

    comments.push(createComment(posts[Math.floor(Math.random()) * 300]._id, users[Math.floor(Math.random()) * 20]._id, ++i));
}

console.log(comments);


// Data array containing seed data - documents organized by Model

var data = [
    {
        model: 'Company',
        documents: companyDocuments
    },
    {
        model: 'User',
        documents: users
    },{
        model: 'Post',
        documents: posts
    },{
        model: 'Comment',
        documents: comments
    },
    {

        model: 'Product',
        documents: products
    }
];