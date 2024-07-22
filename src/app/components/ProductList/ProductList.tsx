import * as React from 'react';
import LoadingCard from '../loading/LoadingCard';
import useGetData from '../hooks/useGetData';
import {ProductCard} from '../card/ProductCard';

export interface IProductListProps {
  lastProductSelectedImage: string;
  setLastProductSelectedImage: React.Dispatch<React.SetStateAction<string>>;
}

export default function ProductList ({lastProductSelectedImage,setLastProductSelectedImage}: IProductListProps) {

    const {isLoading, data, error} = useGetData()

    if (error) {
      return <div className="w-full flex items-center justify-center pt-10">There was an error fetching the data</div>;
    }
  return (
    <div className="w-[200px] h-full overflow-y-auto flex flex-col">
      {isLoading ? (
        <LoadingCard />
      ) : (
        data?.map((item) => (
          <ProductCard item={item} key={item.id} setLastProductSelectedImage={setLastProductSelectedImage} />
        ))
      )}
    </div>
  );
}
