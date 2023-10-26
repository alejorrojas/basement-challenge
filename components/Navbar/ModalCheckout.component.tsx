"use client";
import React, { useCallback } from "react";
import { ProductCheckout } from "../../data/products.types";
import { useLocalStorage } from "usehooks-ts";
import * as Dialog from "@radix-ui/react-dialog";
import { CardCheckout } from "../Card";

const ModalCheckout = () => {
  const [products] = useLocalStorage<ProductCheckout[]>("products", []);

  const totalPrice = useCallback(
    () =>
      products.reduce(
        (ac, product) => ac + product.price * product.quantity,
        0,
      ),
    [products],
  );

  return (
    <Dialog.Root>
      <Dialog.Trigger className="m-0 xs:p-2 md:p-3 w-40 xs:w-32 2xl:w-40 xs:border-2 border-[3px] rounded-[2rem] border-solid border-white cursor-pointer 2xl:text-xl">
        CART ({products.length})
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="flex xs:max-lg:px-4 justify-between flex-col z-50 fixed top-0 right-0 xl:w-[45%] min-h-[80%] lg:w-[60%] xs:max-lg:w-screen xs:max-lg:h-screen  bg-black border-solid border-t-0 border-r-0 border-white border-2 xs:max-lg:border-0">
          <div className="xs:max-lg:py-4 lg:p-8 flex flex-col">
            <Dialog.Close className="cursor-pointer text-right text-xl xs:mb-2 xl:mb-4 font-extrabold">
              → CLOSE
            </Dialog.Close>
            <Dialog.Title className="xs:max-md:text-[5rem] md:gap-4 xs:gap-1 xs:max-md:flex-col xs:max-md:mb-2 lg:mb-4 justify-center gap-0  flex text-center md:max-lg:text-[14vw] lg:text-[5rem] 2xl:text-8xl">
              <span className="m-0">YOUR</span>
              <span className="m-0 text-black text-shadow-white">CART</span>
            </Dialog.Title>

            <div className="overflow-y-auto  xs:h-full xl:max-h-[50vh] max-h-96 flex flex-col gap-10">
              <div className="flex gap-8 flex-col">
                {products.map((product) => (
                  <CardCheckout key={product.id} {...product} />
                ))}
              </div>
            </div>
          </div>
          <div className="xs:max-lg:fixed xs:max-lg:bottom-0 bg-black  flex xs:max-lg:flex-col md:gap-3 xs:max-lg:border-0  justify-between xs:text-2xl xl:text-2xl 2xl:text-4xl border-solid border-t-2 border-white">
            <div className="flex items-center xs:max-lg:justify-between">
              <h3 className="xs:max-lg:py-4 lg:p-8 w-3/4">TOTAL: </h3>
              <span> ${totalPrice()}</span>
            </div>
            <div className="xs:border-b-2 lg:border-l-2" />
            <h3 className="xs:max-lg:text-center xs:max-lg:tracking-widest xs:max-lg:px-4  xs:max-lg:text-[12vw] p-8 text-black text-shadow-white">
              {" "}
              CHECKOUT
            </h3>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default ModalCheckout;
