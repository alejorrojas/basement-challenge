import Image from 'next/image'
import React, { FC } from 'react'
import { Product } from '../../data/products.types'

const Card: FC<Product> = ({image, name, price}) => {
  return (
    <div className=' flex justify-center items-center gap-4 flex-col'>
      <Image className='md:max-lg:max-h-xl md:max-lg:max-w-xl' height={1000} width={1000} src={image} alt={name} />

      <div className='w-full xl:text-3xl md:max-lg:max-w-xl lg:text-xl flex border-t-4 pt-4 border-white justify-between'>
        <p>{name}</p>
        <p>$ {price}</p>
      </div>

    </div>
  )
}

export default Card