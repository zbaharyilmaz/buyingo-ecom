import Heading from "../general/Heading";
import ProductCard from "./ProductCard";
import {products} from "@/utils/Products"

const Products = () => {
  return (
    <div>
        <Heading text="All Products"/>
        <div>
            {
                products.map((product)=>
                <ProductCard key={product.id} product={product}/>)
            }
        </div>
    </div>
  );
};

export default Products;