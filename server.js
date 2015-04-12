var express = require('express'); // call express
var app = express(); // define our app using express
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var CommentSchema = require('./schema.js');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

var port = process.env.PORT || 3000; // set our port

// BASE SETUP
// =============================================================================

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/boncoin');

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router(); // get an instance of the express Router

// COMMENTS
// =============================================================================
router.post('/comments', function(req, res) {

    var comment = new CommentSchema(); // create a new instance of the Bear model
    comment.title = req.body.title;
    comment.content = req.body.content;
    // save the bear and check for errors
    comment.save(function(err) {
        if (err)
            res.send(err);

        res.json({
            message: 'Comment created!'
        });
    });
});

router.get('/comments', function(req, res) {
    // save the bear and check for errors
    CommentSchema.find(function(err, comments) {
        if (err)
            res.send(err);
        res.json(comments);
    });
});

router.put('/comments/:comment_id', function(req, res) {

    // use our bear model to find the bear we want
    CommentSchema.findById(req.params.comment_id, function(err, comment) {

        if (err)
            res.send(err);

        comment.title = req.body.title;
        comment.content = req.body.content;

        // save the bear
        comment.save(function(err) {
            if (err)
                res.send(err);

            res.json({
                message: 'Bear updated!'
            });
        });

    });
});

// delete the bear with this id (accessed at DELETE http://localhost:8080/api/bears/:bear_id)
router.delete('/comments/:comment_id', function(req, res) {
    CommentSchema.remove({
        _id: req.params.comment_id
    }, function(err, comment) {
        if (err)
            res.send(err);

        res.json({
            message: 'Successfully deleted'
        });
    });
});

// USERS
// =============================================================================
var passport = require('passport');
var session = require('express-session');
var LocalStrategy = require('passport-local').Strategy;
app.use(cookieParser());
app.use(session({
    secret: 'mySecretKey',
    resave: true,
    saveUnitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

var UserSchema = require('./userschema.js');
passport.use(UserSchema.createStrategy());

passport.serializeUser(UserSchema.serializeUser());
passport.deserializeUser(UserSchema.deserializeUser());

router.post('/register', function(req, res, next) {
    console.log('registering user');
    UserSchema.register(new UserSchema({
        username: req.body.username,
        mail: req.body.mail
    }), req.body.password, function(err) {
        if (err) {
            console.log('error while user register!', err);
            return next(err);
        }

        console.log('user registered!');

        res.redirect('/');
    });
});

router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/');
});

router.get('/login', function(req, res) {
    res.json(req.user);
});

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

//localhost:3000/api
router.get('/', function(req, res) {});

// all of our routes will be prefixed with /api
app.use('/api', router);


// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);