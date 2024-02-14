const mongoose=require("mongoose")

const connect=()=>{
    try{
        mongoose.connect("mongodb://127.0.0.1:27017/sahpathi_DB")
        console.log("database connected sucessfully ")
    }catch(err){
        console.log("error",err)
    }
}
module.exports={connect}