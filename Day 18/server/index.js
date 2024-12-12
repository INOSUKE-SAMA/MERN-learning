import express from 'express'
import {verifyLogin,verifyPassword,verifyUser} from './user.js'

console.clear()
const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))


let user="Chirag"
let pass="2345"

app.get('/',[verifyUser,verifyPassword,verifyLogin])

app.get('/user',(req,res)=>{
    res.send("View users")
})

app.post('/user',(req,res)=>{
    res.send("Create users")
})
app.put('/user',(req,res)=>{
    res.send("Update users")
})
app.delete('/user',(req,res)=>{
    res.send("Deleted users")
})

app.listen(4000,()=>{
    console.log("server is running on port 4000")
})

export {user,pass}

