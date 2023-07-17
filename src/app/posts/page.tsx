import ProductForm from "@/componenet/products/product-form";
import ProductLists from "@/componenet/products/product-lists";
// import { getAllProduct } from "@/actions/product-actions";
import { getAllProduct } from "@/actions/product-actions-prisma";

const Posts: React.FC = async () => {
  const products = await getAllProduct();

  return (
    <main className="">
      <h1 className="text-3xl font-bold text-center mb-10"> Add Products </h1>
      <ProductForm />
      <ProductLists products={products} />
    </main>
  );
};

export default Posts;
