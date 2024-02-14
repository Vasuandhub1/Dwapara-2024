
const userModel = require ("../models/userModel.js")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const register = async (req , res) =>{
    
    try {
        const {username , email , password} = req.body

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

    const token = jwt.sign({userId : createdUser._id} , process.env.JWT_SECRET , {expiresIn : '15d'})

    res.cookie('jwt-token' , token , {
        httpOnly : true,
    })

    res.status(201).json ({
         success : true,
         message : "User Created Successfully ",
         createdUser
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
        res.cookie("jwt-token",token)
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

module.exports={register , login}