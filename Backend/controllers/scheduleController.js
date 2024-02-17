const scheduleModel = require ("../models/schedule.js");
const userModel = require("../models/userModel.js");

const createSchedule = async (req , res) =>{
    
     try {
       
      const {goal , learningType , available , promise , stream , avatar} = req.body;
          //   console.log("Mty Data " , req.user)
      if (!goal || !learningType || !available || !promise || !stream) {
              return res.status(400).json({
                   success : false,
                   message : "Please fill all the fields"
              })
      }
     console.log("outside")
      const CreatedSchedule = await scheduleModel.create({
             goal ,
             available,
             promise,
             stream,
             learningType,
             avatar,
             createdBy : req.user._id
      })

      if (!CreatedSchedule){
          return res.stautus(400).json({
               success : false,
               message : "Schedule could not be created",
               
          })
      }
 
      console.log("inside")

     

     const findUser = await userModel.findById(req.user._id)
     findUser.schedule.push(CreatedSchedule._id)
     await findUser.save()

     // await scheduleModel.bulkSave()
      
     console.log(CreatedSchedule)
     return res.status(200).json({
          success : true,
          message : "Schedule Created Successfully",
          CreatedSchedule
     })


     }
     catch (error){
       return res.status(500).json({
             success : false,
             message : error.message
       })
     }

}

module.exports = {createSchedule}