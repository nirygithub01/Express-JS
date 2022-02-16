/** 
const express = require("express");
const app = express();


app.get("/", (req, res) => {

res.send("hello bro this is calling  from the express");

});  
app.listen(8000, () => {
    console.log("listening the port number");
});
*/

/** 
const express = require("express");
const app = express();


app.get("/", (req, res) => {

res.send("hello bro this is calling  from the express");

});  

app.get("/about", (req, res) => {

    res.send("hello bro this is calling  from the express to the about page");
    
    }); 

app.listen(8000, () => {
    console.log("listening the port number");
});

*/

//app.get (represent method) (route  can represents ('/') or www.google.com, callback represent (req, res));
//The callback function has 2 parameters, request(req) and response(res).
//The request object (req) represents the HTTP request and 
// has properties for the request query string, parameters, body,
//HTTP headers, etc.

//Similarly, the response object represents the HTTP response 
//that the Express app sends when it receives an HTTP request.



