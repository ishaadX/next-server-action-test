export interface Products {
  id?: number;
  product_name: string;
  product_price: string;
  product_desc: string;
}

export interface Product {
  id?: number;
  product_name: string;
  product_price: string;
  product_desc: string;
}

export interface CreateProductInput {
  product_name: string;
  product_price: string;
  product_desc: string;
}
