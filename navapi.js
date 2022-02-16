// www.google.com - welcome to my page
// /about - welcome to my about page
// /contact - welcome to my contact page
// /temp - welcome to my temp page


/**

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("welcome to my home page")
});

app.get("/about", (req, res) => {
    res.send("welcome to my about page")
});

app.get("/contact", (req, res) => {
    res.send("welcome to my contact page bro")
});

app.get("/temp", (req, res) => {
    res.send("welcome to my temperature  page bro")
});

app.listen(port, () => {
    console.log(`listening to the port number ${port} `) 
});
*/

/** 

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.write("<h1>welcome to my home page</h1>")
    res.write("<h2>welcome to my h2 home  page</h2>")
    res.write("<h3>welcome to my h3 home page</h3>")
    res.send();
});

app.get("/about", (req, res) => {
    res.send("welcome to my about page")
});

app.get("/contact", (req, res) => {
    res.send("welcome to my contact page bro")
});

app.get("/temp", (req, res) => {
    res.send([{ 
        id : 1,
        name: "nir"

    },
    { 
        id : 2,
        name: "ranjan"

    }  
]);
});

app.listen(port, () => {
    console.log(`listening to the port number ${port} `) 
});
*/


/** 
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.write("<h1>welcome to my home page</h1>")
    res.write("<h2>welcome to my h2 home  page</h2>")
    res.write("<h3>welcome to my h3 home page</h3>")
    res.send();
});

app.get("/about", (req, res) => {
    res.send("welcome to my about page")
});

app.get("/contact", (req, res) => {
    res.send("welcome to my contact page bro")
});

app.get("/temp", (req, res) => {
    res.json([{ 
        id : 1,
        name: "nir"

    },
    { 
        id : 2,
        name: "ranjan"

    } ,
    { 
        id : 3,
        name: "yogi"

    },
    { 
        id : 4,
        name: "sujeet"

    } 

]);
});

app.listen(port, () => {
    console.log(`listening to the port number ${port} `) 
});
*/



