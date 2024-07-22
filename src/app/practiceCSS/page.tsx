'use client'
import React from 'react'
import { QueryCache } from "@tanstack/react-query";
import useGetProductDataWithZod from '../hooks/useGetProductDataWithZod';
import LoadingCard from '../components/loading/LoadingCard';
import { ProductCard } from '../components/card/ProductCard';

export default function PracticePage() {

 

  const {isLoading, isFetching, data, error, refetch} = useGetProductDataWithZod(false)

    if (error) {
      return <div className="w-full flex items-center justify-center pt-10">There was an error fetching the data</div>;
    }

  return (
    <div className="max-h-[calc(100vh_-_70px)] ">
      {/* Body Content */}
      <div className="flex flex-col">
        <div className="h-[400px] bg-green-400">Fetch Data on click</div>

        <div className="flex flex-col">
          <button onClick={()=>refetch()} className="bg-red-500 rounded-2xl p-2">Fetch Data</button>

          <div className="grid grid-cols-1 border border-gray-300 gap-3">
            {isLoading || isFetching ? (
              <LoadingCard/>
            ) : (
              data?.products.map((item) => (
                <ProductCard item={item} key={item.id} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
