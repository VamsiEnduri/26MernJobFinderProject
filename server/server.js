const express=require("express");
const app=express();
const dbConnection=require("./config/db")
const authRouter=require("./Routes/authRoutes")
const recuiterProfileRoute=require("./Routes/RecuiterProfile")
const recuiterPostJobRoute=require("./Routes/recuiterPostJobRoute")
require("dotenv").config()
const cors=require("cors")

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
dbConnection()

app.use("/api/auth",authRouter)
app.use("/api/recuiters",recuiterProfileRoute)
app.use("/api/recuitersJobs",recuiterPostJobRoute)

const PORT=process.env.PORT;

app.listen(5000,()=>{
    console.log("server running on port 5000")
})