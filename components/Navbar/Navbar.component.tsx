import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='2xl:px-32 mb-10 xs:pt-8 xs:pl-4 xs:pr-4  md:p-8  md:pr-7 w-full flex justify-between text-center items-center '>
        <div className='xs:hidden md:hidden lg:block'>
          <Image src="/logo.svg" width={200} height={200} alt='logo-basement' />
        </div>
        <div className='lg:hidden'>
          <Image src="/logo-sm.png" className='w-10' width={100} height={100} alt='logo-basement' />
        </div>
        <div className='flex xs:hidden md:hidden lg:block'>
          <Image src="/navbar.svg" className='w-72 xl:w-80' priority={true} width={100} height={200} alt='icon-basement' />
        </div>
        <div className='m-0 xs:p-2 md:p-3 w-40 xs:w-32 2xl:w-40 xs:border-2  cursor-pointer border-[3px] rounded-[2rem] border-solid border-white'>
          <button className='cursor-pointer 2xl:text-xl'>
              CART (0)
          </button>
        </div>
    </nav>
  )
}

export default Navbar