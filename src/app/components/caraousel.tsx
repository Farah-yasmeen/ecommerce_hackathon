import Image from "next/image";
import women from "@/images/shop-hero-1-product-slide-1 (1).jpg";

export default function Carausel() {
    return (
        <div className="relative w-full max-w-[1440px] h-[716px] mx-auto">
            {/* Carousel Image */}
            <div className="absolute inset-0">
                <Image 
                    src={women} 
                    alt="women" 
                    layout="fill" 
                    objectFit="cover" 
                    className="w-full h-full"
                />
            </div>

            {/* Content Overlay */}
            <div className="absolute top-1/4 left-[10%] flex flex-col gap-6 z-10">
                <h5 className="font-Montserrat font-semibold text-[16px] leading-[24px] text-white">
                    SUMMER 2020
                </h5>
                <h1 className="font-Montserrat font-semibold text-[58px] leading-[80px] text-white max-w-[600px]">
                    NEW COLLECTION
                </h1>
                <h4 className="font-Montserrat font-normal text-[20px] leading-[30px] text-white max-w-[500px]">
                    We know how large objects will act, but things on a small scale.
                </h4>
                <button className="w-[221px] h-[62px] rounded-[5px] bg-[#2DC071] text-white text-[24px] font-Montserrat leading-[32px] flex items-center justify-center">
                    SHOP NOW
                </button>
            </div>
        </div>
    );
}
