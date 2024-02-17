import { X,Menu } from 'lucide-react';
import { useState } from 'react';
import {Link} from 'react-router-dom'
function Navbar() {
  const [isOpen,setIsOpen]=useState(false); 
  const ToggleNav=()=>{
      setIsOpen(!isOpen);
  }
  return (
    <>
    <div className="h-14 bg-[#043873] m-auto p-2 text-cyan-50 w-screen">
      <div className="flex flex-row justify-around ">
      <p className="text-3xl font-bold">
      Sahapathi
    </p>
    <ul className="hidden sm:flex flex-row gap-10">
    <li>About Us</li>
    <li>Features</li>
    <li>opportunities</li>
    <li>Contact</li>
    </ul>
    <div className="sm:hidden">
      <button onClick={ToggleNav}>
         {isOpen?<X/>:<Menu/>}
      </button>
    </div>
    <div className='hidden sm:flex flex-row gap-2'>
    <button className="bg-[#FFE492] text-black p-2 px-4 rounded">Login</button>
    <button className='bg-[#4F9CF9] p-2 px-4 rounded'>Try Us</button>
    </div>
      </div>
      {isOpen && (
        <div className="flex basis-full flex-col items-center">
        <div className='flex flex-row bg-[#043873] gap-2 p-3 w-screen align-middle justify-center'>
           <button className="bg-[#FFE492] text-black p-2 px-4 rounded">Login</button>
          <button className='bg-[#4F9CF9] p-2 px-4 rounded'>Try Us</button>
        </div>
        <ul className="flex flex-col bg-[#043873] w-screen items-center h-28">
          <li>About Us</li>
          <li>Features</li>
          <li>opportunities</li>
          <li>Contact</li>
        </ul>
        </div>
      )}
      </div>
    </>
  )
}

export default Navbar
