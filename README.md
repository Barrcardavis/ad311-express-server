# ad311-express-server
Express server creation assignment
Create a simple web server using Express in NodeJS, which will respond to different routes with text responses.

Requirements:
Setup and Initialization:

Initialize a new NodeJS project.
Install Express using npm.
Import Express into your main application file.
Server Configuration:

Define your main application as an Express instance.
Set the server to listen on either the environment's provided port or default to port 3000.
Routing:

Implement a route handler for the root path (/). It should return a plain text response: "Hello World".
Implement a route handler for the /about path. It should return a plain text response: "About page".
Ensure that your server returns appropriate responses when tested with these endpoints.
Conditional Routing:

Implement a route handler for the path /foo.
The handler should randomly choose between two responses:
"sometimes this" or
passing control to the next applicable route using the next() method.
Implement a second route handler for /foo that returns the response: "and sometimes that".
Test your routes to ensure they behave as expected under different conditions.
Regular Expression Routes:

Create a route that uses a regular expression to match multiple URL patterns.
For example, implement a route /user(name)? which should match both /user and /username.
The route should send back a simple text response.
Test your server to ensure it correctly responds to the different URL variations covered by your regular expression.
Dynamic Route Handling:

Implement a route with a parameter in its path, such as /user/:username.
Use this parameter in your response to personalize the message. For example, if the URL is /user/john, the response should be "Hello john".
Test your server to ensure it correctly processes different usernames in the URL and personalizes the response accordingly.
Query String Handling:

Implement a GET route (e.g., /get) that can handle query strings.
In the route handler, use req.query to access the query string parameters and log them to the console.
Test this functionality by sending various query strings to this route and verifying the console output.
Error Handling:

Define a 404 error handler to manage requests to undefined routes. It should return a plain text response: "404 - Not Found".
Server Activation:

Write the command to start the web server and log a message once the server starts successfully.
 
