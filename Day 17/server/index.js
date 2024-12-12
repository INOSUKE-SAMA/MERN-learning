import express from 'express'
import cors from 'cors'

const App=express()

App.use(cors())
App.use(express.json())
App.use(express.urlencoded({extended:true}))

App.use(function(res,req,next){
    console.log('This is middleware')
    next()
})

App.get('/',(req,res)=>{
    res.send("Welcome")
})

App.get("/profile/:username/:id",(req,res,next)=>{
    res.writeHead(200,{"content-type":"text/html"})
    res.write(`<h1>ID:${req.params.id}</h1>`)

    if(req.params.username=="chirag"){
        res.write("Welcome Chirag shahi")
    }

    else if(req.params.username=="admin"){
        res.write("You have admin access")
    }

    else{
        res.write("Your access is denied")
    }
    res.end()
    next()

})

App.listen(5000)