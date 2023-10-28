"use client";
import Image from "next/image";
import React, { FC, useState } from "react";
import { Product, ProductCheckout } from "../../data/products.types";
import { useLocalStorage } from "usehooks-ts";
import { v4 as uuidv4 } from "uuid";

const Card: FC<Product> = (product) => {
  const { image, name, price } = product;
  const [animate, setAnimate] = useState(false);
  const [products, setProducts] = useLocalStorage<ProductCheckout[]>(
    "products",
    [],
  );

  return (
    <div
      onClick={() => {
        setProducts([
          ...products,
          { ...product, id: uuidv4(), quantity: 1, checkoutSize: "S" },
        ]);
        setAnimate(true);
      }}
      onAnimationEnd={() => setAnimate(false)}
      className="product-item transition-transform group-active:scale-y-100  relative flex justify-center items-center flex-col group"
    >
      <Image
        className="bg-gradient-to-t from-[#1c1c1c] group-hover:from-black"
        height={1000}
        width={1000}
        src={image}
        alt={name}
      />
      <div className="flex absolute w-full h-full lg:-top-10  justify-center invisible group-hover:visible  ease-in-out delay-200 xs:max-lg:hidden">
        <Image
          className={`${
            animate && "animate-wiggle"
          } ease-out duration-500  xs:w-48 md:w-72 lg:w-32 xl:w-56 2xl:w-72`}
          src="/home/hover.svg"
          width={300}
          height={300}
          alt=""
        />
      </div>
      <div className="w-full xl:text-3xl  lg:text-xl flex border-t-4 pt-4 border-white justify-between">
        <p>{name}</p>
        <p>$ {price}</p>
      </div>
    </div>
  );
};

export default Card;
