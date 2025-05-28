import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
     <div className=' bg-gradient-to-r from-gray-800 to-gray-600 text-white '>
      <nav className='container mx-auto flex gap-[44px] h-[65px] items-center text-[#EEEEEE] '>
         <NavLink to="/" className="hover:text-yellow-300 transition">Home</NavLink>
          <NavLink to="/user" className="hover:text-yellow-300 transition flex-1">Users</NavLink>
          <div className='flex gap-4'>
            <button className='pt-[10px] pb-[10px] pr-[11px] pl-[11px] rounded-[4px] bg-[#24B47E] text-[#FFFFFF]'>
              <p className='text-[12px]'>Start your project</p>
            </button>
            <button>
              Sign in
            </button>
          </div>
      </nav>
    </div>
  )
}

export default React.memo(Header)