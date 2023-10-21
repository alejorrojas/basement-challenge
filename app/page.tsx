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
     <main className="h-full flex flex-col items-center  m-0 bg-black">
      <header className="w-full flex flex-col gap-12 items-center justify-center">
        <Image className='w-full md:px-8 xs:px-4 px-10' alt="Basement" src={header} />
        <section className='overflow-hidden w-full'>
          <Marquee/>
        </section>
      </header>
      <section className='flex h-1/2 w-full justify-center gap-32 md:flex-row xs:flex-col'>
        {products?.map(product => (
          <Card key={product.id} {...product} />
        ) )}
      </section>
      <footer className='w-full md:px-8 xs:px-4 px-10'>
       <Image alt="Basement" className='w-full' src={footer} />
      </footer>
     </main>
  )
}

