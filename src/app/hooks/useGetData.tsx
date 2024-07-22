import * as React from 'react';
import axios from "axios";


export type Product = {
  title: string;
  thumbnail: string;
  images: Array<string>;
  id: number;
}

export default function useGetData () {
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<any>("");
  const [data, setData] = React.useState<null | Array<Product>>(null);

  

  async function getData() {
    try {
      setIsLoading(true);
      const res = await fetch("https://dummyjson.com/products?limit=10&skip=10");
      const data = await res.json()
      setData(data.products);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setError(e);
    }
  }

  React.useEffect(() => {
    getData();
  }, []); // eslint-disable-line

  return {
    getData,
    data,
    setData,
    isLoading,
    setIsLoading,
    error,
  };
}
