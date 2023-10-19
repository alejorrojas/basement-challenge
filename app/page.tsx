import Image from 'next/image'
import header from "../public/header.svg";
import footer from "../public/footer.svg";
import Marquee from '../components/Marquee';


export default function Home() {
  return (
     <main className="h-full flex flex-col items-center  m-0 bg-black">
      <header className="w-full flex flex-col items-center justify-center">
        <Image className='mb-20' alt="Basement" src={header} />
        <section className='overflow-hidden w-full'>
          <Marquee/>
        </section>
      </header>
      <section className=''>

      </section>
      <footer>
       <Image alt="Basement" src={footer} />
      </footer>
     </main>
  )
}

