import Image from 'next/image'
import header from "../public/header.svg";
import footer from "../public/footer.svg";


export default function Home() {
  return (
     <main className="h-full flex flex-col m-0 bg-black">
      <header className="m-auto w-full flex flex-col justify-center">
        <Image alt="Basement" src={header} />
        <section>
          <div className="overflow-x-hidden mt-14">
            <hr className="h-px  bg-gray-200 border-1 dark:bg-gray-700"/>
            <div className="py-6 whitespace-nowrap ">
              <span className="text-4xl mx-4">A man can’t have enough base­ment swag   —  A man can’t have enough base­ment swag</span>
              <span className="text-4xl mx-4">A man can’t have enough base­ment swag   —  A man can’t have enough base­ment swag</span>
            </div>
            <hr className="h-px  bg-gray-200 border-1 dark:bg-gray-700"/>
          </div>
        </section>
      </header>
      <section>
        <h2>Products</h2>        
      </section>
      <footer>
       <Image alt="Basement" src={footer} />
      </footer>
     </main>
  )
}

