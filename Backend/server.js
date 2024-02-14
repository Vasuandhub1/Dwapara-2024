const express=require("express")
const user_router=require("./routes/user-router.js")
const {connect}=require("./config/db.js")
const app = express()

connect()
require("dotenv").config()

// Middlewares :-
app.use(express.json());
app.use('/api/user',user_router)

app.listen(process.env.PORT,()=>{
    console.log(`running on ${process.env.PORT}`)
})