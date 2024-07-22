import * as React from "react";
import LoadingCard from "../loading/LoadingCard";
import useGetData from "../../hooks/useGetData";
import { ProductCard } from "../card/ProductCard";
import { Product } from "../../hooks/useGetData";
import { useQuery } from "@tanstack/react-query";
import useGetProductDataWithZod from "@/app/hooks/useGetProductDataWithZod";

export interface IProductListProps {
  lastProductSelectedImage: string;
  setLastProductSelectedImage: React.Dispatch<React.SetStateAction<string>>;
}


export default function ProductList({ lastProductSelectedImage, setLastProductSelectedImage }: IProductListProps) {
 
  const {data, isFetching, isLoading, error} = useGetProductDataWithZod(true)
  
  

  if (error) {
    return <div className="w-full flex items-center justify-center pt-10">There was an error fetching the data</div>;
  }
  return (
    <div className="w-[200px] h-full overflow-y-auto flex flex-col">
      {isLoading || isFetching ? (
        <LoadingCard />
      ) : (
        data?.products.map((item) => <ProductCard item={item} key={item.id} setLastProductSelectedImage={setLastProductSelectedImage} />)
      )}
    </div>
  );
}
