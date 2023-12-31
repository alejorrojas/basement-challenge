"use client";
import React, { FC, useCallback, useState } from "react";
import { useLocalStorage } from "usehooks-ts";
import { ProductCheckout } from "../../data/products.types";
import { CardCheckout } from "../Card";
import Image from "next/image";

const ModalMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [products] = useLocalStorage<ProductCheckout[]>("products", []);

  const totalPrice = useCallback(
    () =>
      products.reduce(
        (ac, product) => ac + product.price * product.quantity,
        0,
      ),
    [products],
  );

  const modalOpen = () => {
    setIsOpen(true);
  };

  const modalClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="lg:hidden" data-cy="modal-mobile">
      <button
        onClick={modalOpen}
        className="xs:mag-lg:hidden m-0 xs:p-2 md:p-3 w-40 xs:w-32 2xl:w-40 xs:border-2 border-[3px] rounded-[2rem] border-solid border-white cursor-pointer 2xl:text-xl"
      >
        CART ({products.length})
      </button>

      <div
        className={`fixed bg-black w-screen h-screen top-0 left-0 z-40 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } ease-out duration-500`}
      />
      <div
        className={`absolute bg-black w-screen min-h-screen z-50 top-0 left-0 md:px-10 px-4 py-8 flex flex-col justify-between ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } ease-out duration-500`}
      >
        <div className="flex flex-col">
          <button
            onClick={modalClose}
            className="cursor-pointer text-right text-base xs:mb-6 font-extrabold"
          >
            → CLOSE
          </button>

          <Image
            className="max-w-[480px] w-[90%] mx-auto mb-6"
            width={500}
            height={500}
            src="/nav/your-cart-text.svg"
            alt=""
          />

          <div className="flex gap-8 flex-col">
            {products.map((product) => (
              <CardCheckout key={product.id} {...product} />
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-between xs:text-2xl mt-4">
          <div className="flex items-center text-left justify-between">
            <h3 className="xs:max-lg:py-4 text-left lg:p-8 w-3/4">TOTAL: </h3>
            <span> ${totalPrice()}</span>
          </div>
          <div className="xs:border-b-2 w-full lg:border-l-2" />
          <Image
            className="mx-auto w-[90%] mt-6"
            width={500}
            height={500}
            src="/nav/checkout-text.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ModalMobile;
