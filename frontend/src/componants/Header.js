import React from 'react'
import Logo from './Logo'
import { IoSearch } from "react-icons/io5";

function Header() {
  return (
    <header className='h-16 shadow-md'>
      <div className="h-full container mx-auto flex items-center justify-between">

        <div className="">
          <Logo w={90} h={50}/>
        </div>

        <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow-md pl-2'>
          <input type="text" placeholder='Search Product here...' className='w-full outline-none'/>
          <div className='text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white'><IoSearch /></div>
        </div>

        <div>
          user icons and cards
        </div>

      </div>
    </header>
  )
}

export default Header
