import Image from 'next/image'
import header from "../public/header.svg";
import footer from "../public/footer.svg";
import Marquee from '../components/Marquee';
import { Product } from '../data/products.types';
import Card from '../components/Card';

const getProducts = async () => {
  const res = await import("../data/products.mock.json")
  const data = res.default
  
  return data
}

export default async function Home() {
  const products = await getProducts()

  return (
     <main className="h-full flex flex-col items-center xs:gap-5 md:gap-20 bg-black">
      <header className="w-full flex flex-col xs:gap-5 md:gap-12 items-center justify-center">
        <Image className='w-full md:px-8 xs:px-4 px-10' alt="Basement" src={header} />
        <section className='overflow-hidden w-full'>
          <Marquee/>
        </section>
      </header>
      <section className='md:px-8 xs:px-4 px-10 flex  w-full justify-center md:gap-10 gap-32 lg:flex-row xs:flex-col'>
        {products?.map(product => (
          <Card key={product.id} {...product} />
        ) )}
      </section>
      <footer className='w-full md:px-8 xs:px-4 px-10 pb-5'>
       <Image alt="Basement" className='w-full' src={footer} />
      </footer>
     </main>
  )
}

