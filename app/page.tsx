import { Card } from "../components/Card";
import { getProducts } from "./_utils/index.utils";
import Hero from "./sections/Hero";
import Footer from "./sections/Footer";



export default async function Home() {
  const products = await getProducts();

  return (
    <main className="font-basement h-full flex flex-col items-center xs:gap-5 md:gap-20 bg-black">
      <Hero/>
      <section className="md:px-8 xs:px-4 px-10 flex  w-full justify-center xs:gap-10 gap-32 lg:flex-row xs:flex-col">
        {products?.map((product) => <Card key={product.id} {...product} />)}
      </section>
      <Footer/>
    </main>
  );
}
