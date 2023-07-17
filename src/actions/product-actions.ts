"use server";

import { CreateProductInput } from "@/type/product";
import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

// Get all operation
export const getAllProduct = async () => {
  const response = await fetch(
    "https://64b37b180efb99d86267d404.mockapi.io/api/products",
    {
      cache: "no-cache",
      next: {
        tags: ["products"],
      },
    }
  );
  const products = await response.json();
  return products;
};

// get by ID operation
export const getProductID = async (params: any) => {
  const response = await fetch(
    `https://64b37b180efb99d86267d404.mockapi.io/api/products/${params?.id}`
  );
  return await response.json();
};

// write operation
export const addProductToDatabase = async (data: FormData) => {
  const product_name = data.get("product_name")?.toString();
  const product_price = data.get("product_price")?.toString();
  const product_desc = data.get("product_desc")?.toString();

  if (!product_name || !product_price) return;

  const newProduct: CreateProductInput = {
    product_name,
    product_price,
    product_desc,
  };

  await fetch("https://64b37b180efb99d86267d404.mockapi.io/api/products", {
    method: "POST",
    body: JSON.stringify(newProduct),
    headers: {
      "Content-Type": "application/json",
    },
  });

  revalidateTag("products");
};

// update operation
export const editProductToDatabase = async (e: FormData) => {
  const product_name = e.get("product_name")?.toString();
  const product_price = e.get("product_price")?.toString();
  const product_desc = e.get("product_desc")?.toString();
  const product_id = e.get("product_id")?.toString();

  if (!product_name || !product_price) return;

  const edited: CreateProductInput = {
    product_name,
    product_price,
    product_desc,
  };

  await fetch(
    `https://64b37b180efb99d86267d404.mockapi.io/api/products/${product_id}`,
    {
      method: "PUT",
      body: JSON.stringify(edited),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  revalidateTag("products");
};

// delete operation
export const deleteProductToDatabase = async (productID: string) => {
  if (!productID) return;

  const response = await fetch(
    `https://64b37b180efb99d86267d404.mockapi.io/api/products/${productID}`,
    {
      method: "DELETE",
    }
  );
  const data = await response.json();

  revalidateTag("products");
};
