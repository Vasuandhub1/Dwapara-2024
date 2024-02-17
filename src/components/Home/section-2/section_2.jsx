import React from 'react'
import group from './Group.svg'
import image_com from "../../../assets/photo1.jpg"
import atom from "./Work Together Image.svg"
import image1 from "./WhatsApp Image 2024-02-17 at 7.51.40 AM.jpeg"
import image2 from "./WhatsApp Image 2024-02-17 at 7.57.48 AM.jpeg"

export default function Section_2() {
  return (
    
    <div className="w-screen box-border">
        <img src={group} alt="" className=" -z-10 absolute w-[%] flex-shrink-0 left-[-70px]"/>
      <div className="flex flex-wrap  sm:h-[60rem] lg:py-[5rem] px-[10rem] w-screen justify-evenly p-0 lg:h-[25rem]">
        <div className="w-[20rem] h-[30rem] space-y-11">
            <h1 className="text-4xl font-mono">Goal Based Management</h1>
            <p className='text-wrap'>Our distinct features help the student to follow a goal-based schedule which helps them to achieve the dream of millions.</p>
        </div>
        <div className=""><img src={image2} alt="" className=" box-border sm:min-w-[7rem] max-w-[15rem]  lg:max-w-[25rem] min-w-[23rem] " /></div>
      </div>
      <div className="flex flex-wrap-reverse lg:py-[5rem] px-[10rem] w-screen justify-evenly space-x-10 p-0 m-20">
        <div className="">
            <img src={atom} alt="" className=" box-border sm:min-w-[7rem] max-w-[15rem]  lg:max-w-[25rem] min-w-[23rem] " />
        </div>
        <div className='w-[20rem] h-[30rem] space-y-11'>
        <h1 className="text-4xl font-mono">See your schedule</h1>
            <p className='text-wrap'>The core compentecy of this product is to provide the student with a customized practical schedule 
                                     Which helps in the completion of goals                          
            </p>
        </div>

      </div>
       
   </div>
  )
}
