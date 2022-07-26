var express = require('express');
var router = express.Router();
var multer  = require('multer');
 
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now()+file.originalname)
    }
  })
 
  const fileFilter=(req, file, cb)=>{
   if(file.mimetype ==='image/jpeg' || file.mimetype ==='image/jpg' || file.mimetype ==='image/png'){
       cb(null,true);
   }else{
       cb(null, false);
   }
 
  }
 
var upload = multer({ 
    storage:storage,
    limits:{
        fileSize: 1024 * 1024 * 5
    },
    fileFilter:fileFilter
 });
 
router.post("/",upload.single('image'),function(req,res,next){
   
const filename=req.file.filename;
 res.json({
            message:"Image Uploaded Successfully",
            fielpath:"http://localhost:4000/public/uploads/"+filename
        });
    });
 
module.exports=router;