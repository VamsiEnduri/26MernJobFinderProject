const express=require("express");
const rec_SingleJob_Deleting=require("../controllers/RecuiterSingleJobDeleting/recuiterSingleJobDelte")
const recuiterSingleJobDelte=express.Router();


recuiterSingleJobDelte.delete("/deleting/:id",rec_SingleJob_Deleting)


module.exports=recuiterSingleJobDelte