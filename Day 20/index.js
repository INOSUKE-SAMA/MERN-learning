import express from 'express'
import cors from 'cors'

const app = express();

app.use(express());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.send("Welcocme")
})

const port =4000;
app.listen(port,()=>{
    console.log("Server is running on port 4000")
})