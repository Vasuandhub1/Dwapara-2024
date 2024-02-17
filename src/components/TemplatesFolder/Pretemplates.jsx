import React from 'react'
import img from "../../assets/Work Together Image.svg"


export default function Pretemplates({val}) {
  return (
    
    <div id="wrapper" className="flex justify-evenly box-border font-mono ">
      <div className=" border-4  p-4  flex flex-wrap  w-fit justify-center overflow-hidden rounded-xl border-gray-300 shadow-2xl">
        <div className='w-[23rem] h-[15rem] spacing-x-5 '>
            <h1 className="text-xl">{val.name}</h1>
            <sup className=" text-red-500 font-extrabold p-1 rounded-xl relative top-1">{val.stream}</sup>
            <p className=" overflow-auto w-[20rem] my-4 h-[5rem] ">{val.description}</p>
            <a href={val.url}  className="bg-[#4F9CF9] p-2 text-white font-mono rounded-md"> know more -</a>
        </div>
        <div><img src={img} className='w-[10rem]' alt="" /></div>
      </div>
    </div>
  )
}
