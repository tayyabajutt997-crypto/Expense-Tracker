const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Custom Logger Middleware
function logger(req, res, next) {

    console.log("--------------------------");
    console.log("Method :", req.method);
    console.log("URL :", req.url);
    console.log("Time :", new Date().toLocaleString());
    console.log("--------------------------");

    next();

}

// Use Logger
app.use(logger);

// Dummy Database
let students = [
    {
        id:1,
        name:"Ali",
        course:"Web Development"
    },
    {
        id:2,
        name:"Sara",
        course:"Node.js"
    }
];

// Home
app.get("/",(req,res)=>{

    res.send("Logger Middleware Project Running");

});

// GET Students
app.get("/students",(req,res)=>{

    res.json(students);

});

// POST Student
app.post("/students",(req,res)=>{

    const student={

        id:students.length+1,
        name:req.body.name,
        course:req.body.course

    };

    students.push(student);

    res.json({
        message:"Student Added Successfully",
        student
    });

});

app.listen(PORT,()=>{

console.log(`Server Running on http://localhost:${PORT}`);

});