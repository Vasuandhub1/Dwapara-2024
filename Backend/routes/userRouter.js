const express=require("express")
const { register, login, logout, loggedInUser, getUserSchedule, SendingMail } = require("../controllers/usercontroller.js")
const {Authentication} = require("../controllers/AuthController.js")
const userModel = require("../models/userModel.js")
const router=express.Router()

// router.get("/",sayhello)



//  Register router 
router.post("/register"  ,register)
router.get("/emailVerify"  ,SendingMail)
router.post("/login" , login)
router.get("/logout" , logout)
router.get("/getuser" , Authentication , loggedInUser)
router.get("/getUserSchedule" , Authentication , getUserSchedule)

module.exports=router