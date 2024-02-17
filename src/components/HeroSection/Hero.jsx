import React, { useEffect, useState } from 'react'
import background from '../../assets/Element.png'
import vf from '../../assets/Image-container.svg'
import { useNavigate } from 'react-router-dom';
import { FaLongArrowAltRight } from "react-icons/fa";
import axios from 'axios'
import photo2 from './WhatsApp Image 2024-02-17 at 7.51.40 AM.jpeg'
function Hero() {

  const [redirect , setRedirect] = useState("")
  const navigate = useNavigate()
  const [reload , setReload] = useState(true)

// 
  const isLoggedIn =  async () =>{

    const res = await axios.get("http://localhost:8080/api/user/getuser" , {withCredentials : true})
    .then((value) =>{
       console.log(value.data.success)
       setRedirect(value.data.success)
    })
     
    .catch((error) =>{
       console.log(error.response.data.success)
       navigate("/")

    })

  }
  useEffect(() =>{
  
     isLoggedIn ()
     if (reload){
       
      //  location.reload(false)
       setReload(false)
     }


  } , [redirect , reload])

  return (
    <div className=" w-full lg:h-[90vh] sm:h-screen bg-[#043873] relative">
    <img src={background} className='-z-10' alt="" />
    <div className="h-screen sm:h-max  p-1 container m-auto absolute top-0 ">
     
     <div className= "m-16 bg-[hero-background] flex justify-center item-center my-20 gap-x-3.5 lg:flex-row sm:flex-col sm:space-y-0"> 
          
          <div className="left w-68  flex-col space-y-8 p-4 sm:mt-[1rem] lg:mt-[10rem]  ">
              <h1 className=' text-[#fff] text-5xl leading-[4rem] font-bold   '>Get started with your education journey</h1>
              <p className='text-[#fff] md:text-sm'>A goto solution to the rampant problem of preparation of student regarding there educational or professional goals.</p>
            <button className='p-3 bg-[#4F9CF9] w-30 rounded text-[#ffffff] transition-all ease-in duration-300 hover:bg-[#397dd1] flex  justify-center gap-x-2.5 items-center'>Start your journey <FaLongArrowAltRight/></button>
          </div>
          <div>
            <img src={photo2} className=' lg:h-[450px] lg:w-[824px] lg:object-cover sm:h-[200px] sm:w-[200px]' alt="" />
               
          </div>

     </div>
       
    </div>
     
    </div>
  )
}

export default Hero









