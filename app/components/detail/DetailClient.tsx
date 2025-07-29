"use client";

import Image from "next/image";
import PageContainer from "../containers/PageContainer";
import Counter from "../general/Counter";
import { useEffect, useState } from "react";
import { Rating } from "@mui/material";
import Button from "../general/Button";
import Comment from "./Comment";
import Heading from "../general/Heading";
import UseCart from "@/hooks/UseCart";

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
  const { productCartQty, addToBasket, cartPrdcts } = UseCart();
  const [displayButton, setDisplayButton] = useState(false);
  const [cardProduct, setCardProduct] = useState<CardProductProps>({
    id: product.id,
    name: product.name,
    description: product.description,
    price: product.price,
    quantity: 1,
    image: product.image,
    stock: product.inStock,
  });
  console.log(cartPrdcts);
  useEffect(() => {
    setDisplayButton(false);
    let controlDisplay: any = cartPrdcts?.findIndex(
      (cart) => cart.id == product.id
    );
    if (controlDisplay > -1) {
      setDisplayButton(true);
    }
  }, [cartPrdcts]);
  const increaseFunct = () => {
    if (cardProduct.quantity == 10) return; //erken çıkış
    setCardProduct((prev) => ({ ...prev, quantity: prev.quantity + 1 }));
  };
  const decreaseFunct = () => {
    if (cardProduct.quantity == 1) return;
    setCardProduct((prev) => ({ ...prev, quantity: prev.quantity - 1 }));
  };
  let productRating =
    product?.reviews?.reduce((acc: number, item: any) => acc + item.rating, 0) /
    (product?.reviews?.length || 1);
  return (
    <div className="my-10">
      <PageContainer>
        <div className="block md:flex gap-10 justify-center">
          <div className="relative h-[200px] md:h-[400px] w-[200px] md:w-[400px] mb-3 md:mb-0">
            <Image
              src={product?.image}
              alt={product?.name}
              fill
              className="rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-3">
            <div className="text-xl md:text-2xl">{product?.name}</div>
            <Rating name="read-only" value={productRating} readOnly />
            <div className="text-brand-textlogo">{product?.description}</div>
            <div className="flex items-center gap-2">
              <div className="font-bold">Stock:</div>
              {product?.inStock ? (
                <div className="text-green-700">In Stock</div>
              ) : (
                <div className="text-red-700">Out of Stock</div>
              )}
            </div>
            {displayButton ? (
              <>
                <Button
                  text="Product in Cart"
                  small
                  outline
                  onClick={() => {
                    addToBasket(cardProduct);
                  }}
                />
              </>
            ) : (
              <>
                <Counter
                  increaseFunct={increaseFunct}
                  decreaseFunct={decreaseFunct}
                  cardProduct={cardProduct}
                />
                <Button
                  text="Add to Cart"
                  small
                  onClick={() => addToBasket(cardProduct)}
                />
              </>
            )}

            <div className="text-lg md:text-2xl text-brand-logo font-bold ">
              {product.price} $
            </div>
          </div>
        </div>
        <Heading text="Comments" />
        <div>
          {product?.reviews?.map((prd: any) => (
            <Comment key={prd.id} prd={prd} />
          ))}
        </div>
      </PageContainer>
    </div>
  );
};

export default DetailClient;
