
import DetailClient from "../../components/detail/DetailClient";
import { products } from "@/utils/Products";

type DetailProps={
    productId:string
}
const Detail= ({params}:{params:DetailProps}) => {
    const {productId} = params;
    console.log(params, "params");
    const product= products.find(product=>product.id==productId)
    console.log(product);

  return (
    <div>
        <DetailClient product={product}/>
    </div>
  );
};

export default Detail;