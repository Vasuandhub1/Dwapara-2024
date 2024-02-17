const jwt = require("jsonwebtoken")
const userModel = require("../models/userModel.js")

const Authentication = async (req , res , next) => {
    
  try {
    const token = req.cookies.jwttoken;
     console.log("token" , token)
    if (!token){

         return res.status(401).json({
             success : false,
             message : "Unauthorised access denied"
         })
    }
    const userId =  jwt.verify(token , process.env.JWT_SECRET);

    req.user = await userModel.findById(userId.userid)   
    
    //  console.log(req.user)
     next()
  }
  catch (error)
  {
    return res.status(500).json({
        success : false,
        message : error.message
    })
  }

}

module.exports = {Authentication}