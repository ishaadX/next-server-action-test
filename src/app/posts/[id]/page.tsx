import { getProductID } from "@/actions/product-actions";

const ProductItem = async ({ params }: any) => {
  const post = await getProductID(params);

  return (
    <>
      <main className="">
        <div className="flex flex-wrap gap-5">
          <h2 className="text-3xl font-bold text-center mb-10">
            {post?.product_name}
          </h2>
        </div>

        <div className="flex flex-wrap gap-5">
          <p>{post?.product_price}</p>
          <p>{post?.product_desc}</p>
        </div>
      </main>
    </>
  );
};

export default ProductItem;
