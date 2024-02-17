import React from 'react'
import Section_2 from './section-2/section_2' 
import Section4 from './section_4/section_4'
import Section_5 from './section_5/seaction_5'
import Hero from './hero/Hero'

export default function Home() {
  return (
  
   
    <div className="space-y-7">
      <Hero></Hero>
      <Section_2></Section_2>
      <Section4></Section4>
      <Section_5></Section_5>

    </div>
    
  )
}
