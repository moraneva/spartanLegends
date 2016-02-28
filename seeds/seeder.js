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

var products = [
    {
        _id: new ObjectID(),
        company: companyDocuments[0]._id,
        img: "Facebook Website",
        description: "Profile is where you can express who you are and what's going on in your life. You can choose what you want to share on your Profile, such as interests, photos and videos, and personal information like current city and hometown.",
        name: "Profile",
        posts: []
    },
    {
        _id: new ObjectID(),
        company: companyDocuments[0]._id,
        img: "Instagram",
        description: "News Feed is a regularly updating list of stories from friends, Pages, and other connections, like Groups and events. People can like or comment on what they see. Each person’s News Feed is personalized based on their interests and the sharing activity of their friends.",
        name: "News Feed",
        posts: []
    },
    {
        _id: new ObjectID(),
        company: companyDocuments[0]._id,
        img: "Messenger",
        description: "Messenger is a mobile messaging app that lets you reach people instantly on their phones. With Messenger you can send private messages and stickers, chat with groups, and make free calls, even to people in other countries. You can also see who's available on Messenger and who's active on Facebook.",
        name: "Messenger",
        posts: []
    },
    {
        _id: new ObjectID(),
        company: companyDocuments[0]._id,
        img: "Instagram",
        description: "Instagram makes it easy for you to capture what’s happening in your world and share those moments instantly with friends and family, whether it’s a video of your baby’s first steps, a memorable sunset or a photo of your friend crossing the finish line. Instagram inspires us to explore and see the world differently—to go on adventures, to take detours, to take in everything around you and to share what you see with the world. Take a photo or video, choose a filter and share.",
        name: "Instagram",
        posts: []
    },
    {
        _id: new ObjectID(),
        company: companyDocuments[1]._id,
        img: "Google Maps",
        description: "Google Maps is a service that provides detailed information about geographical regions and sites around the world. In addition to conventional road maps, Google Maps offers aerial and satellite views of many places. In some cities, Google Maps offers street views comprising photographs taken from vehicles.",
        name: "Google Maps",
        posts: []
    },
    {
        _id: new ObjectID(),
        company: companyDocuments[1]._id,
        img: "Google Chrome",
        description: "Google Chrome is an Internet browser developed by Google Inc. that combines a minimal design with sophisticated technology to make the Web faster, safer and easier. The Google Chrome browser offers features including access to favorite pages instantly with thumbnails, desktop shortcuts to launch Web applications, and independently run tabs within the browser to prevent browser crashing. ",
        name: "Google Chrome",
        posts: []
    },
    {
        _id: new ObjectID(),
        company: companyDocuments[1]._id,
        img: "Google Docs",
        description: "Google Docs is an online word processor that lets you create and format text documents and collaborate with other people in real time.",
        name: "Google Docs",
        posts: []
    },
    {
        _id: new ObjectID(),
        company: companyDocuments[1]._id,
        img: "Google Hangouts",
        description: "Google Hangouts is a unified communications service that allows members to initiate and participate in text, voice or video chats, either one-on-one or in a group.",
        name: "Google Hangouts",
        posts: []
    },
    {
        _id: new ObjectID(),
        company: companyDocuments[2]._id,
        img: "Twitter Website",
        description: "You can customize your profile by selecting unique profile and header images, adding a name, bio, location, birthday, website and theme color, and by pinning a Tweet that other users will see when they visit your profile.",
        name: "Profile",
        posts: []
    },
    {
        _id: new ObjectID(),
        company: companyDocuments[2]._id,
        img: "Twitter Feed",
        description: "Twitter Feed is a regularly updating list of tweets from people they follow. People can retweet what they see. Each person’s News Feed is personalized based on the activity of their followers.",
        name: "Twitter Feed",
        posts: []
    },
    {
        _id: new ObjectID(),
        company: companyDocuments[2]._id,
        img: "Twitter Messenger",
        description: "Messenger allows you to send private and direct messages to other people on twitter.",
        name: "Messenger",
        posts: []
    },
    {
        _id: new ObjectID(),
        company: companyDocuments[2]._id,
        img: "Twitter App",
        description: "The Twitter app allows you to access all the functions of the website from your mobile device.",
        name: "Twiiter App",
        posts: []
    },
    {
        _id: new ObjectID(),
        company: companyDocuments[3]._id,
        img: "Slack Channels",
        description: "Organize your team conversations in open channels. Make a channel for a project, a topic, a team, or anything—everyone has a transparent view of all that’s going on.",
        name: "Channel",
        posts: []
    },
    {
        _id: new ObjectID(),
        company: companyDocuments[3]._id,
        img: "Slack Private Channels",
        description: "For sensitive information, create private channels and invite a few team members. No one else can see or join your private channels.",
        name: "Private Channel",
        posts: []
    },
    {
        _id: new ObjectID(),
        company: companyDocuments[3]._id,
        img: "Slack Direct Message",
        description: "To reach a colleague directly, send them a Direct Message. It's completely private and secure.",
        name: "Direct Message",
        posts: []
    },
    {
        _id: new ObjectID(),
        company: companyDocuments[3]._id,
        img: "Slack Account",
        description: "A Slack account allows you to set up a profile with your name, description, phone number, Skype, and a picture. You can set up notification so you will be notified every time something gets posted to Slack. This will help keep you up to date, but it will get noisier the larger and more active your team becomes.",
        name: "Account",
        posts: []
    },
    {
        _id: new ObjectID(),
        company: companyDocuments[4]._id,
        img: "Amazon Echo",
        description: "Amazon Echo is a wireless speaker and voice command device from Amazon.com. The device responds to the name 'Alexa'; this wake word can be changed by the user to 'Amazon' or 'Echo'. The device is capable of voice interaction, music playback, making to-do lists, setting alarms, streaming podcasts, playing audiobooks, and providing weather, traffic and other real time information. ",
        name: "Amazon Echo",
        posts: []
    },
    {
        _id: new ObjectID(),
        company: companyDocuments[4]._id,
        img: "Amazon Website",
        description: "Amazon is an American electronic commerce and cloud computing company with headquarters in Seattle, Washington. It is the largest Internet-based retailer in the United States. You can browse products that other sellers have listed or sell something of your own.",
        name: "Amazon Buy/Sell",
        posts: []
    },
    {
        _id: new ObjectID(),
        company: companyDocuments[4]._id,
        img: "Amazon Prime",
        description: "Amazon Prime is a paid service that gives Amazon shoppers a few distinct advantages. Members of Amazon Prime are eligible for free one- or two-day shipping on most items, Prime music, Prime Photos, and more.",
        name: "Amazon Prime",
        posts: []
    },
    {
        _id: new ObjectID(),
        company: companyDocuments[4]._id,
        img: "Amazon Account",
        description: "Amazon account allows you to manage your profile, previous orders, recommendations, saved items, other settings to make your shopping experience more enjoyable.",
        name: "Amazon Account",
        posts: []
    },

];

products.forEach(function (product) {

    companyDocuments.forEach(function (company) {

        if (product.company == company._id) {
            company.products.push(product._id);
        }

    });

});
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

    var productIndex = Math.floor(Math.random() * 20);
    var userIndex = Math.floor(Math.random() * 20);
    posts.push(createPost(productIndex, products[productIndex]._id, users[userIndex]._id, new ObjectID()));
}

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

// Data array containing seed data - documents organized by Model

var data = [
    {
        model: 'Company',
        documents: companyDocuments
    },
    {
        model: 'User',
        documents: users
    },
    {
        model: 'Product',
        documents: products
    },
    {
        model: 'Post',
        documents: posts
    }, {
        model: 'Comment',
        documents: comments
    },
];