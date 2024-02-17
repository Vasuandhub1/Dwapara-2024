import React, { useState } from 'react'
import Pretemplates from './Pretemplates'
import Navbar from '../Navigationbar/Navbar'


export default function Templates({arr}) {
    const[text,settext]=useState("")
    const handlechange=(event)=>{
       settext(event.target.value) 
    }
    let texts=text.toLowerCase().trim()
    
    
  return (
    <>
    <div className="bg-green-300 text-center p-4"> Search for Opportunity: <input value={text} className="rounded-lg text-xm" onChange={(event)=>handlechange(event)} type="text"/>
    
    </div>
    <div id="wrapper" className="m-9">
        <ul className="flex flex-wrap justify-evenly gap-3 ">
          {arr.map((element,index)=>{
            let valu=element.name.toLowerCase()
            if(valu.includes(texts)){
              return(
                <li key={index}> <Pretemplates val={element}></Pretemplates></li>
              )
              if(text==""){
                return(
                  <li key={index}> <Pretemplates val={element}></Pretemplates></li>
                )
              }
            }
          })}
        </ul> 
    </div>
    </>
  )
}
