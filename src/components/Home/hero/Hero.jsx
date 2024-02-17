import React from 'react'
import background from './Element.png'
import vf from '../../../assets/Photo2.jpg'
import { FaLongArrowAltRight } from "react-icons/fa";
function Hero() {
  return (
    <div className=" w-full h-[90vh] sm:h-screen bg-[#043873] relative">
    <img src={background} className='-z-10 ' alt="" />
    <div className="h-screen sm:h-max  p-1 container m-auto absolute top-0 ">
     
     <div className= "m-16 bg-[hero-background] flex justify-center item-center my-20 gap-x-3.5 lg:flex-row sm:flex-col sm:space-y-0"> 
          
          <div className="left w-68  flex-col space-y-8 p-4 sm:mt-[1rem] lg:mt-[10rem]  ">
              <h1 className=' text-[#fff] text-5xl leading-[4rem] font-bold   '>Get started with your education journey</h1>
              <p className='text-[#fff] md:text-sm'>A goto solution to the rampant problem of preparation of student regarding there educational or professional goals.</p>
            <button className='p-3 bg-[#4F9CF9] w-30 rounded text-[#ffffff] transition-all ease-in duration-300 hover:bg-[#397dd1] flex  justify-center gap-x-2.5 items-center'>Start your journey <FaLongArrowAltRight/></button>
          </div>
          <div>
            <img src={vf} className=' lg:w-[35rem]  ' alt="" />
               
          </div>

     </div>
       
    </div>
     
    </div>
  )
}

export default Hero









