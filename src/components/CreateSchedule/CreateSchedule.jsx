import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function CreateSchedule() {

  const navigate = useNavigate()
  const isLoggedIn =  async () =>{

    const res = await axios.get("http://localhost:8080/api/user/getuser" , {withCredentials : true})
    .then((value) =>{
       console.log(value.data.success)
       setRedirect(value.data.success)
    })
     
    .catch((error) =>{
       console.log(error.response.data.success)
       navigate("/")

    })
  }
  useEffect(() =>{
    
     isLoggedIn ()

  } , [])

    const Goals = ["GATE" , "GRE" , "GMAT" , "ProductBased" , "ServiceBased"] 
    const Streams = ["BTech (CS)" , "BTech (EC)" , "BTech (ME)" , "Civil Services" , "Management"] 
    const Types = ["Slow Learner" , "Fast Learner"] 

    const [scheduleData , setScheduleData] = useState({})
    const [image , setImage] = useState(null)
    const [url , seturl] = useState("")
    const [loggedInUser , setLoggedInUser] = useState(null)


 


   const handleChange = (e) =>{
    
        setScheduleData({...scheduleData , [e.target.name] : e.target.value})



   }



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
   useEffect(() =>{
      getLoggedIn()
   })

   const handleSubmit = async (e) =>{
    
    e.preventDefault()
    console.log(scheduleData)
    console.log(image)
    
    //  Creating a form data for backend api :-
    const formData = new FormData()
    
    formData.append("avatar" , image)
    let product = {...scheduleData}
    


    // Api call for image uploadation 
     const res = await axios.post("http://localhost:8080/upload" , formData)
     .then((value) =>{
         console.log(value.data)
         product.avatar = value.data.image_url
         seturl(value.data.image_url)
     }) 
     .catch((error) =>{
       console.log(error.response.data.message)
     })
    
   console.log(product)
     const res1 = await axios.post('http://localhost:8080/api/schedule/create' , product , {withCredentials : true})
    .then((value) =>{
        console.log(value.data)

    })
    .catch((error) =>{
       console.log(error.response.data.message)
    })

   }
    

  return (
     <>
     <div>
  
   
    <div className='h-screen w-full bg-[#043873] '>
          <div className='h-[100vh]   flex justify-center items-center'>

           
           <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center mt-4 p-4 gap-6 h-max'>

          <label htmlFor="avatar">
            <img src={url ? url : `https://th.bing.com/th/id/OIP.gDBdAA5pacZzSnpFUHEKPgHaGA?rs=1&pid=ImgDetMain`}  className='h-14 my-2 rounded-full object-cover' alt="" />
            <input type="file" id='avatar' name='photo' onChange={(e) => setImage(e.target.files[0])} hidden />
          </label>

           <div className="goals">
           <label for="countries" class="block mb-2 text-xl font-bold  dark:text-white">Please Select your Goal : </label>
            <select id="countries" onChange={handleChange} name='goal'  class="bg-gray-50 border w-[30vw] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="" className='text-gray-400 sm:text-xs'>--Please Select from below--</option>
                   {
                     Goals.map((item , index) =>{
                         return  <option value={item}>{item}</option>
                     })
                   }
               
            </select>
          </div>
           <div className="type">
           <label for="countries" class="block mb-2 text-xl font-bold  dark:text-white">Please Select your Type : </label>
            <select id="countries" onChange={handleChange} name='learningType'  class="bg-gray-50 w-[30vw] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="" className='text-'>--Please Select from below--</option>
                   {
                     Types.map((item , index) =>{
                         return  <option value={item}>{item}</option>
                     })
                   }
               
            </select>
          </div>
          
       
          <div>
            <label for="first_name" class="block mb-2  text-gray-900 dark:text-white font-bold text-xl my-2">Promise Time (In Months) : </label>
            <input type="number" onChange={handleChange} name='promise'  className="bg-gray-50 border  w-[30vw] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  bg-black-50 placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:italic" placeholder="enter promise time..." required />
        </div>


             <div>
            <label for="first_name" class="block mb-2  text-gray-900 dark:text-white font-bold text-xl my-2">Available Time (In Hours) : </label>
            <input type="number" onChange={handleChange} name='available'  className="bg-gray-50 border  w-[30vw] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  bg-black-50 placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:italic" placeholder="enter available time..." required />
        </div>
          

          <div className="streams">
          <label for="countries" class="block mb-2 text-xl font-bold  dark:text-white">Please Select your Stream : </label>
            <select id="countries" onChange={handleChange} name='stream'  class="bg-gray-50 border w-[30vw] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="">--Please Select from below--</option>
                   {
                     Streams.map((item , index) =>{
                         return  <option value={item}>{item}</option>
                     })
                   }
               
            </select>
          </div>

          <button className='p-2 bg-[#4F9CF9] w-30 rounded text-[#ffffff] transition-all ease-in duration-300 hover:bg-[#397dd1] ' type='submit'>Create Schedule</button>

           </form>

          </div>
    </div>
    </div>
    </>   
  )
}

export default CreateSchedule
