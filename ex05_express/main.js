import express from "express";

// create a server application 
const app = express();

// routes 
app.get("/",(req, res) =>{
    res.send("Hello");
});

app.get("/home",(req, res) =>{
    res.send("Home");
});

app.get("/about",(req, res) =>{
    res.send("about");
});
// listening 
app.listen(3000, ()=>{console.log("Server is running;")});