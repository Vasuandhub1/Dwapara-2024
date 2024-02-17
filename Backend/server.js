const express=require("express")
const user_router=require("./routes/userRouter.js")
const scheduleRouter = require("./routes/scheduleRouter.js")
const {connect}=require("./config/db.js")
const app = express()
const multer = require ("multer")
const path = require("path")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const OppoRouter = require("./routes/OpportunityRouter.js")

// Connecting database here...
connect()


require("dotenv").config()

// Middlewares :-
app.use(cors({ origin : "http://localhost:5173", credentials : true}))
app.use(express.json());
app.use(cookieParser())
app.use('/api/user',user_router)
app.use('/api/schedule',scheduleRouter)
app.use('/api/opportunity',OppoRouter)

//  Multer file Uploadation :-
const storage = multer.diskStorage({
     destination : "./uploads/images",
     filename : (req , file , cb) =>{
         return cb (null , `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
     }
})

const upload = multer ({storage : storage})

app.use('/images', express.static('uploads/images'))

app.post("/upload" , upload.single("avatar") ,function (req , res) {
    
     console.log(req.file)
     res.json({
         success : true,
         image_url : `http://localhost:${process.env.PORT}/images/${req.file.filename}`
     })

})

app.listen(process.env.PORT,()=>{
    console.log(`running on ${process.env.PORT}`)
})