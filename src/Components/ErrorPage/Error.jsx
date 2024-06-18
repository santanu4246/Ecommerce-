import React from 'react'
import './Error.css'
import { Link } from 'react-router-dom'
const Error = () => {
  return (
    <div className='ErrorContainer'>
      
      <h1>404</h1>
      <h2>UH OH! You're lost'</h2>
      <span>The page you are looking does not exixt. How you get here is a mystery. But you can click the button below to go back to the homepage</span>
      <Link to="/"><button>GO TO HOME PAGE</button></Link>
    </div>
  )
}

export default Error