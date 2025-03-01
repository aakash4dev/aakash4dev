import Image from 'next/image'
import React from 'react'
import { assets } from '@/assets/assets'

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-6'>
      {/* Profile Image and Intro */}
      <div className='flex flex-col items-center text-center'>
        <Image src={assets.profile_img} alt='' className='rounded-full w-32' />
        <div className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
          Hey! It's Aakash Singh Rajput
          <Image src={assets.hand_icon} alt='' className='rounded-full w-6' />
        </div>
        <div className='text-3xl sm:text-4xl lg:text-[40px] font-Ovo'>
          🚀 Blockchain Innovator | Full-Stack Developer | Tech Explorer
        </div>
        <div className='max-w-2xl mx-auto font-Ovo'>
          Constantly pushing boundaries in zk proofs, cryptography, and interoperability, I believe in code that shapes the future. When I’m not coding, you’ll find me exploring AI tools, learning new languages, or mastering the art of social interaction.
        </div>
      </div>

      {/* Buttons Section */}
      <div className='flex justify-center gap-4 mt-6'>
        <a href="#contact" className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2'>
          Let’s connect
          <Image src={assets.right_arrow_white} className='w-4' alt='' />
        </a>
        <a href="/sample-resume.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>
          My Resume
          <Image src={assets.download_icon} alt='' className='w-4' />
        </a>
      </div>
    </div>
  )
}

export default Header
