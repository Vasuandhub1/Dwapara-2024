import { useEffect, useState } from 'react'
// import Section_2 from './components/Home/section-2/section_2'
// import Section_6 from './components/Home/section_/section_6'
// import CreateSchedule from './components/CreateSchedule/CreateSchedule';
import Hero from './components/HeroSection/Hero'
import LoginForm from  './components/SignupLogin/LoginForm'
import RegisterForm from './components/SignupLogin/RegisterForm';
import '@fortawesome/fontawesome-free/css/all.min.css'
import { BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import CreateSchedule from './components/CreateSchedule/CreateSchedule';
import AuthForm from './components/SignupLogin/AuthForm';
import UserSchedule from './components/UserSchedule/UserSchedule';
import Templates from './components/TemplatesFolder/Templates';
import Navbar from './components/Home/navigation bar/Navbar';
import axios from 'axios';
import Footer from './components/footer/Footer'
import Home from './components/Home/Home';
import About from './components/About/About'
import EmailAuth from './components/EmailAuthentication/EmailAuth';


function App() {


  const [loggedInUser , setLoggedInUser] = useState(false)


  const getLoggedIn = async () =>{
     
     const res =  await axios.get("http://localhost:8080/api/user/getuser" , {withCredentials : true})
     .then((value) =>{
         console.log(value.data.success)
         setLoggedInUser(value.data.success)
        //  window.location.reload()
     })
     .catch((error) =>{
         console.log(error.response.data.success)
         setLoggedInUser(error.response.data.success)
         
     })

  }
  useEffect(() =>{
     getLoggedIn()
  })
  
  return (
    <div>
      {/* <Section_2></Section_2>
      <Section_6></Section_6> */}
      {/* <Hero/> */}
      {/* <CreateSchedule/> */}
      {/* <LoginForm/> */}
      <Router>
        {loggedInUser ? <Navbar/> : <></>}
        <Routes>
          <Route path='/' element = {<AuthForm/>} />
          {/* <Route path='/register' element = {<RegisterForm/>} /> */}
          <Route path='/hero' element = {<Home />} />
          <Route path='/createschedule' element = {<CreateSchedule/>} />
          <Route path='/userSchedule' element = {<UserSchedule/>} />
          <Route path='/opportunity' element = {<Templates/>} />
          <Route path='/about' element = {<About/>}/>
          <Route path='/emailverify' element = {<EmailAuth/>}/>
        </Routes>
        {loggedInUser ? <Footer/> : <></>}
      </Router>
    </div>
  )
}

export default App
