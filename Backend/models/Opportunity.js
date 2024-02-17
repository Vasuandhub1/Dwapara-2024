const mongoose = require("mongoose")

const OpportunitySchema = new mongoose.Schema({
    
    name : {
         type : String,
         required : true
    },
    description : {
         type : String,
         required : true
    },
    url : {
         type : String,
         required : true,
    },
    stream : {
         type : String,
         required : true
    }

} , { timestamps : true})

module.exports = mongoose.model("opportunity" , OpportunitySchema)
