"use client"
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React,{useRef} from 'react'

const Navbar = () => {

  const sideMenuRef = useRef();

  const openMenu =() =>{
    sideMenuRef.current.style.transform = 'translateX(-16rem)'
  }

  const closeMenu = () =>{
    sideMenuRef.current.style.transform = 'translateX(16rem)'
  }

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

        <div className='flex items-center gap-4'>
            
            <button>
              <Image src={assets.moon_icon} alt='' className='w-6'></Image>
            </button>
            
            <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-grey-500 rounded-full ml-4 font-Ovo'>
                Contact 
                <Image src={assets.arrow_icon} className='w-3' alt='->'/>
            </a>

            <button className='block md:hidden ml-3' onClick={openMenu}>
              <Image src={assets.menu_black} alt='' className='w-6'></Image>
            </button>

        </div>

        {/* mobile menu */}

        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition doration-500 '>
          <div className='absolute right-6 top-6' onClick={closeMenu}>
            <Image src={assets.close_black} alt='' className='w-5 cursor-pointer'></Image>
          </div>
            <li><a onClick={closeMenu} href="#top">Home</a></li>
            <li><a onClick={closeMenu} href="#about">About Me</a></li>
            <li><a onClick={closeMenu} href="#services">Services</a></li>
            <li><a onClick={closeMenu} href="#work">Work</a></li>
            <li><a onClick={closeMenu} href="#contact">Contact Me</a></li>
        </ul>

      </nav>
    </>
  )
}

export default Navbar
