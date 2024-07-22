import * as React from "react";
import Image from "next/image";
import { Product } from "../hooks/useGetData";
import { getLastItemInArray } from "@/app/utils/getLastImageInArray";
export type ProductCardProps = {
  item: Product;
  setLastProductSelectedImage: React.Dispatch<React.SetStateAction<string>>;
};

const TEXT_LIMIT = 25
const TEXT_LIMIT_MIN = 20

export const ProductCard = ({ item, setLastProductSelectedImage }: ProductCardProps) =>  {
  return (
    <div
      className="w-full h-auto flex flex-col justify-center items-center border border-gray-300"
      onClick={() => getLastItemInArray(item.images,setLastProductSelectedImage, item)}
    >
      <h1 className="text-[12px]">{item.title.length >= TEXT_LIMIT_MIN ? item.title.slice(0, TEXT_LIMIT) + "..." : item.title}</h1>
      <Image src={item.thumbnail} width={500} height={500} alt="Picture of the author" />
    </div>
  );
}
