import mongoose from "mongoose";

const studentSchema=mongoose.Schema({
    iD:{type:Number,required:true,unique:true,min:1,max:3000},
    name:{type:String,required:true,unique:false},
    busID:{type:Number,required:true,unique:false},
    password:{type:String,required:true,unique:false}
})

const studentModel=mongoose.model('student',studentSchema)

export default studentModel

