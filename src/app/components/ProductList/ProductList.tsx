import * as React from "react";
import LoadingCard from "../loading/LoadingCard";
import useGetData from "../../hooks/useGetData";
import { ProductCard } from "../card/ProductCard";
import { Product } from "../../hooks/useGetData";
import { useGetProductDataWithZod } from "@/app/hooks/useGetProductDataWithZod";
import { useQuery } from "@tanstack/react-query";

export interface IProductListProps {
  lastProductSelectedImage: string;
  setLastProductSelectedImage: React.Dispatch<React.SetStateAction<string>>;
}


export default function ProductList({ lastProductSelectedImage, setLastProductSelectedImage }: IProductListProps) {
 
  const { data, isLoading, error, isFetching } = useQuery({
    queryKey: ["products"],
    queryFn: useGetProductDataWithZod,
    staleTime: 3600000,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });

  
console.log({
  isFetching:isFetching,
  loading:isLoading,
  data:data
})
  

  if (error) {
    return <div className="w-full flex items-center justify-center pt-10">There was an error fetching the data</div>;
  }
  return (
    <div className="w-[200px] h-full overflow-y-auto flex flex-col">
      {isLoading ? (
        <LoadingCard />
      ) : (
        data?.products.map((item) => <ProductCard item={item} key={item.id} setLastProductSelectedImage={setLastProductSelectedImage} />)
      )}
    </div>
  );
}
