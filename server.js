var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;

var cookieParser = require('cookie-parser');
var session =require('express-session');
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser')

//here we are requiring the path of our config directory and the database.js file
var configDB = require('./config/database.js');

//connect to mongoose
mongoose.connect(configDB.url);

//anytime we get a request to the server it will go through here first and log to the console
app.use(morgan('dev'));
//anytime a client server transaction takes place this will be its second stop
app.use(cookieParser());

//
app.use(bodyParser.urlencoded({extended: true}))
//third stop-- require three things, a secret which is used on the cookies, saveUNinit & resave save
app.use(session({secret: 'secret string',
				 saveUninititalized: true, 
				 resave: true
				}));

//here we set our view engine which establishes what our templating engine is and where our pages will reside
//===========================================================================================================================================
app.set('view engine', ejs); // this is one of many the defualt for express is jade, handlebars can be used also

//ROUTES
//intitial route
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
require('./app/routes.js')(app);




// Listener
//===========================================================================================================================================

app.listen(PORT, function () {
  console.log('Example app listening on port 8080!')
})