import Image from 'next/image'
import React, { FC } from 'react'
import { Product } from '../../data/products.types'

const Card: FC<Product> = ({image, name, price}) => {
  return (
    <div className='flex h-full justify-center items-center gap-4 flex-col'>
      <Image className='h-full w-1/2' height={300} width={200} src={image} alt={name} />

      <div className='text-4xl flex border-t-4 pt-4 border-white justify-between'>
        <p>{name}</p>
        <p>$ {price}</p>
      </div>

    </div>
  )
}

export default Card