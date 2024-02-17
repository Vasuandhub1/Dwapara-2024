import { useState } from 'react'
import Templates from './components/templates/templates'
import Navbar from './components/Navigationbar/Navbar'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home/home'
import About from './components/About/about'
import Footer from './components/footer/Footer'


function App() {
  const[auth,setauth]=useState(true)
  const Oppo=[
    {
        name :"GATE"  ,
        description :"  Graduate Aptitude Test in Engineering (GATE) is a prestigious national-level exam that assesses candidates for comprehensive understanding in various undergraduate-level subjects in Engineering, Technology, Science, Architecture, and Humanities " ,
        url : "https://ctet.nic.in/",
        stream:"B-Tech"
      }
    ,{
        name:"GSOC",
        description:"Google Summer of Code is a global, online program focused on bringing new contributors into open source software development.",
        url:"https://summerofcode.withgoogle.com/",
        stream:"B-Tech"
    },
    {
        name:"GSOD",
        description:"Google Season of Docs provides support for open source projects to improve their documentation and gives professional technical writers an opportunity to gain experience in open source. ",
        url:"https://developers.google.com/season-of-docs",
        stream:"B-Tech"
    },
    {
        name:"CodeVita",
        description:"TCS CodeVita has helped spread awareness about coding, and introduce thousands of students to the concept of programming as a sport.",
        url:"https://www.tcs.com/who-we-are/tcs-way/case-study/tcs-codevita-online-programming-competition-contest",
        stream:"B-Tech"
    },
    {
        name:"Outreachy",
        description:"Outreachy provides internships in open source and open science. Outreachy provides internships to people subject to systemic bias and impacted by underrepresentation in the technical industry where they are living.",
        url:"https://www.outreachy.org/",
        stream:"B-Tech"
    },
    {
        name:"Code Jam",
        description:"Google Code Jam was an international programming competition hosted and administered by Google. The competition began in 2003. The competition consists of a set of algorithmic problems which must be solved in a fixed amount of time.",
        url:"https://codingcompetitionsonair.withgoogle.com/",
        stream:"B-Tech"
    },
    {
        name:"GSSOC",
        description:"GirlScript Summer of Code is a 3-month long OpenSource  program by GirlScript Foundation.",
        url:"https://gssoc.girlscript.tech/",
        stream:"B-Tech"
    },
    {
        name:"Hardware Hackathon",
        description:"For the past five years, we have held over seven different hardware-related Garage48 hackathons: the legendary Hardware & Arts and many others.",
        url:"https://garage48.org/blog/hardware-hackathon-inspirations-25-ideas-from-5-years",
        stream:"B-Tech"
    },{
        name:"Intel IOT Roadshow",
        description:"This Intel® IoT collection features the innovative projects developed at the IoT Roadshows.",
        url:"https://www.instructables.com/Intel-IoT-Roadshow-Projects/",
        stream:"B-Tech"
    },
    {
        name:"Minerva",
        description:"Minerva is the Roman goddess of wisdom, justice, law, victory, and the sponsor of arts, trade, and strategy. Minerva is not a patron of violence such as Mars, but of strategic war.",
        url:"https://www.maineinfonet.org/minerva/governance/innovation-competition/",
        stream:"Commerce"
    },
              {
                name :"Chartered Accountant Common Proficiency Test "   ,
                description :"Conducted by The Institute of Chartered Accountants of India (ICAI).Relevant for pursuing Chartered Accountancy." ,
                url : "https://icaiexam.icai.org/faq_verification.php",
                stream:"Commerce"
              },{
                name :"CS Executive Entrance Test (CSEET) "   ,
                description :"Conducted by The Institute of Company Secretary of India (ICSI)." ,
                url : "https://www.icsi.edu/exam/",
                stream:"Commerce"
                
              },
              {
                name :"LIC-AAO (Life Insurance Corporation - Assistant Administrative Officer) "  ,
                description :" A government exam relevant for commerce graduates. Offers opportunities in the insurance sector.                        " ,
                url : "https://www.adda247.com/jobs/lic-aao-notification/",
                stream:"Commerce"
              },
              {
                name :"UGC-NET (University Grants Commission - National Eligibility Test) "  ,
                description :" Not specific to commerce but open to all postgraduate students. Qualifying this exam opens doors to teaching and research positions. " ,
                url : "https://ugcnet.nta.nic.in/",
                stream:"Commerce"
              },
              {
                name :"Civil Services Exam "  ,
                description :"Conducted by the Union Public Service Commission (UPSC).Not exclusive to commerce students, but a prestigious option.Offers various administrative roles in the government. " ,
                url : "https://upsc.gov.in/",
                stream:"Commerce"
              },
              {
                name :" IPPB Exam (India Post Payments Bank)"  ,
                description :"  Relevant for banking and financial services. Conducted by India Post Payments Bank. " ,
                url : "https://www.ippbonline.com/web/ippb/current-openings",
                stream:"Commerce"
              },
              {
                name :" CTET (Central Teacher Eligibility Test)   "  ,
                description :" For those interested in teaching positions.Conducted by the Central Board of Secondary Education (CBSE). " ,
                url : "https://ctet.nic.in/",
                stream:"Commerce"
              },{
                name :" CTET (Central Teacher Eligibility Test)   "  ,
                description :" For those interested in teaching positions.Conducted by the Central Board of Secondary Education (CBSE). " ,
                url : "https://ctet.nic.in/",
                stream:"Commerce"
              },

]

  return (
    <div>
      
      <BrowserRouter>
      <Navbar auth={auth} setauth={setauth}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route  path="/opportunity" element={<Templates arr={Oppo}  ></Templates>}/>
        <Route path="/about" element={<About></About>}/>
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
      
      </div>
  )
}

export default App
