
//here we bring in our user schema
var User = require('./models/user');

// we are creating our new get route for the home page and exporting it 
module.exports = function(app) {
	app.get('/', function(req, res) {
		res.send('hello world');
	});

//here we are giving params to our route
	app.get('/:username/:password', function(req, res) {

		//this is where we save our user param
		var newUser = new User();
		newUser.local.username = req.params.username;
		newUser.local.password = req.params.password;

		console.log(newUser.username + " " + newUser.password);

		newUser.save(function(err){
			if (err) {
				throw err;
			} 
		});
		res.send('Success!');
		
	});
}