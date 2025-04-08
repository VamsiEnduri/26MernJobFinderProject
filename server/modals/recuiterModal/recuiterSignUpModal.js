const mongoose=require("mongoose");

const jobsSchema=new mongoose.Schema({
    title: String,
    description: String,
    category: String,
    salary: String,
    location: String,
    createdAt: {
      type: Date,
      default: Date.now(),
    },
})
const profileDetails=new mongoose.Schema({
    name:String,
    email:{type:String,unique:true},
   company:String,
   designation:String,
   experience :Number,
   image:String,
   jobs:[jobsSchema]
})

const recuiter=new mongoose.Schema({
    name:String,
    email:{type:String,unique:true},
    password:String,
    role:{type:String,default :"recuiter"},
    profile:profileDetails
})

module.exports=mongoose.model("recuiter",recuiter)