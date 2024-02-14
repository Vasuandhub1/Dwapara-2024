const express=require("express")
const { register, login } = require("../controllers/usercontroller")
const userModel = require("../models/userModel.js")
const router=express.Router()
// router.get("/",sayhello)



//  Register router 
router.post("/register" , register)
router.post("/login" , login)

module.exports=router