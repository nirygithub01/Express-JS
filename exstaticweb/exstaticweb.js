const express = require("express");
const app = express();
const port = 3000;
const path = require("path");


//relative absolute
//console.log(_dirname);



const staticPath = path.join(__dirname, "../exstaticweb");


//built in middleware
app.use( express.static( staticPath));

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