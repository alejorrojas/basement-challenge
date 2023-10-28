export const getProducts = async () => {
  const res = await import("../../data/products.mock.json");
  const data = res.default;

  return data;
};
