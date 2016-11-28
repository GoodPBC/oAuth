
//here we bring in our user schema
var User = require('./models/user');
//here we bring in our resource schema
var Resource = require('./models/resource');
// we are creating our new get route for the home page and exporting it. secondly we update the route to render the template for index.ejs
module.exports = function(app, passport) {

	app.get('/', function(req, res) {
		//res.send('hello world'); //initial route
		res.render('index.ejs');
	});

    app.get('/login', function(req, res) {
        res.render('login.ejs', { message: req.flash('loginMessage') });
    });
    app.post('/login', passport.authenticate('local-login', {
        successRedirect: '/profile',
        failureRedirect: '/login',
        failureFlash: true
    }));

	app.get('/signup', function(req, res) {
		//here we render our signup and create the message object. the server sends the message to the ejs template
		res.render('signup.ejs', {message: req.flash('signupMessage') });
	});



	// this post route is created to handle the actual submitting of the form data to POST to the server  from the form on the signup route. which is templated in 
	// we copy from the route below and change .params to .body becuase the bodyparser puts our form data into the request.body object and so we can get it from the request object on every transaction

	// app.post('/signup', function(req, res) {
	// 	var newUser = new User();
	// 	newUser.local.username = req.body.email;	 // this is from our form in signup.ejs
	// 	newUser.local.password = req.body.password;	// this is from our form in signup.ejs
	// 	newUser.save(function(err){
	// 		if (err) {
	// 			throw err;
	// 		}
	// 	});
	// 	res.redirect('/');
	// });

	//updated signup post route for  to include passportJS
	app.post('/signup', passport.authenticate('local-signup', {
		successRedirect: '/profile',
		failureRedirect: '/signup',
		failureFlash: true
	}));
	//secures profile route
    app.get('/profile', isLoggedIn, function(req, res) {
        res.render('profile.ejs', { user: req.user });
    });

	//here we are giving params to our route
	app.get('/:username/:password', function(req, res) {

		//this is where we save our user param
		var newUser = new User();
		newUser.local.username = req.params.username;
		newUser.local.password = req.params.password;

		console.log(newUser.local.username + " " + newUser.local.password);

		newUser.save(function(err){
			if (err) {
				throw err;
			} 
		});
		res.send('Success!');
		
	});

    app.get('/logout', function(req, res){
        req.logout();
        res.redirect('/');
    })

    app.get('/resource', isLoggedIn, function(req, res) {
        res.render('resource.ejs');
    });

    app.post('/create', isLoggedIn, function(req, res) {
        var newResource = new Resource();
        newResource.name.resourceName = req.body.resourceName;
        newResource.name.strAddress = req.body.strAddress;
        newResource.name.borough = req.body.borough;
        newResource.name.contact = req.body.contact;
        newResource.name.latitude = req.body.latitude;
        newResource.name.longitude = req.body.longitude;
        newResource.name.zipCode = req.body.zipCode

        console.log(newResource.name.resourceName + " " + newResource.name.strAddress + " " + newResource.name.borough + " " + newResource.name.contact + " " + newResource.name.latitude + " " + newResource.name.longitude + " " + newResource.name.zipCode);

        newResource.save(function(err){
            if (err) {
                throw err;
            }
        });
        res.send('Success!');
    });
};
//logic for profile route
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}

