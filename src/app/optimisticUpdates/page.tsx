"use client";
import React from "react";
import useGetDataFromPostgres from "../hooks/useGetDataFromPostgres";
import { CircularProgress } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const OptimisticUpdates = () => {
  const queryClient = useQueryClient();
  const { data, error, isLoading, isFetching } = useGetDataFromPostgres({
    method: "GET",
    url: "http://localhost:3000/api/btn",
    key: ["toggleBtn"],
  });

  const [isMutateLoading, setIsMutateLoading] = React.useState(false);



  function getRandomArbitrary(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
  }



   const valueThatDeterminesError = getRandomArbitrary(1, 4);



  const mutatation = useMutation({
    mutationKey: ["toggleBtn"],
     mutationFn: async (boolVal: boolean) => {
     if (valueThatDeterminesError % 2 === 0) {
      
       return fetch("http://localhost:3000/api/btn", {
         method: "PUT",
         body: JSON.stringify(boolVal),
       });
     } else {
      
      return Promise.reject(new Error("fail"));
     }
       },
    onMutate: async (boolVal) => {
      //* called before the mutation fn is fired
setIsMutateLoading(false);
      // cancel any out going refetches
      await queryClient.cancelQueries({ queryKey: ["toggleBtn"] });

      // snapshot previous state/value ... helps go back if mutation fails
      const prevState = queryClient.getQueryData(["toggleBtn"]);

      // Generate new data based on `prevData` and `variables`
      const newData = boolVal;

      // Optimistically update to the new value
      queryClient.setQueryData(["toggleBtn"], newData);

      return {
        prevState,
      };
    },
    onError: (error, _variables, context) => {
      // From context we can set the previous state to the current state when we have an error

        queryClient.setQueryData(["toggleBtn"], context?.prevState);
     

      // Display the appropriate error message
      //showNotification(error);
      
      console.log("eorrorordddddddddddd-d-d-d-d-d-d");
      
    },
    onSettled: (data, error, variables, context) => {
      // Invalidate the query to refetch the latest data
    
      queryClient.invalidateQueries({ queryKey: ["toggleBtn"] });
      setIsMutateLoading(false);
    },
  });

  function toggleBtn() {
    setIsMutateLoading(true);
    mutatation.mutate(data);
  }

  if (error) {
    return <div>There was an error geting data for btn</div>;
  }
  return (
    <div className="flex items-center justify-center  h-[calc(100vh_-_60px)] ">
      {isLoading || isMutateLoading ? (
        <CircularProgress />
      ) : (
        <label className=" flex justify-between relative items-center group p-2 text-xl">
          <input
            type="checkbox"
            className="absolute left-1/2 -translate-x-1/2 w-full h-full rounded-md"
            onChange={toggleBtn}
            checked={data}
          />
        </label>
      )}
    </div>
  );
};

export default OptimisticUpdates;
