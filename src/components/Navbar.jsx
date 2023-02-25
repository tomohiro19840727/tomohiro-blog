import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ isAuth }) => {
  return (
    <div className='bg-blue-200'>
    <header className='text-gray-700 border-b border-gray-400'>
  <div className='container flex mx-auto p-5 flex-col md:flex-row items-center'>
    <a href='#' className="font-medium text-gray-900 mb-4 md:mb-0">
      <span className='text-7xl ml-3'>技術ブログ</span>
    </a>
    <nav className='md:ml-auto text-base'>
      <Link to="/" className='mr-5 hover:text-blue-400 duration-300'>ホーム</Link>
      <Link to="/profile" className="mr-5 hover:text-blue-400 duration-300" >プロフィール</Link>
      
      <Link to="/setblog" className="mr-5 hover:text-blue-400 duration-300" >勉強ブログ</Link>
      {!isAuth ?  <Link to="/login" className="mr-5 hover:text-blue-400 duration-300" >ログイン</Link> : 
      <>
      <Link to="/logout" className="mr-5 hover:text-blue-400 duration-300" >ログアウト</Link> <Link to="/blog" className="mr-5 hover:text-blue-400 duration-300" >投稿</Link> 
      </>}
    </nav>
  </div>
 </header>
  </div>

  )
}

export default Navbar

