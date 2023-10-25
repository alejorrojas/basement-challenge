'use client'
import React, { useCallback } from 'react'
import { ProductCheckout } from '../../data/products.types'
import { useLocalStorage } from 'usehooks-ts'
import * as Dialog from '@radix-ui/react-dialog';
import { CardCheckout } from '../Card';


const ModalCheckout = () => {
 const [products] = useLocalStorage<ProductCheckout[]>('products', [])

 const totalPrice = useCallback(()=>products.reduce((ac, product) => ac + (product.price * product.quantity), 0), [products])


  return (
    <Dialog.Root>
        <Dialog.Trigger className='m-0 xs:p-2 md:p-3 w-40 xs:w-32 2xl:w-40 xs:border-2 border-[3px] rounded-[2rem] border-solid border-white cursor-pointer 2xl:text-xl'>
            CART ({products.length})
        </Dialog.Trigger>
        <Dialog.Portal>
            <Dialog.Overlay className='fixed inset-0 bg-black/50' />
            <Dialog.Content className='flex  justify-between flex-col z-50 fixed top-0 right-0 xl:w-[45%] min-h-[90%] lg:w-[60%] xs:max-lg:w-screen xs:max-lg:h-screen  bg-black border-solid border-t-0 border-r-0 border-white border-2'>
            <div className='p-8 flex flex-col'>
                <Dialog.Close className='cursor-pointer text-right text-xl mb-10 font-extrabold' >→ CLOSE</Dialog.Close>
                <Dialog.Title className='xs:max-lg:flex-col md:mb-4 2xl:mb-8 justify-center gap-[3vw] flex text-center xs:text-7xl xl:text-[5rem] 2xl:text-8xl'>
                    <span>YOUR</span> 
                    <span className='text-black text-shadow-white' >CART</span>
                </Dialog.Title>
            
                <div className='overflow-y-auto xs:max-h-[60vh] xl:max-h-[50vh]  max-h-96 flex flex-col gap-10'>
                    <div className='px-2 flex gap-8 flex-col'>
                        {products.map(product => (
                            <CardCheckout key={product.id}  {...product} />     
                            ))}
                    </div>
                </div>
                </div>
                <div className='flex justify-between xs:text-2xl xl:text-2xl 2xl:text-4xl border-solid border-t-2 border-white'>
                    <h3 className='p-8 w-3/4'>TOTAL: ${totalPrice()} </h3>
                    <div className="border-l-2"/>
                    <h3 className='p-8 text-black text-shadow-white' > CHECKOUT</h3>
                </div>
            </Dialog.Content>
        </Dialog.Portal>
    </Dialog.Root>
  )
}

export default ModalCheckout