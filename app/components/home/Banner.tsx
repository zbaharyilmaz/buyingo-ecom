import Image from "next/image";

const Banner = () => {
  return (
    <div className="h-[237px] flex justify-center items-center bg-brand-bg">
        <div className="h-[137px] relative w-full"> 
            <Image src={"/banner.png"} fill alt="Banner Image"/>
        </div>

    </div>
  );
};

export default Banner;