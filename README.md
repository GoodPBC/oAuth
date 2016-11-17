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

#Phase 2 
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


#Phase 3
	
	1. change the directory sturcture of your application
		-add  "app" directory inside app create models directory and routes.js file
		
		-add confid directory and inside that create database.js

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

		-in models we define 2 new routes on is the home route and the second is the user route that takes in params

	
	