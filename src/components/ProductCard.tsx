import Image from "next/image";
import shape from "../../public/shape";
import { Star } from "lucide-react";
import { Button } from "./ui/button";

export default function ProductCard() {
  return (
    <div className="w-[160] h-[240px] md:w-[210px] md:h-[270px] lg:w-[240px] lg:h-[300px] relative flex items-end justify-center">
      {shape()}
      <div className="text-red-500 font-bold px-2 absolute top-4 right-0">99% off</div>
      <div className="w-full text-xs md:text-base p-4 relative z-10">
        <div className="">
          <Image
            src="/polo.png"
            width={120}
            height={120}
            alt={"Hola"}
            className="mx-auto lg:w-[150px]"
          />
        </div>
        <p>Polo - Rick and Morty</p>
        <div className="flex justify-around">
          <p className="py-1">S/. 999.99</p>
          <p className="flex">
            <Star className="w-3 md:w-4 fill-amber-500 stroke-amber-500" />
            <Star className="w-3 md:w-4 fill-amber-500 stroke-amber-500" />
            <Star className="w-3 md:w-4 fill-amber-500 stroke-amber-500" />
            <Star className="w-3 md:w-4 fill-amber-500 stroke-amber-500" />
            <Star className="w-3 md:w-4 fill-amber-500 stroke-amber-500" />
          </p>
        </div>
        <div className="flex item-center justify-center">
          <Button className="py-1">Comprar</Button>
        </div>
      </div>
    </div>
  );
}
