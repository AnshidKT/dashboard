import React from 'react'
import Logo from '../../components/Navbar/Logo'
import Navs from '../../components/Navbar/Navs'
import UserProfile from '../../components/Navbar/UserProfile'
import { Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex'>
        <nav className=' h-[97vh] text-white mt-2 ml-2 w-[20%] rounded-md bg-gradient-to-t from-cyan-400 to-blue-900'>
        <Logo/>
        <Navs/>
        <UserProfile/>
        </nav>
        <Outlet/>
    </div>
  )
}

export default Navbar