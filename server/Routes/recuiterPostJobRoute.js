const express=require("express");
const rec_PostJob=require("../controllers/RecuiterPostJobControllers/RecuiterPostJobController")
const recuiterPostJobRoute=express.Router();


recuiterPostJobRoute.post("/post_job",rec_PostJob)


module.exports=recuiterPostJobRoute