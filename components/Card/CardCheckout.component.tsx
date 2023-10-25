import React, { FC } from 'react'
import { Product, ProductCheckout } from '../../data/products.types'
import Image from 'next/image'
import { useLocalStorage } from 'usehooks-ts'

const CardCheckout: FC<Product> = ({image, name, description, id, options, price}) => {
  const [products, setProducts] = useLocalStorage<ProductCheckout[]>('products', [])

  const productIndex = products.findIndex((product) => product.id === id);
  //Target the specific product
  const checkoutProduct = products[productIndex] 
  //Make a copy of the products array
  const updatedProducts = [...products] 

  const addQuantity = () =>{
    const newQuantity = checkoutProduct?.quantity + 1

    //Modify just the selected element
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
      //Modify just the selected element
      updatedProducts[productIndex].quantity = newQuantity  
      setProducts(updatedProducts)
    }
  }
  
  const updateSize = (newSize: string)=>{
    //Modify just the selected element
    updatedProducts[productIndex].checkoutSize = newSize 
    setProducts(updatedProducts)
  }

  return (
    <div className='flex border-solid border-2 border-white w-full p-4 gap-3 2xl:gap-10'>
      <Image className='bg-gradient-to-t from-[#1c1c1c]  lg:max-2xl:w-36' width={200} height={300} src={image} alt={name} />

      <div className='flex flex-col justify-between w-full'>
        <header>
          <h3 className='text-[1rem] 2xl:text-3xl'>{name.toUpperCase()}</h3>
          <h4 className='text-base 2xl:text-xl text-[#999999] '>{description}</h4>
        </header>

        <footer className='relative flex justify-between'>
            <div className='flex flex-col gap-4'>
              <div className='flex gap-8 items-center'>
                <h4 className='text-[1rem] 2xl:text-2xl'>QUANTITY: </h4>
                <div className='m-0 p-1 2xl:p-2 xl:px-3  w-24 flex justify-between text-lg xs:border-2 border-[3px] rounded-[2rem] border-solid border-white cursor-pointer'>
                  <button onClick={removeQuantity} >-</button>
                  <span className='text-[1rem] 2xl:text-xl' >{checkoutProduct?.quantity}</span>
                  <button onClick={addQuantity} >+</button>
                </div>
              </div>

              <div className='flex gap-2 2xl:gap-6 items-center'>
                <h4 className='text-[1rem] 2xl:text-2xl' >SIZE: </h4>



                {options[0].values.map(value =>(
                  <button  onClick={()=>updateSize(value)} className={`${value === checkoutProduct.checkoutSize ? "border-white border-2 rounded-full " : "border-black border-2 rounded-full "} xl:px-2 xl:py-1 2xl:px-3 2xl:py-2  text-base `} key={value}>
                    {value}
                  </button>
                )) }
              </div>
            </div>
            <h3 className='text-2xl 2xl:text-4xl absolute right-0 bottom-0'>${price}</h3>
          </footer>
       </div>
    </div>
  )
}

export default CardCheckout