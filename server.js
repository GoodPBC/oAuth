var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;

var morgan = require('morgan');

//anytime we get arequest to the server it will go through here first and log to the console
app.use(morgan('dev'));

app.use('/', function(req, res){
	res.send('our first program')
})