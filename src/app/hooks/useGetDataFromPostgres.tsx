import React from 'react'
import { useQuery } from "@tanstack/react-query";

type GetDataProps = {
    method: "POST" | "GET" | "PUT" | "DELETE",
    body?:{
        [key:string]: any
    };
    url:string;
    key:Array<string>
}

const useGetDataFromPostgres = ({method, body,url, key}: GetDataProps) => {
const {data, isLoading, isFetching, error} = useQuery({
    queryKey:key,
    queryFn: async () => {
        const res = await fetch(url)
        const data = await res.json();

        return data
    }
})

return {
  data,
  isLoading,
  isFetching,
  error,
};
}

export default useGetDataFromPostgres
