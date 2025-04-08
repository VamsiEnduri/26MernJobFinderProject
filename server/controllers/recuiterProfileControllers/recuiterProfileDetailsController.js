const cloudinary=require("cloudinary").v2;
const recuiter=require("../../modals/recuiterModal/recuiterSignUpModal")

cloudinary.config({
    cloud_name:"dndfwjh0p",
    api_key:"487417153993687",
    api_secret:"jO0Z1rClgV6MWwEGRtIij_PSUso",
})


async function rec_Profile(req,res) {
    const {name,email,company,designation,experience}=req.body;
    const img=req.file

    const imgLink=await cloudinary.uploader.upload(req.file.path)
console.log(imgLink)
    const isMatched=await recuiter.findOne({email})
    if(!isMatched){
        return res.status(404).json("recuiter not  found")
    }
    console.log(isMatched,"reciter matched")

    isMatched.profile={
        company:company,
        designation:designation,
        experience:experience,
        image:imgLink.secure_url
    }

    await isMatched.save()


    console.log(img,req.body)
}

module.exports=rec_Profile;