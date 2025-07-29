"use client"
import UseCart from "@/hooks/UseCart";
import { SlBasket } from "react-icons/sl";
const CardCount = () => {
  const {cartPrdcts}=UseCart()
  return (
    <div className="hidden md:flex relative">
      <SlBasket size="25"/>
      <div className="absolute -top-1 -right-2 text-xs text-brand-bg bg-brand-logo w-5 h-5 flex items-center justify-center rounded-full">{cartPrdcts?.length}</div>
    </div>
  );
};

export default CardCount;