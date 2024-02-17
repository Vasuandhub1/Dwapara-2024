import React from 'react'
import image from "./WhatsApp Image 2024-02-16 at 4.45.32 PM.jpeg"

function About() {
    return (
        <div className="w-full h-full bg-[#043873] text-white font-mono">
               <div className="  text-9xl font-bold text-center ">About Us</div>
               <div className="flex flex-col">
                   <div className="text-2xl text-center m-20"><b> &quot; The blessing of Knowledge empoweres like fury of a tiger &quot;</b></div>
                    <div className="items-center justify-center">
                    <div className="flex justify-center items-center">
                        <img src={image} alt='image' className="text-center" />
                    </div>
                    <div className="p-12 text-2xl">We here at sahapathi know that in this digital edge ,the student requires 
                    more than just a big road map to follow which may span over many years.The 
                    student 's need to follow through his predecided goal must be met with 
                    a product catering to the goal 's exclusive content.so,we have developed a 
                    solution which takes the time that the goal is to be acheived and the daily
                    hours the student thinks he can give to the goals.</div>
                    </div>
               </div>
        </div>
    )
}

export default About