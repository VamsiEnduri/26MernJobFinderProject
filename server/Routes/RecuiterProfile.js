const express=require("express");
const upload=require("../middlewares/multer")
const rec_Profile=require("../controllers/recuiterProfileControllers/recuiterProfileDetailsController")
const recuiterProfileRoute=express.Router();


recuiterProfileRoute.post("/profile",upload.single("profileImage"),rec_Profile)


module.exports=recuiterProfileRoute