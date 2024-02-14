import React from 'react'
import group from './Group.svg'
import image_com from "./Image-container.svg"
import atom from "./Work Together Image.svg"

export default function Section_2() {
  return (
    
    <div className="w-screen box-border">
        <img src={group} alt="" className=" -z-10 absolute w-[%] flex-shrink-0 left-[-70px]"/>
      <div className="flex flex-wrap  sm:h-[60rem] lg:py-[5rem] px-[10rem] w-screen justify-center p-0 lg:h-[25rem]">
        <div className="w-[20rem] h-[30rem] space-y-11">
            <h1 className="text-4xl font-mono">Goal Based Managemnt</h1>
            <p className='text-wrap'>Our distinct features help the student to follow a goal-based schedule which helps them to achieve the dream of millions.</p>
            <button className="bg-[#4F9CF9] p-[1rem] rounded-lg text-white">Get Started</button>
        </div>
        <div className=""><img src={image_com} alt="" className=" box-border sm:min-w-[7rem] max-w-[15rem]  lg:max-w-[25rem] min-w-[23rem] " /></div>
      </div>
      <div className="flex flex-wrap-reverse lg:py-[5rem] px-[10rem] w-screen justify-center space-x-10 p-0">
        <div className="">
            <img src={atom} alt="" className=" box-border sm:min-w-[7rem] max-w-[15rem]  lg:max-w-[25rem] min-w-[23rem] " />
        </div>
        <div className='w-[20rem] h-[30rem] space-y-11'>
        <h1 className="text-4xl font-mono">Goal Based Managemnt</h1>
            <p className='text-wrap'>Our distinct features help the student to follow a goal-based schedule which helps them to achieve the dream of millions.</p>
            <button className="bg-[#4F9CF9] p-[1rem] rounded-lg text-white">Get Started</button> 
        </div>

      </div>
       
   </div>
  )
}
