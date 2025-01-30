const multer=require('multer')
const path=require('path')
const storageconfig= multer.diskStorage({
    destination:(req,file,next)=>{
        next(null,'uploads/')
    },
    filename:(req,file,next)=>{
        console.log(file)
        next(null,`${Date.now()}${path.extname(file.originalname)}`)
    }
});
const uploader= multer({storage:storageconfig})
module.exports=uploader