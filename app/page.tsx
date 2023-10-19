import Image from 'next/image'
import logo from "../public/logo.svg";


export default function Home() {
  return (
     <main className="h-full flex bg-black">
      <header className="m-auto text-white text-center">
        <Image alt="Basement" src={logo} />
        <h4>Lets get this party started</h4>
      </header>
     </main>
  )
}

