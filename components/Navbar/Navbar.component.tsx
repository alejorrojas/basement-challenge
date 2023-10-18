import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='p-12 xs:p-6 xs:pt-8 xs:pr-5 w-full flex justify-between text-center items-center '>
        <div className='xs:hidden md:hidden lg:block'>
          <Image src="/logo.svg" width={200} height={200} alt='logo-basement' />
        </div>
        <div className='lg:hidden'>
          <Image src="/logo-sm.png" width={50} height={50} alt='logo-basement' />
        </div>
        <div className='flex xs:hidden md:hidden lg:block'>
          <Image src="/navbar.svg" className='w-72' priority={true} width={100} height={200} alt='icon-basement' />
        </div>
        <div className='m-0 p-3 w-40 xs:w-32 xs:border-2  cursor-pointer border-[3px] rounded-[2rem] border-solid border-white'>
          <button className='cursor-pointer'>
              CART (0)
          </button>
        </div>
    </nav>
  )
}

export default Navbar