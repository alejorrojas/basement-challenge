interface Option {
  label: string;
  values: string[];
}
export interface Product {
  id: string;
  image: string;
  description: string;
  price: number;
  name: string;
  options: Option[];
}

export interface ProductCheckout extends Product {
  quantity: number;
  checkoutSize?: string;
}
