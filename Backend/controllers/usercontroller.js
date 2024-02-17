const userModel = require ("../models/userModel.js")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const schedule = require("../models/schedule.js")
const nodemail = require("nodemailer")

let setemail=""
const register = async (req , res) =>{
    
    try {
       
  

        const {username , email , password , cnfPassword} = req.body
        setemail=email

        if (!username || !email || !password){
             return res.status(400).json({
                success : false,
                message : "please fill all the fields"
             })
        }

       //   user already exist :-
       const userExist = await userModel.findOne({email : email})

       if (userExist){
           return res.status(400).json({
               success : false,
               message : "user already exist"
            })
       }

    //     Hash the PASSWORD 
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password , salt)
   
    console.log("HashPassword" , hashPassword)

    const createdUser = await userModel.create({
         username , 
         email ,
         password : hashPassword
    })

    if (!createdUser){
        return res.status(400).json({
            success : false,
            message : "user could not be created"
         })
    }

    const token = jwt.sign({userid : createdUser._id} , process.env.JWT_SECRET , {expiresIn : '15d'})

    res.cookie('jwttoken' , token )

    res.status(201).json ({
         success : true,
         message : "User Created Successfully ",
         createdUser,
    
    })

    }
    catch (error){
        
       return res.status(500).json({
           success : false,
           message : error.message
        })
    }

}
const login= async(req,res)=>{
    try{
        const {email,password}=req.body

        // checking for the null values
        if(!email || !password){
           return  res.status(400).json({
                success:false,
                message:"plz fill all the details"
            })}
            // check for email exist 
        const userexist=await userModel.findOne({email})

        if(!userexist){
           return res.status(400).json({
                success:false,
                message:"Please register first"
            })
        }
        // check for the email and passwrd
        const ismatch=await bcrypt.compare(password,userexist.password)
        if(!ismatch){
           return  res.status(402).json({
                success:false,
                message:"invalid credentials"
            }) 
        }
        const token=jwt.sign({userid:userexist._id},process.env.JWT_SECRET , {expiresIn : '15d'})
        res.cookie("jwttoken",token)
         return res.status(200).json({
            success:true,
            message:"user logged in sucessfully",
            userexist
        })
}
    catch(error){
      return   res.status(500).json({
            success:false,
            message:error.message,
        })
    }
}

const logout = async(req , res) =>{
    
    try {

        res.cookie ("jwttoken" , "")
        res.status(200).json({
             success : false,
             IsLoggedIn : false,
             message : "User Logged out sucessfully"
        })
         
    }
    catch (error){
        res.status(500).json({
            success : false,
            message : error.message
       })
    }

}


//  GetLoggedInUser :-
const loggedInUser = async (req , res) =>{
    
      try {
        console.log(req.user.schedule.length)
        const loggedInUser = req.user
         return res.status(200).json({
             success : true,
             schedule : loggedInUser
         })
      }
      catch (error) {
         return res.status(500).json({
             success : false,
             message : error.message
         })
      }
   

}

//  Get All the schedules for loggedIn user :-
const getUserSchedule = async (req , res) =>{
    
     try {
        
        const user = await userModel.findById(req.user._id).populate("schedule");

     
        return res.status(200).json({
             success : true,
             message : "All Schedules",
             schedules : user.schedule
        })

         

         

     }
     catch (error){
         return res.status(500).json({
             success : false,
             message : error.message
         })
     }

}


  //  Nodemailer implementation :-

   
function SendingMail (req , res){
 
    
  const transporter = nodemail.createTransport({
    service : "gmail",
    auth : {
      user : "vasusingh9691@gmail.com",
      pass : "mpkkkevxiavrjykw"
    }
 })

 const otp = Math.floor(Math.random() * 10000)
  const mailOptions = {
    from : "vasusingh9691@gmail.com",
    to : setemail ,
    html : `<h1>Your verification code is <h1 className= "text-blue-500">${otp}</h1></h1>`,
    subject : "Authentication Verification"
 }


 //  Send Email :-
 transporter.sendMail(mailOptions , function (error , info) {
   
     if (error) {
       return res.status(400).json({
         success : false,
         message : error.message
       })
     }
     else {
        return res.status(200).json({
            success:true,
            message:"Email Verification Send ",
            otp
        })
    }

    

 })

    
}


module.exports={register , login , logout , loggedInUser , getUserSchedule , SendingMail} 