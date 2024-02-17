import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function EmailAuth() {

    const navigate = useNavigate()
    const[final,setfinal]=useState("")
    const [otp , setOtp] = useState("")
    const[error,seterror]=useState("")
    const handleChange = (e) =>{
         
        setOtp(e.target.value)
    }


   const getVerificationOTP = async () =>{
    
     const res = await axios.get("http://localhost:8080/api/user/emailVerify")
     .then((value) =>{
         console.log(value.data.otp)
         setfinal(value.data.otp)
        
     })
     .catch((error) =>{
       
        console.log(error)
        
     })

   }

    const handleclick=()=>{
        getVerificationOTP()
    }
    const handleSubmit=()=>{
        console.log(otp , final)
        console.log(typeof otp ,typeof final)
        if (otp == final){
            navigate("/hero")
        }
        else{
          seterror("OTP does not Match")
        }
    }
  return (
<div className='h-screen w-full bg-gradient-to-r from-cyan-500 to-blue-500 flex justify-center items-center '>
      
      <div className="h-[50vh] w-[70vh] flex  flex-col gap-y-5">

          <h1 className='text-center my-2 font-mono text-2xl font-bold  '>Enter OTP : </h1>
          <input type="number" className='p-4 border-none outline-none rounded' onChange={handleChange} value={otp} />
          <button type="button" className="text-xl font-mono p-2 bg-cyan-500" onClick={handleclick}>Generate OTP</button>
          <button type="button"  className="text-xl font-mono p-2 bg-green-500" onClick={handleSubmit}>Submit OTP</button>
          {error&& <span className="text-2xl font-mono ">{error}</span>}

      </div>


    </div>
  )
}

export default EmailAuth
