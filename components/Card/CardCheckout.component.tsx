import React, { FC } from 'react'
import { Product, ProductCheckout } from '../../data/products.types'
import Image from 'next/image'
import { useLocalStorage } from 'usehooks-ts'

const CardCheckout: FC<Product> = ({image, name, description, id, options, price}) => {
  const [products, setProducts] = useLocalStorage<ProductCheckout[]>('products', [])

  const productIndex = products.findIndex((product) => product.id === id);
  const checkoutProduct = products[productIndex]
  const updatedProducts = [...products];

  const addQuantity = () =>{
    const newQuantity = checkoutProduct?.quantity + 1

    updatedProducts[productIndex].quantity = newQuantity

    setProducts(updatedProducts)

  }

  const removeQuantity = () =>{
    const newQuantity = checkoutProduct?.quantity - 1

    //Delete the product
    if(newQuantity == 0) {
       const filterProducts = products.filter(product => product.id !== id)
       setProducts(filterProducts)
    }
    else {
      updatedProducts[productIndex].quantity = newQuantity
      setProducts(updatedProducts)
    }
  }
  
  const updateSize = (newSize: string)=>{
    updatedProducts[productIndex].checkoutSize = newSize
    setProducts(updatedProducts)
  }

  return (
    <div className='flex border-solid border-2 border-white w-full p-4 gap-10'>
      <Image className='bg-gradient-to-t from-[#1c1c1c]' width={200} height={300} src={image} alt={name} />

      <div className='flex flex-col justify-between w-full'>
        <header>
          <h3 className='text-3xl'>{name.toUpperCase()}</h3>
          <h4 className='text-xl text-[#999999] '>{description}</h4>
        </header>

        <footer className='relative flex justify-between'>
            <div className='flex flex-col gap-4'>
              <div className='flex gap-8 items-center'>
                <h4 className='text-2xl'>QUANTITY: </h4>
                <div className='m-0 xs:p-1 md:p-2 md:px-3  w-24 flex justify-between text-lg xs:border-2 border-[3px] rounded-[2rem] border-solid border-white cursor-pointer'>
                  <button onClick={removeQuantity} >-</button>
                  <span className='text-xl' >{checkoutProduct?.quantity}</span>
                  <button onClick={addQuantity} >+</button>
                </div>
              </div>

              <div className='flex gap-6 items-center'>
                <h4 className='text-2xl' >SIZE: </h4>

                {options[0].values.map(value =>(
                  <button  onClick={()=>updateSize(value)} className={`${value === checkoutProduct.checkoutSize ? "border-white border-2 rounded-full  px-3 py-2 " : "border-black border-2 rounded-full  px-3 py-2 "} `} key={value}>
                    {value}
                  </button>
                )) }
              </div>
            </div>
            <h3 className='text-4xl absolute right-0 bottom-0'>${price}</h3>
          </footer>
       </div>
    </div>
  )
}

export default CardCheckout