const projects = require('../Models/projectSchema')


exports.addProject=async(req,res)=>{
    console.log("inside add project controller");
    res.status(200).send("Add Request Received");
}