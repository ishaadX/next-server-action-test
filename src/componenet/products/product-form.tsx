import { addProductToDatabase } from "@/actions/product-actions";

const ProductForm: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-5 mb-10">
      <form
        action={addProductToDatabase}
        className="flex flex-col gap-5 max-w-xl mx-auto p-5"
      >
        <input
          type="text"
          name="product_name"
          className="border border-gray-300 p-2 rounded-md"
          placeholder="enter product name"
        />
        <input
          type="text"
          name="product_price"
          className="border border-gray-300 p-2 rounded-md"
          placeholder="enter product price"
        />

        <textarea
          name="product_desc"
          className="border border-gray-300 p-2 rounded-md"
          placeholder="enter product description"
        />

        <button className="border border-gray-500 text-black p-2 rounded-md">
          Add product
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
