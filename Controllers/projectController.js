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


exports.getAllProjects =async (req,res)=>{
 console.log("Inside getAllProjects");
    try{
        const getAllProjects =await projects.find()
        res.status(200).json(getAllProjects)
    }
   catch(error){
         res.status(500).json("Server error" +error)
    }
    
}

exports.getuserProjects =async (req,res)=>{
    
    console.log("Inside getUserProjects");
    const userId =req.payload
       try{
           const getuserProjects =await projects.find({userId})
           res.status(200).json(getuserProjects)
       }
      catch(error){
            res.status(500).json("Server error" +error)
       }

}

exports.getHomeProjects =async (req,res)=>{
    
    console.log("Inside getHomeProjects");
    
       try{
           const getHomeProjects =await projects.find().limit(3)
           res.status(200).json(getHomeProjects)
       }
      catch(error){
            res.status(500).json("Server error" +error)
       }

}


//edit project
exports.editProject =async(req,res)=>{
    console.log("inside editProject");
    const{title,language,website,github,projectImg,overview}=req.body
 console.log(title,language,website,github,projectImg,overview);   
    const uploadImg = req.file? req.file.filename:projectImg
    const userId = req.payload
    const {projectId} =req.params
  
  
    try{
        console.log("Inside try");
        
   const updateProject = await projects.findByIdAndUpdate({_id:projectId},{title:title,language:language,website:website,github:github,userId:userId,projectImg:uploadImg})
   console.log(updateProject);
   
   await updateProject.save()
   res.status(200).json(updateProject)

    }

    catch(error){
    res.status(401).json(error)

    }

}

//DELETE

exports.deleteProject =async(req,res)=>{
    console.log("inside deleteProject");
    const {projectId} =req.params
  
    try{  
    await projects.findByIdAndDelete({_id:projectId})
   res.status(200).json("Project deleted Successfully")
    }

    catch(error){
    res.status(401).json(error)

    }

}