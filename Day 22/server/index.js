import express from 'express';
import productModel from './model/product.js';
import connectDB from './db/connectdb.js';

console.clear();

const app=express();
const PORT = process.env.PORT||3000
const DATABASE_URL=process.env.DATABASE_URL||"mongodb://127.0.0.1:27017/product"



app.use(express.json())
app.use(express.urlencoded({extended:true}))
connectDB(DATABASE_URL)

app.get('/',(req,res)=>{
    res.send("Product info")
})


app.get('/createProduct',async(req,res)=>{
    try{
        const result=await productModel.insertMany([{
            ID:2,
            Name:"Figurine",
            Price:6000
        },
        {
            ID:3,
            Name:"Basketball",
            Price:1200
        },
        {
            ID:4,
            Name:"Woolen jacket",
            Price:4000
        },
        {
            ID:5,
            Name:"DSLR canon camera",
            Price:50000
        },
        {
            ID:6,
            Name:"Custom made sofa",
            Price:90000
        }]
    )
        res.send(result)
    }catch(error){
        console.log(error)
        res.send(error)
    }
})
app.get('/viewProduct',async(req,res)=>{
    try{
        const result=await productModel.find()
        res.send(result)
    }catch(error){
        console.log(error)
        res.send(error)
    }
})
app.get('/updateProduct',async(req,res)=>{
    try{
        const result=await productModel.updateMany({
            ID:1,
            Name:"Jordans 4",
            Price:6000
    }) 
    res.send(result)
}catch(error){
        console.log(error)
        res.send(error)
    }
})
app.get('/deleteProduct',async(req,res)=>{
    try{
        const result=await productModel.deleteMany({
            
        })
        res.send(result)
    }catch(error){
        console.log(error)
        res.send(error)
    }
})
const port=3000
app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})
