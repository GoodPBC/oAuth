//here we bring in mongoose and setup our db schema for the for our mongodb

var mongoose = require('mongoose');

//here we define what our userSchema will consist of
var userSchema = mongoose.Schema({
	local: {
		username: String,
		password: String
	}
});

//we export it so we can access it elsewhere by requiring it
module.exports = mongoose.model('User', userSchema);