const recuiterSchema=require("../../modals/recuiterModal/recuiterSignUpModal")

async function getAllJobs(req,res) {
    const email=req.headers["x-recuiter-email"]
    try{
          const recuiterFound=await recuiterSchema.findOne({email}) 
          console.log(recuiterFound,"rec found") 
          
          if(!recuiterFound || !recuiterFound.profile?.jobs){
            return res.status(404).json({msg:"jobs not found"})
          }

          res.status(200).json({msg:"jobs fetched successfully!!!",jobs:recuiterFound.profile.jobs})
    }
    catch(err){
        console.log(err,"error")
    }
}

module.exports=getAllJobs