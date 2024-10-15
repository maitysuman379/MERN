import React from 'react'
import Logo from './Logo'
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

function Header() {
  return (
    <header className='h-16 shadow-md'>
      <div className="h-full container mx-auto flex items-center justify-between">

        <div className="ml-2">
          <Logo w={90} h={50}/>
        </div>

        <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow-md pl-2'>
          <input type="text" placeholder='Search Product here...' className='w-full outline-none'/>
          <div className='text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white'><IoSearch /></div>
        </div>

        <div className='flex items-center gap-4'>

          <div className='text-2xl cursor-pointer'>
            <FaUser />
          </div>

          <div className='mr-4 text-2xl relative'>
            <span><FaCartShopping /></span>
            <div className='bg-red-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-3 -right-3'>
              <p className='text-sm'>0</p>
            </div>
          </div>



        </div>


      </div>
    </header>
  )
}

export default Header
