import React from "react";
import { useState } from "react";
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import logo from '../../assets/book.png'

const RegisterForm = () => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error , setError] = useState(null);
  const [passError, setPassError] = useState("");
  const [emailError , setEmailError] = useState("")
  const [nameError, setNameError] = useState("");
   const [backError , setBackError] = useState("")
  const [strength, setstrength] = useState(0);
  const [registered , setRegistered] = useState(false)
  const [Otp , setOtp] = useState("")
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword:"",
    // rememberMe: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: val,
    }));
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleShowConfirmPassword =  () =>{
    setShowConfirmPassword(!showConfirmPassword);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    //api fetch
    // console.log(formData)

    if (!formData.username){
      setNameError("Name is required")
      setTimeout(() =>{
       setNameError("")
    } , 2000)
      return
   }

    if (formData.username.length<3){
      setNameError("Name is too short")
      setTimeout(() =>{
       setNameError("") 
    } , 2000)
      return
   ;
  }
    if (formData.username.length>25){
      setNameError("Name is too long")
      setTimeout(() =>{
       setNameError("")
    } , 2000)
      return
   }

    if (!formData.email){
      setEmailError("email is required")
      setTimeout(() =>{
       setEmailError("")
    } , 2000)
      return
   }
  
   if (!formData.email.includes("@") || !formData.email.includes('.')){
       setEmailError("Please Check the format of email")
       setTimeout(() =>{
         setEmailError("")
      } , 2000)
       return
   }
  
   if (formData.email != formData.email.toLowerCase()){
      setEmailError("Email must be in lowerCase")
      setTimeout(() =>{
       setEmailError("")
    } , 2000)
      return 
   }


    if (!formData.password){
      setPassError("password is required")
      setTimeout(() =>{
       setPassError("")
    } , 2000)
      return
   }
   if(formData.password.match(/[a-z]+/)){
    setstrength(strength+1);
   }else{
    setPassError("Password should contain lower case")
    setTimeout(() =>{
      setPassError("")
   } , 2000)
    return;
   }

   if(formData.password.match(/[A-Z]+/)){
    setstrength(strength+1);
   }else{
    setPassError("Password should contain upper case")
    setTimeout(() =>{
      setPassError("")
   } , 2000)
    return;
   }

   if(formData.password.match(/[0-9]+/)){
    setstrength(strength+1);
   }else{
    setPassError("Password should contain numeric value")
    setTimeout(() =>{
      setPassError("")
   } , 2000)
    return;
   }

   if(formData.password.match(/[$@#&!]+/)){
    setstrength(strength+1);
   }else{
    setPassError("Password should contain special characters")
    setTimeout(() =>{
      setPassError("")
   } , 2000)
    return;

   }

   console.log(formData.password.length)

   if(formData.password.length < 8){
    setPassError("Password must have atleast 8 characters")
    setTimeout(() =>{
       setPassError("")
    } , 2000)
    return;
   }

  //  if(strength < 3){
  //   setPassError("Password is not strong enough")
   
  //   return;
  //  }
   
   


    if (formData.password !== formData.confirmPassword){
         setError("Both password should match")
         setFormData({...formData , confirmPassword : ""})
         setTimeout(() => {
            setError("")
         } , 2000)
         return;
    }





      

    const res = await axios.post("http://localhost:8080/api/user/register" , formData , {withCredentials : true})
    .then((value) =>{
        console.log(value.data)
        // alert("User Registered Successfully")
        setRegistered(true)
        navigate("/emailverify")
        
    })
    .catch((error) =>{
       console.log(error.response.data.message)
       setBackError(error.response.data.message)

    })


  };





  return (
    <>
  
    <div>
    <img src={logo} className='w-[3.5rem] mt-0 absolute top-3' alt="" srcset="" />

      <form className="form-register  mt-16">

        {/* input Name */}
        <div className="credentials-form-item mb-6 flex items-center pt-5">

          {/* user icon  */}
          <span className="mr-3">
          <i class="fas fa-user fa-lg text-[#043873]"></i>
          </span>

          <input
            className="  placeholder:italic credentials-form-item__text w-full py-2 border-b border-gray-300 focus:outline-none text-[#043873]" 
            type="text"
            id="form-register__username"
            name="username"
            placeholder="Enter your name"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </div>
          {nameError && <span className='text-red-500 font-bold '>{nameError}</span> }

        {/* input password */}
        <div className="  placeholder:italic credentials-form-item mb-6 flex items-center relative">

          {/* email icon */}
        <span className="mr-3">
              <i className="fas fa-envelope fa-lg text-[#043873] "></i>
              </span>

          <input
            className="  placeholder:italic credentials-form-item__text w-full py-2 border-b border-gray-300 focus:outline-none text-black" // Added text-black class to set input text color to black
            type="text"
            id="form-register__email"
            name="email"
            placeholder="Enter your E-mail"
            value={formData.email}
            onChange={handleInputChange}
            required
          />

   
        </div>
        {emailError && <span className='text-red-500 font-bold '>{emailError}</span> }


        {/* input password */}
        <div className="credentials-form-item mb-6 flex items-center relative">

          {/* password icon */}
          <span className="mr-3">
          <i className="fas fa-regular fa-key fa-lg text-[#043873]"></i>
          </span>

          <input
            className="  placeholder:italic  credentials-form-item__text w-full py-2 border-b border-gray-300 focus:outline-none text-[#043873]" 
            type={showPassword ? "text" : "password"}
            id="form-register__password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />

     
         
          {/* show password icon */}
          <span className="form__eye top-0 right-0 flex items-center h-full absolute">
            <i
              className={`fa ${showPassword ? "fa-eye" : "fa-eye-slash"} mr-2 text-[#043873]`} 
              onClick={handleShowPassword}
            ></i>
          </span>
        </div>
          {passError && <span className='text-red-500 font-bold '>{passError}</span> }

         {/* input confirm password */}
        <div className="credentials-form-item mb-6 flex items-center relative">

          {/* password icon */}
          <span className="mr-3">
          <i className="fa-sharp fa-solid fa-key fa-lg text-[#043873]"></i>
          </span>

          <input
            className="  placeholder:italic credentials-form-item__text w-full py-2 border-b border-gray-300 focus:outline-none text-[#043873] " 
            type={showConfirmPassword ? "text" : "password"}
            id="form-register_confirmPassword"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
          />
      

          {/* show password icon */}
          <span className="form__eye top-0 right-0 flex items-center h-full relative">
            <i
              className={`fa ${showConfirmPassword ? "fa-eye" : "fa-eye-slash"} mr-2 text-[#043873]`} 
              onClick={handleShowConfirmPassword}
            ></i>
          </span>
        </div>

        {
         
                error && <span className="text-red-500 font-bold " >{error}</span>
          
        }

        {/* <div className="credentials-form-item credentials-form-item_checkbox mb-6">
          <input
            className="form-register__checkbox mr-2"
            type="checkbox"
            id="remember-me"
            name="rememberMe"
            checked={formData.rememberMe}
            onChange={handleInputChange}
          />

          <label htmlFor="remember-me" className="text-[#043873]">
            Remember me
          </label>
        </div> */}

        <button
          className="credentials-form__btn form-register__btn bg-[#043873] text-[#fff] py-2 rounded-full w-full"
          type="submit" 
          onClick={handleSubmit}
        >
          Register
        </button>
      </form>
    </div>
    {
       backError &&  <div class="flex w-full my-8 shadow-lg rounded-lg">
       <div class="bg-red-600 py-4 px-6 rounded-l-lg flex items-center">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="fill-current " width="20" height="20"><path fill-rule="evenodd" d="M4.47.22A.75.75 0 015 0h6a.75.75 0 01.53.22l4.25 4.25c.141.14.22.331.22.53v6a.75.75 0 01-.22.53l-4.25 4.25A.75.75 0 0111 16H5a.75.75 0 01-.53-.22L.22 11.53A.75.75 0 010 11V5a.75.75 0 01.22-.53L4.47.22zm.84 1.28L1.5 5.31v5.38l3.81 3.81h5.38l3.81-3.81V5.31L10.69 1.5H5.31zM8 4a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 018 4zm0 8a1 1 0 100-2 1 1 0 000 2z"></path></svg>
       </div>
       <div class="px-4 py-6 bg-white rounded-r-lg flex justify-between items-center w-full border border-l-transparent border-gray-200">
         <div className="text-red-500 font-bold">{backError}</div>
         <button>
           <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setBackError(null)} class="fill-current text-gray-700" viewBox="0 0 16 16" width="20" height="20"><path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path></svg>
         </button>
       </div>
     </div>  


    }

    {
      registered &&     <div class="flex w-full my-8 shadow-lg rounded-lg">
      <div class="bg-green-600 py-4 px-6 rounded-l-lg flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="text-white fill-current" viewBox="0 0 16 16" width="20" height="20"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
      </div>
      <div class="px-4 py-6 bg-white rounded-r-lg flex justify-between items-center w-full border border-l-transparent border-gray-200">
        <div className="text-green-500 font-bold">Your Account created successfully. Please go to login.</div>
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" class="fill-current text-gray-700" viewBox="0 0 16 16" width="20" height="20" onClick={() => setRegistered(false)} ><path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path></svg>
        </button>
      </div>
    </div>
    }



    </>
  );
};

export default RegisterForm;
