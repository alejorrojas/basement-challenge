import Image from "next/image";
import header from "../public/home/header.svg";
import footer from "../public/home/footer.svg";
import Marquee from "../components/Marquee";
import { Card } from "../components/Card";

const getProducts = async () => {
  const res = await import("../data/products.mock.json");
  const data = res.default;

  return data;
};

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="font-basement h-full flex flex-col items-center xs:gap-5 md:gap-20 bg-black">
      <header className="w-full flex flex-col xs:gap-5 md:gap-12 items-center justify-center">
        <Image
          className="w-full md:px-8 xs:px-4 px-10"
          alt="basement supply"
          src={header}
        />
        <section className="overflow-hidden w-full">
          <Marquee />
        </section>
      </header>
      <Image
        className="xs:invisible lg:visible absolute lg:left-28 lg:w-20 lg:top-[52%] xl:top-[65%] xl:w-40 2xl:w-48 2xl:top-[70%] animate-spin-slow"
        src="/home/asterisk.svg"
        width={150}
        height={150}
        alt=""
      />
      <Image
        className="xs:invisible lg:visible absolute lg:right-20 lg:w-20 lg:top-[40%]  xl:top-[50%] xl:w-40 2xl:w-48 2xl:top-[58%] animate-spin-slow-alt"
        src="/home/asterisk.svg"
        width={150}
        height={150}
        alt=""
      />
      <section className="md:px-8 xs:px-4 px-10 flex  w-full justify-center xs:gap-10 gap-32 lg:flex-row xs:flex-col">
        {products?.map((product) => <Card key={product.id} {...product} />)}
      </section>
      <footer className="w-full md:px-8 xs:px-4 px-10 pb-5">
        <Image alt="basement footer" className="w-full" src={footer} />
      </footer>
    </main>
  );
}
