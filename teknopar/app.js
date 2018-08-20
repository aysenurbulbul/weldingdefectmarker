var express = require('express');
var path = require('path');
var fs = require('fs');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongo = require('mongodb');
var mongoose = require('mongoose');

//database on mLab
mongoose.connect('mongodb://test123:test123@ds117362.mlab.com:17362/users');
var db = mongoose.connection;

var routes = require('./routes/index');
var users = require('./routes/users');


var app = express();
var http = require('http');
var server = http.createServer(app);
var io = require('socket.io').listen(server);

//make file
io.on('connection', function(socket){
  console.log('we did it??');
  socket.on('chat message', function(msg){
    //console.log(msg);
	  
    //change file name if this is too lame for you xd
    fs.writeFile(__dirname + '/xdxd123.txt', msg ,(err) =>{
      if (err) throw err;
      //console.log('we good');
    })
  });
});

// View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');

// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Express Session
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));

// Passport init
app.use(passport.initialize());
app.use(passport.session());

// Express Validator
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

// Connect Flash
app.use(flash());

// Global Vars
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
});

app.use('/', routes);
app.use('/users', users);

// Set Port
app.set('port', (process.env.PORT || 3000));

server.listen(app.get('port'), function(){
	console.log('Server started on port '+app.get('port'));
});
