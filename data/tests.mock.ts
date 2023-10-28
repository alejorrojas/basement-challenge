//Fake product
export const fakeProduct = {
  id: "test-tshirt",
  image: "/products/test.png",
  description: "Unisex Basic Testing T-shirt",
  price: 200,
  name: "Black Testing t-shirt",
  options: [
    {
      label: "size",
      values: ["S", "M", "L", "XL"],
    },
  ],
};

//Fake products list from the storage
export const fakeProductsCheckout = [
  { ...fakeProduct, quantity: 1, checkoutSize: "S" },
];
