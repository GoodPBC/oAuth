# oAuth

An express passport oauth framework for future projects

#Phase 1 Express & Morgan
	1. we "npm init" our project to create a package.json file

	2. we then install express and morgan using and save them to the dependancies in our package.json 
		-"npm install express --save"
		-"npm install morgan --save"

		-express is our node web framework for the application.
			http://expressjs.com/

		-morgan is an HTTP request logger middleware for node.js.
			https://www.npmjs.com/package/morgan
			https://github.com/expressjs/morgan
	
	3. we create our server and our first route for a hello world that prints "hello world" to the browser

#Phase 2 Cookie Parser & Express Session
	1. install cookie-parser
		- on the command line enter "npm install cookie-parser --save"

		Cookie Parser looks at the headers between the client and server transactions and parses out cookies that are being sent and saves the cookies to a variable called request.cookies.
			https://www.npmjs.com/package/cookie-parser
			https://github.com/expressjs/cookie-parser

		EXAMPLE OF CONSOLE OUTPUT
			connect.sid': 's:-eaPcJCU2SDXXmAdR6SQqMMmGcQOa7Ti.uFV9RP/ZDrV5JfVd2J7BPUApdK5NkGnkVaqGevDty7k' }
			
			"s:-eaPcJCU2SDXXmAdR6SQqMMmGcQOa7Ti"  -- this first part is the session ID

			"uFV9RP/ZDrV5JfVd2J7BPUApdK5NkGnkVaqGevDty7k"  -- this second part is the signature for cookie authentication to the server

	2. install express-session
		- on the command line enter "npm install express-session --save"

		express session allows us to authenticate transactions between client and server. lets the server knwo that the client is the same client. it is for security.
			https://www.npmjs.com/package/express-session
			https://github.com/expressjs/session
			
			Below is an EXAMPLE OF THE CONSOLE  giving cookie name,path,expiration,age and protocol

			Session {
 				 cookie:
   				{ path: '/',
    			 _expires: null,
     			originalMaxAge: null,
     			httpOnly: true } }


#Phase 3 Mongoose & Advanced Routing
	
	1. change the directory sturcture of your application
		-add  "app" directory inside app create models directory and routes.js file
		
		-add config directory and inside that create database.js

		-create a views folder and leave it emptly for now.
	
	2. install mongoose
		- on the command line enter "npm install mongoose --save"

			-https://docs.mongodb.com/manual/reference/program/mongo/

			-http://mongoosejs.com/

	3. Require your database.js using its config path in your server.js and require mongoose as well.

		-create a connection to your mongodb in your server.js file . you will have instantiate your own mongodb instance and put your credentials in the database.js file. you cna connect to mongodb locally using 'mogodb://localhost:27017'
		which is mongos default port
	
	4. Create New routes 

		-in this step we comment out our original "app.get('/')" and we replace it with telling our server to look at our routes file in the models folder. 

		-in models we define 2 new routes one is the home route and the second is the user route that takes in params


#phase 4 EJS Templating & body parser
	1. npm install ejs which is a templating engine. it is where our actual web pages will reside.
		-ejs is a templating engine
		-http://www.embeddedjs.com/
	
	2. install body-parser.
		-https://github.com/expressjs/body-parser

	3. we require body-parser in server.js, we app.use body-parser. we set the  templating engine to ejs for the views in our application. this is all done in server.js

	4. we create 2 new files in the views folder. "index.ejs" & "user.ejs"
		-in index.ejs we right out some HTML and bring in bootstrap and font awesome. We save the file as .ejs(plain text format)

		--in signup.ejs we right out some HTML and bring in bootstrap and font awesome. We save the file as .ejs(plain text format) it is in this file that we use ejs to put a conditional statement in our HTML. The conditional states that if the server sends a message with a length < 0, then display that message.

	5. we navigate to the routes folder to edit our default route. we will update our res.send('Hello World') and instead we will res.render to render our ejs template -- when this is done fire up your server and navigate to your home page to make sure you are seeing your index template.

	6. create the sign up route in your routes file. We will switch params to body to handle the form requests. The 2nd sign up route is post route.

# Phase 5 -- PassportJS & ConnectFlash

    1. Install Passport -- Passport is a middleware for nodejs that uses "strategies" to communicate authenticity to the server. Each Strategy reperesents a different authentication method
        - npm install all passport  --save
        - npm install all passport-local --save (for local strategy) -- this is our local strategy


    2. ConnectFlash allows us to send messages back to the client from the server. like bad logins and wrong passwords
        - npm install connect-flash --save


    3. open server.js and require packages that we installed
    4.


	