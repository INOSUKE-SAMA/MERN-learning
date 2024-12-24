import express from 'express'
import connectDB from './db/connectdb.js'
import studentModel from './model/stdmodel.js'
import 'dotenv/config' 
import cors from 'cors'
import bcrypt from 'bcrypt'

console.clear()

const app=express()
const PORT=process.env.PORT||4000
const DATABASE_URL=process.env.DATABASE_URL||"mongodb://127.0.0.1:27017/student"

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))
connectDB(DATABASE_URL)

app.get('/',(req,res)=>{
    res.send("Student info")
})

app.post('/student/sign-up',async(req,res)=>{

    // extract info from req
    const iD=req.body.iD;
    const name=req.body.name;
    const busID=req.body.busID;
    const password=req.body.password;

    //encrypt
    const salt=await bcrypt.genSalt();
    const hashedPass= await bcrypt.hash(password,salt);

    //insert and store
    const result= await studentModel.insertMany({
        iD:iD,
        name:name,
        busID:busID,
        password:hashedPass
    })
    
  
    res.status(201).send("Student created successfully")


})

app.post('/student/sign-in',async (req,res)=>{
    try {
        // get req parameter from user
        const { iD, password } = req.body;

        // extract data from database
        const student = await studentModel.findOne({ iD: parseInt(iD) });

        // check if student exists
        if (!student) {
            return res.status(400).send("Student not found");
        }

        // compare password
        const passwordValidate = await bcrypt.compare(password, student.password);

        if (passwordValidate) {
            // res.status(200).write("Login successful");
            res.redirect('/student/dashboard')
        } else {
            res.status(401).send("Login not authorized");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
})

app.get('/student/dashboard',(req,res)=>{ //authenticateToken
    res.send("welcome to student dasboard")

})


app.listen(PORT,()=>{
    console.log(`Server is up at ${PORT}`)
})

//include jwttoken and cookie
//make this frontend