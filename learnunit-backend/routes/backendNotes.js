// what is middleware ?

/* 
for every request at some route there is a main request or route handler which handles the request -response;
middlewares are also functions that can be invokes before or after the main route handler , such as for authenticating request , validationn and some other task, it sits in middle of the request-response cycle and has access to request and response object and also has accesss to next() midlleware or handler;


// by default next function checks for the next handler ,if nothing is there at last it reaches custom error middleware;

eg router.route("/myprofile").get(isAuthenticatedMdlleware , getMyprofileHandler);

its benefits
Code organization,By defining middleware functions separately, you can easily apply them to multiple routes without duplicating code.,Request preprocessing,Response postprocessing,Error handling:






*/

// jWT token and its use in a cookie response

/*  

JWT (JSON Web Token) is a standard for securely transmitting information between parties as a JSON object. In the given code snippet, a JWT token is being used for authentication and session management purposes.


Stateless authentication: JWT tokens allow for stateless authentication, meaning the server doesn't need to store session information on the server-side. Instead, the necessary user information is encoded within the token itself.

Security: JWT tokens can be digitally signed, ensuring that the token's contents haven't been tampered with during transmission. This helps prevent unauthorized access and maintains data integrity.

In the code snippet, the sendToken function is responsible for sending the JWT token back to the client as a cookie. Using a cookie to store the token offers the following advantages:

Automatic inclusion in subsequent requests: When the client receives the token as a cookie, it will be automatically included in all subsequent requests to the server. This eliminates the need for the client to manually attach the token with each request.

Cross-site request support: By setting the sameSite attribute to "none" in the cookie options, it allows the cookie to be sent with cross-site requests, such as requests from a different domain. This is particularly useful in scenarios where the frontend and backend are hosted on different domains or subdomains.

Increased security: By setting the httpOnly attribute to true, the cookie is inaccessible to client-side JavaScript. This helps protect the token from cross-site scripting (XSS) attacks since JavaScript code cannot access or modify the cookie directly.

Overall, using a JWT token and storing it as a cookie provides a secure and convenient method for authenticating requests and managing sessions in web applications.



cookie for session management ,it stores state , inside cookie ,JWT token is stored , JWT token for signature of the user , 
JWT.sign(token,seceretkey)
app.use(cookieParser) middleware which parses cookies object in a req.cookies.
const {token} = req.cookies;
jwt.verify(token,secretkey);


*/


/*

// listen for connection and
// returns an http.server by default

// http.createServer(app).listen(80);

// https.createServer({ ... }, app).listen(443);

app.listen(process.env.PORT, () => {
  console.log(
    `The server is working and is running on port : ${process.env.PORT}`
  );
});

*/


/*   

creating lets talk button , card with cross styling and rating on top, landing page slider , why choose us , about us full page content , adding teachers login , showing teachers card,addding scroll javascript animation 







*/



