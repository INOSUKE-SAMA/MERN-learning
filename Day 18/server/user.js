import express from 'express'
import {pass,user} from './index.js'

const verifyUser=(req,res,next)=>{
    if(user=="Chirag"){
        console.log("Name Verified");
        next()
    }
    else{
        res.send("Access denied")
    }    
}

const verifyPassword=(req,res,next)=>{
    if(pass=="2345"){
        console.log("Password verified");
        next()
    }
    else{
        res.send("Access denied")
    }    
}


const verifyLogin=(req,res)=>{
    res.send(`<h1>Welcome ${user}</h1>`)
}

export {verifyLogin,verifyPassword,verifyUser}