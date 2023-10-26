"use client";
import { useLocalStorage } from "usehooks-ts";
import Image from "next/image";
import React, { Fragment, useCallback, useState } from "react";
import logoSmall from "../../public/logo-sm.svg";
import { Product } from "../../data/products.types";
import * as Dialog from "@radix-ui/react-dialog";
import ModalCheckout from "./ModalCheckout.component";

const Navbar = () => {
  return (
    <>
      <nav className="2xl:px-32 mb-10 xs:pt-8 xs:pl-4 xs:pr-4  md:p-8  md:pr-7 w-full flex justify-between text-center items-center ">
        <div className="xs:hidden md:hidden lg:block">
          <Image src="/logo.svg" width={200} height={200} alt="logo-basement" />
        </div>
        <div className="lg:hidden">
          <Image src={logoSmall} className="w-10" alt="logo-basement" />
        </div>
        <div className="flex xs:hidden md:hidden lg:block">
          <Image
            src="/navbar.svg"
            className="w-72 xl:w-80"
            priority={true}
            width={100}
            height={200}
            alt="icon-basement"
          />
        </div>
        <ModalCheckout />
      </nav>
    </>
  );
};

export default Navbar;

