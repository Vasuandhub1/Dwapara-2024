const { response } = require("express")
const opportunityModel = require ("../models/Opportunity.js")

const CreateOpportunity = async (req , res) =>{

    try {
        
        const {name , description , stream , url} = req.body
        
        if (!name || !description || !stream || !url) {
             return res.status(400).json({
                 success : false,
                 message : "Please Fill all the fields"
             })
        }

        const createdOpportunities = await opportunityModel.create({
             name ,
             description,
             stream,
             url
        })

        if (!createdOpportunities){
             return res.status(400).json({
                 success : false,
                 message : "Opportunities could not be created "
             })
        }
        return res.status(200).json({
             success : true,
             message : "Opportunity created ",
             createdOpportunities
        })

    }
    catch (error) {
         return res.status(500).json({
             success : false,
             message : error.message
         })
    }
    
} 

const getAllOpportunities = async(req,res) =>{
    try{
        const allOppo = await opportunityModel.find()
        if(!allOppo){
            return res.status(400).json({
                success: false,
                message:"Cannot get opportunities"
            })
        }
        return res.status(200).json({
            success: true,
            message:"All opportunities",
            allOppo
        })

                

 


    }catch(error){
        return res.status(500).json({
            success: false,
            message:error.message
        })
    }


}


module.exports = {CreateOpportunity,getAllOpportunities}