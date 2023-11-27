import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const users = [1,2,3,4,5]
  return (
    <div className='bg-gray-600 text-white flex justify-center items-center flex-col h-screen w-full '>
        <h2>Home Page</h2>
  
        <Link to='/about' >About</Link>
        <Link to='/contact' >Contact</Link>
        <div className="mx-20 flex gap-5">
        {
          users.map((user) => {
            return (
              <Link key={user} to={`users/${user}`}>User {user}</Link>
            )
          })
        }
        </div>

    </div>
  )
}

export default Home