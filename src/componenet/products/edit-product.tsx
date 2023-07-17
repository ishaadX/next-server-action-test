"use client";

import { editProductToDatabase } from "@/actions/product-actions";
import { Product } from "@/type/product";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useTransition } from "react";

type IProps = {
  product: Product;
};

const EditProduct = ({ product }: IProps) => {
  const [isPending, startTransition] = useTransition();

  const [name, setName] = useState(product?.product_name || "");
  const [price, setPrice] = useState(product?.product_price || "");
  const [description, setDescription] = useState(product?.product_desc || "");

  const handleName = (e: any) => {
    setName(e.target.value);
  };

  const handlePrice = (e: any) => {
    setPrice(e.target.value);
  };

  const handleDesc = (e: any) => {
    setDescription(e.target.value);
  };

  return (
    <>
      <div className="flex flex-wrap gap-5 mb-10">
        <form
          action={editProductToDatabase}
          className="flex flex-col gap-5 max-w-xl mx-auto p-5"
        >
          <input type="hidden" name="product_id" value={product?.id} />
          <input
            type="text"
            name="product_name"
            value={name}
            onChange={(e) => handleName(e)}
            className="border border-gray-300 p-2 rounded-md"
            placeholder="enter product name"
          />
          <input
            type="text"
            name="product_price"
            value={price}
            onChange={(e) => handlePrice(e)}
            className="border border-gray-300 p-2 rounded-md"
            placeholder="enter product price"
          />

          <textarea
            name="product_desc"
            value={description}
            onChange={(e) => handleDesc(e)}
            className="border border-gray-300 p-2 rounded-md"
            placeholder="enter product price"
          />

          <button
            type="submit"
            className="border border-gray-500 text-black p-2 rounded-md"
          >
            Edit product
          </button>
        </form>
      </div>
    </>
  );
};

export default EditProduct;
