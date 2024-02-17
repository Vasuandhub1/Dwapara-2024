const mongoose = require("mongoose")

const scheduleSchema = new mongoose.Schema({
    createdBy : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user"   
    },
     avatar : {
        type : String
     },
     goal : {
         type : String,
         enum : ["GATE" , "GRE" , "GMAT" , "ProductBased" , "ServiceBased"],
         required : true
     },
     learningType : {
         type : String,
         enum : ["Slow Learner" , "Fast Learner" ],
     },
     available : {
           type : String,
           min : [1 , "Time is too less"],
           max : [24 , "Time is too much"],
     },
     promise : {
           type : String,
           required : true,
           
     },
     stream : {
        type : String,
        enum : ["BTech (CS)" , "BTech (EC)" , "BTech (ME)" , "Civil Services" , "Management"],
        required : true
    },
} , {timestamps : true})


module.exports = mongoose.model ("schedule" , scheduleSchema)