const multer = require('multer')

const storage = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,'./uploads')
    },
    filename:(req,file,callback)=>{
        const filename =`image${Date.now()}.${file.originalname}`
        callback(null,filename)
    }
})

const fileFilter = (req,file,callback)=>{
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg'||file.mimetype==='image/png'){
        callback(null,true)
    }
    else{
        return callback(newError("Invalid file format"))
    }
}

const multerConfig = multer({
    storage,
    fileFilter,
})

module.exports  = multerConfig