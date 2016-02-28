/**
 * Created by evan on 2/27/16.
 */
var seeder = require('mongoose-seed');
var bcrypt = require('bcrypt-nodejs');
var ObjectID = require('mongodb').ObjectID;
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
        _id: new ObjectID(),
        name: 'Facebook',
        icon: "fa-facebook-official",
        products: []
    },
    {
        _id: new ObjectID(),
        name: 'Google',
        icon: "fa-google",
        products: []
    },
    {
        _id: new ObjectID(),
        name: 'Twitter',
        icon: "fa-twitter",
        products: []
    },
    {

        _id: new ObjectID(),
        name: 'Slack',
        icon: "fa-slack",
        products: []
    },
    {
        _id: new ObjectID(),
        name: 'Amazon',
        icon: "fa-amazon",
        products: []
    },
];

function createUser(id) {

    return {_id: id, name: Faker.Name.findName(), username: Faker.Name.lastName(), password: bcrypt.hashSync('test')};
}

var i = 0;
for (; i < 20; i++) {

    users.push(createUser(new ObjectID()));

}

console.log(users);

function createProduct(index, cId, id) {

    companyDocuments[index].products.push(id);

    return {
        _id: id,
        company: cId,
        img: "abc123",
        description: Faker.Lorem.sentences(2),
        name: Faker.Address.streetName(),
        posts: []
    };

}

for (i = 0; i < 50; i++) {

    products.push(createProduct(i % 5, companyDocuments[i % 5]._id, new ObjectID()));
}

console.log(products);

function createPost(pIndex, pId, uId, id) {

    var uV = [];
    var dV = [];

    products[pIndex].posts.push(id);

    for (var x = 0; x < Math.floor(Math.random() * 19); x++) {

        if (x % 2) {
            uV.push(users[x]._id);
        } else {

            dV.push(users[x]._id);
        }
    }

    var post = (Math.floor(Math.random() * 100) > 50) ? Faker.Lorem.sentences(Math.floor(Math.random() * 4 + 1)) : Faker.Lorem.paragraphs(Math.floor(Math.random()) * 3 + 1);

    return {
        _id: id,
        user: uId,
        product: pId,
        up_votes: uV,
        down_votes: dV,
        post: post,
        title: Faker.Company.companyName(),
        comments: [],
    };
}

for (i = 0; i < 300; i++) {

    var productIndex = Math.floor(Math.random() * 50);
    var userIndex = Math.floor(Math.random() * 20);
    posts.push(createPost(productIndex, products[productIndex]._id, users[userIndex]._id, new ObjectID()));
}

console.log(posts);

function createComment(pIndex, pId, uId, id) {

    posts[pIndex].comments.push(id);

    var text = (Math.floor(Math.random() * 100 + 1) > 50) ? Faker.Lorem.sentences(Math.floor(Math.random() * 3 + 1)) : Faker.Lorem.paragraphs(Math.floor(Math.random() * 2 + 1));

    return {
        text: text,
        user: uId,
        post: pId,
        _id: id
    }

}

for (i = 0; i < 1500; i++) {

    var postIndex = Math.floor(Math.random() * 300);
    var userIndex = Math.floor(Math.random() * 20);
    comments.push(createComment(postIndex, posts[postIndex]._id, users[userIndex]._id, new ObjectID()));
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
    }, {
        model: 'Post',
        documents: posts
    }, {
        model: 'Comment',
        documents: comments
    },
    {

        model: 'Product',
        documents: products
    }
];