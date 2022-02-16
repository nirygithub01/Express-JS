const express = require("express");
const app = express();
const path = require("path");
const port = 8000;

//built in middleware 

//console.log(path.join(__dirname, '../public'));
const staticPath = path.join(__dirname, '../public');

app.use(express.static(staticPath));


app.get("/", (req, res) => {
    res.send("Hello from the express server");
});

app.listen(port, () => {
    console.log(`listening to the port ${port}`);

});
