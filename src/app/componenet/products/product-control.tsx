"use client";

import DeleteProduct from "@/app/componenet/products/delete-product";
import { Product } from "@/type/product";
import { useState } from "react";
import EditProduct from "@/app/componenet/products/edit-product";

type IProps = {
  product: Product;
};

const ProductControl = ({ product }: IProps) => {
  const [edit, setEdit] = useState(false);

  const handleEdit = (e) => {
    setEdit(!e.target.value);
  };

  return (
    <>
      {edit ? (
        <EditProduct product={product} />
      ) : (
        <button
          type="submit"
          onClick={(e) => handleEdit(e)}
          className="bottom-10 right-10 border bg-blue-500 text-white p-2 rounded-md w-40"
        >
          edit
        </button>
      )}

      <br />
      <DeleteProduct productId={product?.id} />
    </>
  );
};

export default ProductControl;
