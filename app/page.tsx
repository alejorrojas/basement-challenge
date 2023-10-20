import Image from 'next/image'
import header from "../public/header.svg";
import footer from "../public/footer.svg";
import Marquee from '../components/Marquee';


export default function Home() {
  return (
     <main className="h-full flex flex-col items-center  m-0 bg-black">
      <header className="w-full flex flex-col gap-12 items-center justify-center">
        <Image className='w-full md:px-8 xs:px-4 px-10' alt="Basement" src={header} />
        <section className='overflow-hidden w-full'>
          <Marquee/>
        </section>
      </header>
      <section className=''>

      </section>
      <footer className='w-full md:px-8 xs:px-4 px-10'>
       <Image alt="Basement" className='w-full' src={footer} />
      </footer>
     </main>
  )
}

