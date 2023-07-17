import { Products } from "@/type/product";
import Link from "next/link";
import ProductControl from "@/componenet/products/product-control";

type IProps = {
  products?: Products[] | null;
};

const ProductLists: React.FC = ({ products }: IProps) => {
  return (
    <>
      <h3 className="text-3xl font-bold text-center mb-10">List of products</h3>
      <div className="flex flex-wrap gap-5">
        {products &&
          products?.map((product: Products) => {
            return (
              <>
                <div key={product?.id} className="">
                  <Link href={`/posts/${product?.id}`}>
                    <h4 className="text-xl font-bold mb-2">
                      {product?.product_name}
                    </h4>
                  </Link>
                  <p>${product?.product_price}</p>
                  <ProductControl product={product} />
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};

export default ProductLists;
