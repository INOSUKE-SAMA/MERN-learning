import http from 'http'

http.createServer((req,res)=>{
    res.writeHead(200,{"Content-type":"text/html"})
    if(req.url=="/"){
        res.write("You are at Home page.")
    }
    else if(req.url=="/chirag"){
        res.write("Hello Chirag")
    }
    else{
        res.write("Error")
    }
    res.end()
}).listen(3000,()=>{
    console.log("Server is running on port 3000");
})