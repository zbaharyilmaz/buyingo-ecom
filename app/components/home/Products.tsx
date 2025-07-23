import Heading from "../general/Heading";
import ProductCard from "./ProductCard";
import { products } from "@/utils/Products";

const Products = () => {
  return (
    <div className=" p-5 md:p-10">
      <Heading text="All Products" />
      <div className="flex justify-center items-center flex-wrap gap-3 md:gap-10 px-3 md:px-10">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
