import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {

  const Navigate=useNavigate()

  const btnclicked=()=>{
    Navigate('/')
    
  }

  return (
    <div>
     
        <h1>About</h1>
    </div>
  )
}

export default About