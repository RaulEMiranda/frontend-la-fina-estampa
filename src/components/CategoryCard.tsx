import Image from "next/image";
import shape from "../../public/shape";

export default function CategoryCard({ title }: { title: string }) {
  return (
    <div className="w-[160px] h-[240px] md:w-[210px] md:h-[270px] lg:w-[240px] lg:h-[300px] relative flex items-end justify-center">
      {shape()}

      <div className="relative flex flex-col gap-2 items-center z-10">
        <h3 className="font-bold text-text text-xl md:text-2xl lg:text-3xl">{title}</h3>
        <Image
          src="/capitan.jpg"
          width={120}
          height={120}
          alt={title}
          className="md:w-[150px] md:h-auto "
        />
      </div>
    </div>
  );
}
