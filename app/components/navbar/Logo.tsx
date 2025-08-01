"use client"

import { useRouter } from "next/navigation";

const Logo = () => {
  const router= useRouter()
  return (
    <div onClick={()=>router.push("/")} className=" text-lg md:text-2xl  cursor-pointer font-bold px-2 py-1 rounded-md var(--color-brand-background) bg-brand-logo text-brand-bg">
    Buyingo.com
    </div>
  );
};

export default Logo;