import { productListApi } from "../schemas/productListDataSchema";
import { useQuery } from "@tanstack/react-query";

const useGetProductDataWithZod = (fetchOnMount:boolean) => {
  const { data, isLoading, error, isFetching, refetch } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("https://dummyjson.com/products?limit=10&skip=10");
      const data = await res.json();

      // client side validation
      const zodValidatingData = productListApi.safeParse(data);

      // Not sure how to handle errors here ... I can loop through array and return and throw ... but going to ask if theres another way
      if (!zodValidatingData.success) {
        const errorMessageArray = zodValidatingData.error.issues;
        console.error(errorMessageArray);
        throw new Error("Oh no!");
      }

      const validatedData = zodValidatingData.data;

      return validatedData
    },
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    enabled:fetchOnMount
  });

  return {
    data,
    isLoading,
    isFetching,
    error,
    refetch
  };
};

export default useGetProductDataWithZod;
