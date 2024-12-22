import express from 'express'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv/config'

console.clear()

const app=express()
const port=4000

const user=[
    {
        name:"Chirag",
        msg:"I like basketball"
    },
    {
        name:"Goku",
        msg:"I like to eat."
    }
]


app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.send("Welcome to Day 24 Chirag")
})

app.get('/login',(req,res)=>{
    const user = {name:"Goku"}
    const access=jwt.sign(user,process.env.ACCESS_TOKEN)
    res.send(access)
})

app.get('/view',authenticateUser,(req,res)=>{
    
    const authorizedUser=user.filter(user=>req.user.name==user.name)
    res.json(authorizedUser)
})

//middleware
function authenticateUser(req,res,next){
    const authHeader=req.headers['authorization']
    const token = authHeader.split("Bearer ")[1];
    jwt.verify(token,process.env.ACCESS_TOKEN,(err,user)=>{
        if(err){
            res.status(403).send("Access Denied!");
        }
        else{
            req.user=user;
        }
        next();
    })
}

app.listen(port,()=>{
    console.log(`Server is running at ${port}`)
})

