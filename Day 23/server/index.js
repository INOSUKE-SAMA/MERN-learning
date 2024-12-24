import express from 'express'
import bcrypt from 'bcrypt'

console.clear()

const app=express()

let users=[
    {

    }
]

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.send("Welcome to Day 23 chirag")
})

app.post('/user/create',async(req,res)=>{
    try{
        const salt= await bcrypt.genSalt()
        const hashedPass= await bcrypt.hash(req.body.password,salt)
         const entry ={name:req.body.name,password:hashedPass}
        users.push(entry)
        res.json(users)

    }catch(e){
        console.log(e)
    }
})

app.post('/user/login',async(req,res)=>{
    const findUser=users.find(users=>users.name==req.body.name)    
    if(findUser==null){
        return res.send("User not found")
    }
    const isAuthorized=await bcrypt.compare(req.body.password,findUser.password)

    if(isAuthorized){
        return  res.send("welcome user")
    }
    else{
        return res.status(404).send("Authorization Denied!!")
    }
})
const port =3000;
app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})