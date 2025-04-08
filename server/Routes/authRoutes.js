const express=require("express");
const {signUpController,loginController} = require("../controllers/authControllers/authControllers");


const authRouter=express.Router();


authRouter.post("/signup",signUpController)
authRouter.post("/login",loginController)

module.exports=authRouter