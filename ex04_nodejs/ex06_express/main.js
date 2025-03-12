import express from "express";

// create a server application 
const app = express();
// built in middleware or custom 
app.use((req,res, next) => {
    if(req.method === "GET"){
        next();
    }
    else{
        res.send("Only Get Method allowed");
    }
});

app.use((req,res, next) => {
    console.log("request pipeline 1");
    next();
    console.log("response pipeline 1")
});
app.use((req,res, next) => {
    console.log("\\t request pipeline 2");
    next();
    console.log("\\t response pipeline 2")
});

// routes 
app.get("/",(req, res) =>{
    console.log("Endpoint execution")
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