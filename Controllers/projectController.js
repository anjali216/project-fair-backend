const projects = require('../Models/projectSchema')


exports.addProject=async(req,res)=>{
    console.log("inside add project controller");
    const{title,language,website,github,overview}=req.body
    const projectImg = req.file.filename
    const userId =req.payload
    try{
        const existingProject = await projects.findOne({github})
        if(existingProject){
            res.status(406).json("Project already exists")
        }else{
            const newProject = new projects({
                title,language,website,github,overview,projectImg,userId
            })
            await newProject.save()
            res.status(200).json(newProject)
        }
    }
    catch(error){
        res.status(500).json("Server error"+error)
    }
}