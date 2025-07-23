"use client";
import Image from "next/image";
import PageContainer from "../containers/PageContainer";
import Counter from "../general/Counter";
import { useState } from "react";

export type CardProductProps = {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
  stock: boolean;
};

const DetailClient = ({ product }: { product: any }) => {
  const [cardProduct, setCardProduct] = useState<CardProductProps>({
    id: product.id,
    name: product.name,
    description: product.description,
    price: product.price,
    quantity:1,
    image: product.image,
    stock: product.inStock,
  })
  const increaseFunct=()=>{}
  const decreaseFunct=()=>{}
  return (
    <div className="my-10">
      <PageContainer>
        <div className="block md:flex gap-10 justify-center">
          <div className="relative h-[400px] w-[400px]">
            <Image
              src={product?.image}
              alt={product?.name}
              fill
              className="rounded-lg"
            />
          </div>
          <div className="w-1/2 space-y-3">
            <div className="text-xl md:text-2xl">{product?.name}</div>
            <div className="text-brand-textlogo">{product?.description}</div>
            <div className="flex items-center gap-2">
              <div className="font-bold">Stock:</div>
              {product?.inStock ? (
                <div className="text-green-700">In Stock</div>
              ) : (
                <div className="text-red-700">Out of Stock</div>
              )}
            </div>
            <Counter increaseFunct={increaseFunct} decreaseFunct={decreaseFunct} cardProduct={cardProduct} />
          </div>
        </div>
      </PageContainer>
    </div>
  );
};

export default DetailClient;
