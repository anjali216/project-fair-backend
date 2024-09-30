
//1 import express
const express= require('express')
//4 import userController
const userController = require('../Controllers/userController')

//2 Create Router from express
const router = express.Router()

//3 Create route for each requests
//1 Register route : http://localhost:3000/api/register
router.post('/api/register',userController.register)


//2 Login route : http://localhost:3000/api/login
router.post('/api/login',userController.login)


module.exports =router