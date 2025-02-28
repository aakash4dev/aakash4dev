import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50'>

        <a href="#top">
            <Image src={assets.logo} className='w-40 cursor-pointer mr-14' alt=''/>
        </a>

        <ul className='hidden md:flex items-center gap-6 lg_gap-8 rounded-full px-12 py-3'>
            <li><a href="#top">Home</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#contact">Contact Me</a></li>
        </ul>

        <div>
            <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-grey-500 rounded-full ml-4'>
                Contact 
                <Image src={assets.arrow_icon} className='w-3' alt='->'/>
            </a>
        </div>

      </nav>
    </>
  )
}

export default Navbar
