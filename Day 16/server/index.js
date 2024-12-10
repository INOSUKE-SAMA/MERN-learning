import express from 'express'
import cors from 'cors'

const app=express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

let admin="inosuke";

app.get('/',(req,res)=>{
    res.send("Welcome home")
})

app.post('/chirag',(req,res)=>{
    const user=req.body.user;
    const password=req.body.password;

    res.writeHead(200,{"content-type":"text/html"});
    res.write(`<h1 style="color:red">Welcome: ${user}<h1>`);
    res.write(`<h2>Your password is : ${password}</h2>`);
    
    res.send();
  
})

app.get("/getAdmin",(req,res)=>{
    res.send(admin)
})

app.listen(5000)