import React from 'react'
import { useState } from 'react';
import '../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/book.png'

const LoginForm = () => {
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false);
    // const [disBtn, setDisBtn] = useState(true);
    const [flag , setFlag] = useState(false);
    const [emailError , setEmailError] = useState("")
    const [regError, setRegError] = useState("")
    const [passError, setPassError] = useState("");
    
  
    const [formData, setFormData] = useState({
      email:'',
      password: '',
      // rememberMe: false,
    });

    // console.log(formData)
  
    const handleInputChange = (e) => {
      const { name, value, type, checked } = e.target;

      const val = type === 'checkbox' ? checked : value;
      setFormData((prevData) => ({
        ...prevData,
        [name]: val

      }
      )
      );

      for (const key in formData) {
          if (formData[key] == ""){
             setFlag (true)  
          } 
      }

      // if (flag){
      //    setDisBtn(true)
      // }else {
      //    setDisBtn(false)
      // }
    };
  
    const handleShowPassword = () => {
      setShowPassword(!showPassword);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
    
      // alert("Hrllo")
      // if(!formData.email && !formData.password ){
      //   setDisBtn(true);
      // }else{
      //   setDisBtn(!disBtn)
      // }
      console.log(formData.email)
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
     
     


    
   
     

      console.log("object")
      //api fetch
      console.log(formData)
      const res = await axios.post("http://localhost:8080/api/user/login" , formData , {withCredentials : true})

    .then((value) =>{

        console.log(value.data)
        alert("User Logged In SuccessFully")
        navigate("/hero")

       
    })
    .catch ((error) =>{
         console.log(error.response.data.message)
         setRegError(error.response.data.message)
    })
    };
     
  return (
    <div>
      
            <img src={logo} className='w-[3.5rem] mt-0 absolute top-3' alt="" srcset="" />
          <form className="form-login mt-6" >
            <div className="credentials-form-item mb-6 flex items-center pt-5  mt-16">

              {/* Email icon */}
              <span className="mr-3">
              <i className="fas fa-envelope fa-lg "></i>   
              </span>

              <input 
                className=" placeholder:italic credentials-form-item__text w-full py-2 border-b bg-transparent border-gray-300 focus:outline-none "
                id="form-login__email"
                name="email"
                placeholder="Enter your E-mail"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            {emailError && <span className='text-red-500 font-bold '>{emailError}</span> }

            <div className="credentials-form-item mb-6 flex items-center relative">

              {/* password icon */}
              <span className='mr-3'>
              <i class="fa-sharp fa-solid fa-key fa-lg"></i>
              </span>

              <input
                className="  placeholder:italic  credentials-form-item__text w-full py-2 border-b bg-transparent border-gray-300 focus:outline-none"
                type = {showPassword ? "text" : "password"}
                id="form-login__password"
                name="password"
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleInputChange}
                required
                // pattern="[a-zA-Z0-9]{6,9}"
              />

{passError && <span className='text-red-500 font-bold '>{passError}</span> }


              {/* show password icon */}
              <span className="form__eye absolute top-0 right-0 flex items-center h-full">
                <i className={`fa ${showPassword ? 'fa-eye' : 'fa-eye-slash'} mr-2`} onClick={handleShowPassword}></i>
              </span>
            </div>

            {regError && <span className='text-red-500 font-bold '>{regError}</span> }


            {/* remember me checkbox */}
            {/* <div className="credentials-form-item credentials-form-item_checkbox mb-6">
              <input
                className="form-login__checkbox mr-2"
                type="checkbox"
                id="remember-me"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleInputChange}
              />
              <label htmlFor="remember-me">Remember Password</label>
            </div> */}

            <button className="credentials-form__btn form-login__btn  bg-[#fff] text-[#043873] py-2 rounded-full w-full cursor-pointer" type="submit" onClick={handleSubmit}  >
              Login
            </button>
          </form>
        
    </div>
  )
}


export default LoginForm
