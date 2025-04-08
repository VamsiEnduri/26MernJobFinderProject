const recuiterModal=require("../../modals/recuiterModal/recuiterSignUpModal")
const bcrypt=require("bcrypt");
async function signUpController(req,res){
    const {name,email,password,role}=req.body
    try{
    const existedRecuiter=  await recuiterModal.findOne({email})
    if(existedRecuiter){
     return res.status(400).json("recuiter alreday exists !!!!")   
    }

    const hashPswd=await bcrypt.hash(password,10);
    const newRecuiter=new recuiterModal({
        name,
        email,
        password:hashPswd,
        role
    })

    await newRecuiter.save()

    return res.status(201).json({success:true,msg:"recuiter successfully created !!!!"})

    }catch(err){
        console.log(err)
    }
}


async function loginController(req,res){
    const {email,password}=req.body
    try{
    const existedRecuiter=  await recuiterModal.findOne({email})
    if(!existedRecuiter){
     return res.status(404).json("no recuiter found in  db !!!!")   
    }

    const isMatched=await bcrypt.compare(password,existedRecuiter.password)
    console.log(isMatched,"matched r not")

    return res.status(200).json({msg:"loggedin successfully",isMatched:true})

    }catch(err){
        console.log(err)
    }
}



module.exports={signUpController,loginController};