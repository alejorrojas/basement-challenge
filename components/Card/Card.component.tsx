import Image from 'next/image'
import React, { FC } from 'react'
import { Product } from '../../data/products.types'

const Card: FC<Product> = ({image, name, price}) => {
  return (
  
        <div className='relative flex justify-center items-center flex-col group'>
          <Image className='bg-gradient-to-t from-[#1c1c1c] group-hover:from-black  ' height={1000} width={1000} src={image} alt={name} />
          <div className='xs:hidden lg:flex absolute w-full h-full -top-10  justify-center invisible group-hover:visible transition-all ease-in-out delay-200'>
              <Image className='xs:w-48 md:w-72 lg:w-32 xl:w-56 2xl:w-72'  src='/hover.svg' width={300} height={300} alt='' />
          </div>
          <div className='w-full xl:text-3xl  lg:text-xl flex border-t-4 pt-4 border-white justify-between'>
            <p>{name}</p>
            <p>$ {price}</p>
          </div>

        </div>
  )
}

export default Card