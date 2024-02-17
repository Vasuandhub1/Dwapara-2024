import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import ScheduleCard from '../ScheduleCard/ScheduleCard'
function  UserSchedule() {

    const navigate = useNavigate()
    const [schedule , setSchedule] = useState([])
    const getAllUserSchedule = async () =>{
          
        const res = await axios.get("http://localhost:8080/api/user/getUserSchedule" , {withCredentials : true})
        .then((value) =>{
             console.log(value.data.schedules)
            setSchedule(value.data.schedules)
             

        })
        .then((error) =>{
             console.log(error.response.data.message)
        })
    }
    useEffect(() =>{
         getAllUserSchedule()
    } , [])

  return (
     
    <div className='h-max w-full bg-[#043873] flex flex-wrap justify-evenly gap-x-4 items-start'>
      
      {
       schedule.length === 0 ? <div className='flex justify-center h-screen w-full text-[#ffffff] text-6xl	 items-center'>No schedule found</div> : schedule.map((item , index) =>{
        return  <ScheduleCard avatar = {item.avatar} goal = {item.goal} promise = {item.promise} available = {item.available} learningType = {item.learningType} />
          
      
    })
}
    
     </div>

  )
}


export default UserSchedule
