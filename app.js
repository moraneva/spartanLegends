var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require("mongoose");
var routes = require('./routes/index');
var auth = require('./routes/auth');
var authService = require('./services/auth.js');
var user = require('./repository/user');
var posts = require('./routes/post');
var comments = require('./routes/comment');
var products = require('./routes/product');
var company = require('./routes/company');

var app = express();

var uristring =
    process.env.MONGOLAB_URI ||
    process.env.MONGOHQ_URL ||
    'mongodb://localhost';

mongoose.connect(uristring, function (err, res) {
    if (err) {
        console.log('ERROR connecting to: ' + uristring + '. ' + err);
    } else {
        console.log('Succeeded connected to: ' + uristring);
    }
});
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//AUTH Middleware
app.post('*', function (req, res, next) {

    console.log(req.path);
    if (req.path == '/auth/login' || req.path == '/auth/register') {

        next();
    } else {

        authService.verify(req.get('AuthToken'), function (payload) {

            if (payload) {
                console.log("xxx");
                console.log(payload);
                user.getUser({_id: payload.sub}, function (userObj) {
                    req.User = userObj;
                    next();
                })
            } else {
                res.sendStatus(-1);
            }
        });
    }
});

//ROUTES
app.use('/', routes);
app.use('/auth', auth);
app.use('/company', company);
app.use('/post', posts);
app.use('/comment', comments);
app.use('/product', products);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;
