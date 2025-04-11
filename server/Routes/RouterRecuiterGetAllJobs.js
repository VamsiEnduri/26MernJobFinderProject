const express=require("express");
const upload=require("../middlewares/multer")
const rec_Getting_All_jobs=require("../controllers/RecuiterGetAllJobs/RecuiterGetAllJobs")
const recuiterAllJobGet=express.Router();


recuiterAllJobGet.get("/getAllJobs",rec_Getting_All_jobs)


module.exports=recuiterAllJobGet