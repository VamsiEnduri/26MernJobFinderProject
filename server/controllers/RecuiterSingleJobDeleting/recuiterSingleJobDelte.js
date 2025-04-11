const recuiterSchema=require("../../modals/recuiterModal/recuiterSignUpModal")

async function getAllJobs(req,res) {
    const email=req.headers["x-recuiter-email"]
    const jobId=req.params.id
    try{
          
        const UpdatedRecuiter=await recuiterSchema.updateOne({email},{
            $pull:{
                "profile.jobs":{_id:jobId}
            }
        })

        const recuiterFound=await recuiterSchema.findOne({email})

          return res.status(200).json({msg:"deleted single job successfullyy!!",jobs:recuiterFound?.profile?.jobs})
    }
    catch(err){
        console.log(err,"error")
    }
}

module.exports=getAllJobs