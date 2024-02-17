import { X,Menu } from 'lucide-react';
import { useEffect, useState } from 'react';
import { NavLink, useNavigate} from 'react-router-dom';
import logo from "../../../assets/book.png"
import axios from 'axios'
function Navbar({auth,setauth}) {
  const navigate = useNavigate();
  const [isOpen,setIsOpen]=useState(false); 
  const [loggedInUser , setLoggedInUser] = useState(null)

  const ToggleNav=()=>{
      setIsOpen(!isOpen);
  }
  // console.log(auth)

  
  const getLoggedIn = async () =>{
      
    const res =  await axios.get("http://localhost:8080/api/user/getuser" , {withCredentials : true})
    .then((value) =>{
        console.log(value.data.success)
        setLoggedInUser(value.data.success)
    })
    .catch((error) =>{
        console.log(error.response.data.success)
        
    })
 }

 const handleLogout = async() =>{
  const res = await axios.get("http://localhost:8080/api/user/logout" , {withCredentials : true})
  .then((value)=>{
    console.log(value.data);
    navigate("/");
  }).catch((error)=>{
    console.log(error.response.data.message)
  })
  window.location.reload(true)
 }
//  setTimeout(() => {
//   window.location.reload(true)
//  }, 0);
 useEffect(() =>{
    getLoggedIn()
    // 

    navigate("/hero")

 },[])

 


  return (
    <>
    <div className="h-14 bg-[#043873] m-auto p-2 text-cyan-50 w-screen font-mono">
      <div className="flex flex-row justify-around ">
        <NavLink to="/hero"><div className="flex relative">
        <img src={logo} alt="" className="w-[2.5rem] h-[2.5rem]" />
        <h5 className=" relative top-3">Sahapathi</h5>
        </div></NavLink>
    <ul className="hidden sm:flex flex-row gap-10">
    <li><NavLink to="/opportunity" className={({isActive})=>{ return isActive? ("text-[#043873] bg-slate-100 rounded-xl p-4"):("")}}>Opportunity</NavLink></li>
    <li><NavLink to="/createschedule" className={({isActive})=>{return isActive? ("text-[#043873] bg-slate-100 rounded-xl p-4"):("")}}> Features</NavLink></li>
    <li> <NavLink to="/about"  className={({isActive})=>{return isActive? ("text-[#043873] bg-slate-100 rounded-xl p-4"):("")}}>about us</NavLink></li>
    <li><NavLink to="/about"  className={({isActive})=>{return isActive? ("text-[#043873] bg-slate-100 rounded-xl p-4"):("")}}> Contact</NavLink></li>
    </ul>
    <div className="sm:hidden">
      <button onClick={ToggleNav}>
         {isOpen?<X/>:<Menu/>}
      </button>
    </div>
    {!loggedInUser?<div className='hidden sm:flex flex-row gap-2'>
    <button className="bg-[#FFE492] text-black p-2 px-4 rounded">Login</button>
    <button className='bg-[#4F9CF9] p-2 px-4 rounded'>Try Us</button>
    </div>:<div className='hidden sm:flex flex-row gap-2'>
    <button className=" bg-red-500 text-white p-2 px-4 rounded" onClick={handleLogout} >Logout</button>
   
    </div>}
      </div>
      {isOpen && (
        <div className="flex basis-full flex-col items-center">
        {/* <div className='flex flex-row bg-[#043873] gap-2 p-3 w-screen align-middle justify-center'>
           <button className="bg-[#FFE492] text-black p-2 px-4 rounded">Login</button>
          <button className='bg-[#4F9CF9] p-2 px-4 rounded'>Try Us</button>
        </div> */}
        {!loggedInUser?<div className='flex flex-row bg-[#043873] gap-2 p-3 w-screen align-middle justify-center'>
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
