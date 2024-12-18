import express from 'express'
import user from './routes/user.js'

console.clear()
const app=express()

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.send("Hello")
})

app.use('/users',user)


const port=4000
app.listen(port,()=>{
    console.log(`server running on port ${4000}`)
})

export {addUser}
