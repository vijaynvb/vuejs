const http = require("http");
// create a server 
// listening 
const server = http.createServer((req,res)=>{
    console.log(req.url);
    if(req.method === "GET" && req.url === "/"){
        res.setHeader("Content-Type","text/plain");
        res.statusCode= 200;
        res.write("Hello");
        res.end();
    }else{
        res.setHeader("Content-Type","text/plain");
        res.statusCode= 404;
        res.write("Method not supported");
        res.end();
    }
   
})
server.listen(3000,"localhost",()=>{ console.log("server is running")});