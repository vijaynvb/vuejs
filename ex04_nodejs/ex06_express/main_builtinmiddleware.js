import express, { urlencoded } from "express";

const app = express();

app.use(express.json());

app.use(express.urlencoded());

// routes 
app.post("/todos",(req, res) =>{
    // req.body
    console.log(req.query);
    console.log(req.body);
    res.send("resonse from server");
});

// listening 
app.listen(3000, ()=>{console.log("Server is running;")});