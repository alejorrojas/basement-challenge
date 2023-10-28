import React from "react";
import header from "../../public/home/header.svg";
import Image from "next/image";
import Marquee from "components/Marquee";

const Hero = () => {
  return (
    <>
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
    </>
  );
};

export default Hero;
