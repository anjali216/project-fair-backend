// 1 load .env file
require('dotenv').config()

//2 import express
const express = require ('express')

//3 import cors
const cors = require('cors')

//10 import router
const router = require('./Routes/router')

//9import DB
require('./DB/connection')

//4 create an appliaction using express
const pfserver= express()

//5 use
pfserver.use(cors())
pfserver.use(express.json())
pfserver.use(router)

 pfserver.use ('/uploads',express.static('./uploads'))
 
//6 Define port number
const PORT = 3000 || process.env.PORT


//Define listen
pfserver.listen(PORT,(req,res)=>{
    console.log(("pfServer  started at port" + PORT));
})

//8 Define client request 
pfserver.get('/',(req,res)=>{
    res.status(200).send(`<h1>Project Fair Server started... Waiting for the client request...</h1>`)
   
})