
//here we bring in our user schema
var User = require('./models/user');

// we are creating our new get route for the home page and exporting it. secondly we update the route to render the template for index ejs
module.exports = function(app) {
	app.get('/', function(req, res) {
		//res.send('hello world'); //intial route
		res.render('index.ejs');
	});


	app.get('/signup', function(req, res) {
		//here we render our signup and create the message object. the server sends the message to the ejs template
		res.render('signup.ejs', {message: 'Victory'})
	});

	// this post route is created to handle the actual submitting of the form data to POST to the server  from the form on the signup route. which is templated in 
	// we copy from the route below and change .params to .body becuase the bodyparser puts our form data into the request.body object and so we can get it from the request object on every transaction
	app.post('/signup', function(req, res) {
		debugger;
		var newUser = new User();
		newUser.local.username = req.body.email;
		newUser.local.password = req.body.password;
		newUser.save(function(err){
			if (err) {
				throw err;
			}
		}); 
		res.redirect('/');	
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