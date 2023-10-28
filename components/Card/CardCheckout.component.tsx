import React, { FC } from "react";
import { Product, ProductCheckout } from "../../data/products.types";
import Image from "next/image";
import { useLocalStorage } from "usehooks-ts";

const CardCheckout: FC<Product> = ({
  image,
  name,
  description,
  id,
  options,
  price,
}) => {
  const [products, setProducts] = useLocalStorage<ProductCheckout[]>(
    "products",
    [],
  );

  const productIndex = products.findIndex((product) => product.id === id);
  //Target the specific product
  const checkoutProduct = products[productIndex];
  //Make a copy of the products array
  const updatedProducts = [...products];

  const addQuantity = () => {
    const newQuantity = checkoutProduct?.quantity + 1;

    //Modify just the selected element
    updatedProducts[productIndex].quantity = newQuantity;
    setProducts(updatedProducts);
  };

  const removeQuantity = () => {
    const newQuantity = checkoutProduct?.quantity - 1;

    //Delete the product
    if (newQuantity == 0) {
      const filterProducts = products.filter((product) => product.id !== id);
      setProducts(filterProducts);
    } else {
      //Modify just the selected element
      updatedProducts[productIndex].quantity = newQuantity;
      setProducts(updatedProducts);
    }
  };

  const updateSize = (newSize: string) => {
    //Modify just the selected element
    updatedProducts[productIndex].checkoutSize = newSize;
    setProducts(updatedProducts);
  };

  return (
    <div className="product-checkout flex border-solid xs:max-md:p-2 border-2 xs:max-md:border-[1px] border-white w-full  p-4 gap-3 2xl:gap-10">
      <Image
        className="bg-gradient-to-t from-[#1c1c1c] xs:w-24 md:w-32  lg:max-2xl:w-36 xl:w-44 2xl:w-48"
        width={200}
        height={300}
        src={image}
        alt={name}
      />

      <div className="flex flex-col justify-between w-full">
        <header className="flex flex-col gap-1 ">
          <h3 className="xs:max-md:text-xs text-left text-[1rem] 2xl:text-xl">
            {name.toUpperCase()}
          </h3>
          <h4 className="xs:text-xs text-base text-left 2xl:text-lg text-[#999999] ">
            {description}
          </h4>
        </header>

        <footer className="xs:max-lg:mt-2 relative w-full flex justify-between">
          <div className="flex flex-col gap-4">
            <div className="flex xs:gap-4 gap-8 items-center">
              <h4 className="xs:max-md:text-xs  text-[1rem] 2xl:text-xl">
                QUANTITY:{" "}
              </h4>
              <div className="m-0 xs:w-16 xs:px-2  2xl:py-2  xl:px-5 gap-1 items-center md:w-24 flex justify-between xs:max-md:text-xs  md:text-lg xs:border-2 border-[3px] rounded-[2rem] border-solid border-white cursor-pointer">
                <button onClick={removeQuantity}>-</button>
                <span
                  data-cy="quantity"
                  data-testid="quantity"
                  className="xs:text-xs text-[1rem] 2xl:text-lg"
                >
                  {checkoutProduct?.quantity}
                </span>
                <button onClick={addQuantity}>+</button>
              </div>
            </div>

            <div className="sizes flex  lg:justify-between xs:max-lg:flex-col xs:max-lg:items-start gap-1 2xl:gap-6">
              <div className="flex items-center  xs:max-md:gap-1 gap-3">
                <h4 className="xs:max-md:text-xs text-[1rem] 2xl:text-xl">
                  SIZE:{" "}
                </h4>
                {options[0].values.map((value) => (
                  <button
                    data-testid="size"
                    onClick={() => updateSize(value)}
                    className={`${
                      value === checkoutProduct.checkoutSize
                        ? "border-white border-2  rounded-full "
                        : "border-black border-2  rounded-full "
                    } xs:max-md:border-[1px] xs:px-1 xs:max-lg:w-6 xs:max-lg:h-6 xl:w-9 xl:h-9 xl:p-1 2xl:w-10 2xl:h-10 2xl:p-2 xs:max-md:text-xs   text-sm`}
                    key={value}
                    id={value}
                  >
                    {value}
                  </button>
                ))}
              </div>
              <h3 className="xs:max-md:text-base lg:absolute lg:right-0 md:text-xl 2xl:text-4xl">
                ${price}
              </h3>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default CardCheckout;
