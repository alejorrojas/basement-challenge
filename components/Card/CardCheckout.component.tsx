import React, { FC } from 'react'
import { Product, ProductCheckout } from '../../data/products.types'
import Image from 'next/image'
import { useLocalStorage } from 'usehooks-ts'

const CardCheckout: FC<Product> = ({image, name, description, id, options, price}) => {
  const [products, setProducts] = useLocalStorage<ProductCheckout[]>('products', [])

  const checkoutProduct = products.find(product => product.id = id ) as ProductCheckout
  const filterProducts = products.filter(product => product.id !== id)

  const addQuantity = () =>{
    const newQuantity = checkoutProduct?.quantity + 1

    setProducts([...filterProducts, {...checkoutProduct, quantity: newQuantity}])

  }

  const removeQuantity = () =>{
    const newQuantity = checkoutProduct?.quantity - 1

    //Delete the product
    if(newQuantity == 0) {
      console.log('call');
      console.log(filterProducts);
       setProducts(filterProducts)
    }
    else setProducts([...filterProducts, {...checkoutProduct, quantity: newQuantity}])
  }
  
  const updateSize = (newSize: string)=>{
    setProducts([...filterProducts, {...checkoutProduct, checkoutSize: newSize}])
  }

  return (
    <div className='flex border-solid border-2 border-white w-full p-4 gap-10'>
      <Image className='bg-gradient-to-t from-[#1c1c1c]' width={200} height={300} src={image} alt={name} />

      <div className='flex flex-col justify-between'>
        <header>
          <h3 className='text-3xl'>{name.toUpperCase()}</h3>
          <h4 className='text-xl text-[#999999] '>{description}</h4>
        </header>

        <div className='flex flex-col gap-4'>
          <div className='flex gap-8 items-center'>
            <h4 className='text-2xl'>QUANTITY: </h4>
            <div className='m-0 xs:p-1 md:p-2 md:px-3  w-24 flex justify-between text-lg xs:border-2 border-[3px] rounded-[2rem] border-solid border-white cursor-pointer'>
              <button onClick={removeQuantity} >-</button>
              <span className='text-xl' >{checkoutProduct?.quantity}</span>
              <button onClick={addQuantity} >+</button>
            </div>
          </div>

          <div className='flex gap-10 items-center'>
            <h4 className='text-2xl' >SIZE: </h4>

            {options[0].values.map(value =>(
              <button  onClick={()=>updateSize(value)} className={`${value === checkoutProduct.checkoutSize ? "border-white border-2 rounded-full  px-3 py-2 " : "border-0 text-lg"} `} key={value}>
                {value}
              </button>
            )) }
            

          </div>
        </div>
        
      </div>


    </div>
  )
}

export default CardCheckout