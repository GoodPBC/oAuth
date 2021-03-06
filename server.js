var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;

var cookieParser = require('cookie-parser');
var session =require('express-session');
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var passport = require('passport');
var flash = require('connect-flash');

//here we are requiring the path of our config directory and the database.js file
var configDB = require('./config/database.js');

//connect to mongoose
mongoose.connect(configDB.url);

//check to see if our connection to the database is successful or not
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
   console.log('we are connected to the our mongo database!');
});

require('./config/passport')(passport);

//anytime we get a request to the server it will go through here first and log to the console
app.use(morgan('dev'));
//anytime a client server transaction takes place this will be its second stop
app.use(cookieParser());

//here we format data for our html forms. we can send text strings arrays etc..
app.use(bodyParser.urlencoded({extended: true}));

//third stop-- require three things, a secret which is used on the cookies, save UNinit & resave save
app.use(session({secret: 'secret string',
				 saveUninitialized: true,
				 resave: true}));



app.use(passport.initialize()); //start passport
app.use(passport.session()); // piggy backs off of express session above. make sure passport is after first
// that reason

app.use(flash());


//here we set our view engine which establishes what our templating engine is and where our pages will reside
// this is one of many the default for express is jade, handlebars can be used also
//===========================================================================================================================================
app.set('view engine', 'ejs'); 

//ROUTES
//initial route
//===========================================================================================================================================
//this is a basic route that we used to set up our app it is to be replaced with the next section
// app.use('/', function(req, res){
	
// 	res.send('Hello MR ROBOT!');

// 	console.log("THIS IS THE SESSION COOKIE");
// 	console.log(req.cookies);
	
// 	console.log("============================================================================================================================");
// 	console.log("============================================================================================================================");

// 	console.log("THESE ARE THE SESSION DETAILS");
// 	console.log(req.session);
// });


// updated routes from phase 3
//===========================================================================================================================================
//this is a basic route that we used to set up our app it is to be replaced with the next section
//here we are telling the server that it should look for our routes in the app/routes path
require('./app/routes.js')(app, passport); // pass passports to routes




// Listener
//===========================================================================================================================================

app.listen(PORT, function () {
  console.log('Example app listening on port: ' + PORT)
})