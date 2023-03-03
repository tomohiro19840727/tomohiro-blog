import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ isAuth }) => {
  return (
    <div className='bg-white bg-opacity-70'>
    <header className='text-gray-700 border-b border-gray-400'>
  <div className='container flex mx-auto p-5 flex-col md:flex-row items-center'>
    <a href='#' className="font-medium text-gray-900 mb-4 md:mb-0">
      <span className='text-3xl ml-3 font-cursive'>Tomohiro Kuriki</span>
    </a>
    <nav className='md:ml-auto text-base'>
      <Link to="/" className='mr-5 hover:text-blue-400 duration-300'>Home</Link>
      <Link to="/profile" className="mr-5 hover:text-blue-400 duration-300" >Profile</Link>
      
      <Link to="/setblog" className="mr-5 hover:text-blue-400 duration-300" >Blog</Link>
      {!isAuth ?  <Link to="/login" className="mr-5 hover:text-blue-400 duration-300" >Login</Link> : 
      <>
      <Link to="/logout" className="mr-5 hover:text-blue-400 duration-300" >Logout</Link> <Link to="/blog" className="mr-5 hover:text-blue-400 duration-300" >Posts</Link> 
      </>}
    </nav>
  </div>
 </header>
  </div>

  )
}

export default Navbar

