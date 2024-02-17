import { useState } from 'react'
import Section_2 from './components/Home/section-2/section_2'
import Section_6 from './components/Home/section_/section_6'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Section_2></Section_2>
      <Section_6></Section_6>
      <Section4></Section4>
      <Section4></Section4>
      <Section5></Section5>
      <Section7></Section7>
      <Section7></Section7>
      <Footer></Footer>
      <Contactus></Contactus>

    </div>
  )
}

export default App
