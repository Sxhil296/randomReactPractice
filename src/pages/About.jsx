import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='bg-orange-600 text-white flex justify-center items-center flex-col h-screen w-full '>
    <h2>About Page</h2>
    <Link to='/' >Home</Link>
    <Link to='/contact' >Contact</Link>
</div>
  )
}

export default About