const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

let visitors = 0;

// Logger Middleware
function logger(req, res, next) {

    console.log("================================");
    console.log("Method :", req.method);
    console.log("URL :", req.url);
    console.log("Time :", new Date().toLocaleString());
    console.log("================================");

    next();

}

app.use(logger);

// Home Page
app.get("/", (req, res) => {

    visitors++;

    res.send(`
        <h1>🚀 Visitor Counter API</h1>
        <h2>Total Visitors : ${visitors}</h2>
        <a href="/about">About</a><br><br>
        <a href="/contact">Contact</a>
    `);

});

// About Page
app.get("/about", (req, res) => {

    visitors++;

    res.send(`
        <h1>About Page</h1>
        <h2>Total Visitors : ${visitors}</h2>
    `);

});

// Contact Page
app.get("/contact", (req, res) => {

    visitors++;

    res.send(`
        <h1>Contact Page</h1>
        <h2>Total Visitors : ${visitors}</h2>
    `);

});

app.listen(PORT, () => {

    console.log(`Server Running at http://localhost:${PORT}`);

});