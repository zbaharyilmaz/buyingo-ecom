"use client";
import textClip from "@/utils/TextClip";
import { Rating } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ProductCard = ({ product }: { product: any }) => {
  const router = useRouter();
  let productRating =
    product?.reviews?.reduce((acc: number, item: any) => acc + item.rating, 0) /
    (product?.reviews?.length || 1);
  return (
    <div onClick={() => router.push(`/product/${product.id}`)} className="w-[240px] shadow-lg p-2">
      <div className="relative h-[150px]">
        <Image
          src={product.image}
          fill
          alt="Product Image"
          className="object-cover"
        />
      </div>
      <div className="text-center mt-2 space-y-1">
        <div>{textClip(product.name)}</div>
        <Rating name="read-only" value={productRating} readOnly />
        <div className="text-brand-logo font-bold text-lg md:text-xl">
          {product.price} $
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
