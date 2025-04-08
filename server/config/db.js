const mongoose=require("mongoose");

async function dbConnection() {
    try{
 await mongoose.connect(process.env.mongodb_connection_str,{
    dbName:"jobFinder"
 })
 console.log("db connectd syccessfully!!!!")
    }
    catch(err){
        console.log(err)
    }
}

module.exports=dbConnection;