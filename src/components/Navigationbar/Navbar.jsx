import { X,Menu } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "./learning.png"
function Navbar({auth,setauth}) {
  const [isOpen,setIsOpen]=useState(false); 
  const ToggleNav=()=>{
      setIsOpen(!isOpen);
  }
  console.log(auth)
  return (
    <>
    <div className="h-14 bg-[#043873] m-auto p-2 text-cyan-50 w-screen font-mono">
      <div className="flex flex-row justify-around ">
        <NavLink to="/"><div className="flex relative">
        <img src={logo} alt="" className="w-[2.5rem] h-[2.5rem]" />
        <h5 className=" relative top-3">Sahapathi</h5>
        </div></NavLink>
    <ul className="hidden sm:flex flex-row gap-10">
    <li><NavLink to="/opportunity" className={({isActive})=>{ return isActive? ("text-[#043873] bg-slate-100 rounded-xl p-4"):("")}}>Opportunity</NavLink></li>
    <li><NavLink to="/" className={({isActive})=>{return isActive? ("text-[#043873] bg-slate-100 rounded-xl p-4"):("")}}> Features</NavLink></li>
    <li> <NavLink to="/about"  className={({isActive})=>{return isActive? ("text-[#043873] bg-slate-100 rounded-xl p-4"):("")}}>about us</NavLink></li>
    <li><NavLink to="/"  className={({isActive})=>{return isActive? ("text-[#043873] bg-slate-100 rounded-xl p-4"):("")}}> Contact</NavLink></li>
    </ul>
    <div className="sm:hidden">
      <button onClick={ToggleNav}>
         {isOpen?<X/>:<Menu/>}
      </button>
    </div>
    {!auth?<div className='hidden sm:flex flex-row gap-2'>
    <button className="bg-[#FFE492] text-black p-2 px-4 rounded">Login</button>
    <button className='bg-[#4F9CF9] p-2 px-4 rounded'>Try Us</button>
    </div>:<div className='hidden sm:flex flex-row gap-2'>
    <button className=" bg-red-500 text-white p-2 px-4 rounded">Logout</button>
   
    </div>}
      </div>
      {isOpen && (
        <div className="flex basis-full flex-col items-center">
        {/* <div className='flex flex-row bg-[#043873] gap-2 p-3 w-screen align-middle justify-center'>
           <button className="bg-[#FFE492] text-black p-2 px-4 rounded">Login</button>
          <button className='bg-[#4F9CF9] p-2 px-4 rounded'>Try Us</button>
        </div> */}
        {!auth?<div className='flex flex-row bg-[#043873] gap-2 p-3 w-screen align-middle justify-center'>
           <button className="bg-[#FFE492] text-black p-2 px-4 rounded">Login</button>
          <button className='bg-[#4F9CF9] p-2 px-4 rounded'>Try Us</button>
        </div>:<div className='flex flex-row bg-[#043873] gap-2 p-3 w-screen align-middle justify-center'>
           <button className="bg-[#FFE492] text-black p-2 px-4 rounded">Logout</button>
        </div>}
        <ul className="flex flex-col bg-[#043873] w-screen items-center h-28">
        <li><NavLink to="/opportunity" className={({isActive})=>{ return isActive? ("text-[#043873] bg-slate-100 rounded-xl p-4"):("")}}>Opportunity</NavLink></li>
    <li><NavLink to="/" className={({isActive})=>{return isActive? ("text-[#043873] bg-slate-100 rounded-xl p-4"):("")}}> Features</NavLink></li>
    <li> <NavLink to="/about"  className={({isActive})=>{return isActive? ("text-[#043873] bg-slate-100 rounded-xl p-4"):("")}}>about us</NavLink></li>
    <li><NavLink to="/"  className={({isActive})=>{return isActive? ("text-white bg-red-500 rounded-xl p-4"):("")}}> Contact</NavLink></li>
        </ul>
        </div>
      )}
      </div>
    </>
  )
}

export default Navbar
