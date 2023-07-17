"use client";

import { deleteProductToDatabase } from "@/actions/product-actions";
import { useTransition } from "react";

type IProps = {
  productId: string;
};

const DeleteProduct = ({ productId }: IProps) => {
  const [isPending, startTransition] = useTransition();

  return (
    <>
      <button
        type="submit"
        onClick={() =>
          startTransition(() => deleteProductToDatabase(productId))
        }
        className="bottom-10 right-10 border bg-red-500 text-white p-2 rounded-md w-40"
      >
        {isPending ? "deleting..." : "delete"}
      </button>
    </>
  );
};

export default DeleteProduct;
