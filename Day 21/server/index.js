import express from 'express'
import connectDB from './db/dBconnect.js';
import movieModel from './models/movieModel.js';
import errorHandler from './handlers/error.js';

console.clear()

const app=express();
const port=process.env.PORT || 4000
const DATABASE_URL=process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/movies"

app.use(express.json())
app.use(express.urlencoded({extended:true}))
connectDB(DATABASE_URL)

app.get('/',(req,res)=>{
    res.send("Hello Chirag")
})

app.get('/createMovie',async(req,res)=>{
    try{
        const result = await movieModel.insertMany({
            ID:14,
            Name: "Kung fu Panda 3",
            Rating: 5.3 
        })
        res.send(result)
    }catch(error){
        console.log(error)
        res.send(error)


}})

app.get('/viewMovies',async(req,res)=>{
    try{
        const result=await movieModel.find()
        res.send(result)
    }catch(error){
        console.log(error)
        res.send(error)
    }

})

app.get('/updateMovies',async(req,res)=>{
    try{
        const result=await movieModel.updateMany({ID:1},{Name:"Bleach"})
        res.send(result)
    }catch(error){
        console.log(error)
        res.send(error)
    }

})

app.get('/deleteMovies',async(req,res)=>{
    try{
        const result=await movieModel.deleteMany({ID:1},{Name:"Bleach"})
        res.send(result)
    }catch(error){
        console.log(error)
        res.send(error)
    }

})


app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})