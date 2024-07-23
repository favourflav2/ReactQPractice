"use client";
import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useGetDataFromPostgres from "../hooks/useGetDataFromPostgres";
import { CircularProgress } from "@mui/material";

type UserObj = {
  id?:string;
  name:string;
  title:string;
}



const PracticeMutation = () => {
  const [formData, setFormData] = React.useState({
    title: "",
    name: "",
  });
  const queryClient = useQueryClient();

  const {data,isFetching,isLoading,error} = useGetDataFromPostgres({ method: "GET", url: "http://localhost:3000/api/hello/" });

  const mutatation = useMutation({
    mutationFn: (user: UserObj) => {
      return fetch("http://localhost:3000/api/hello", {
        method: "POST",
        body: JSON.stringify(user),
      });
    },
    // Not need for optimistic update
    // onSuccess(data, variables, context) {
    // queryClient.invalidateQueries({ queryKey: ["database Fav"] });
    // },
    // onError(error, variables, context) {
    //   // Error goes here
    // },

    onMutate: (user) => {
      // called before the mutation fn is fired
    },
    onError: () => {

    },
    onSettled: () => {

    },
    mutationKey: ["database Fav"],
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutatation.mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((inputVal) => {
      return {
        ...inputVal,
        [e.target.name]: e.target.value,
      };
    });
  };
  return (
    <div className="flex flex-col p-3">
      <h1 className="flex items-center justify-center mt-10">This is the useMutation page for practice</h1>

      <form className="grid grid-cols-2" onSubmit={handleSubmit}>
        <div className="flex justify-center items-center flex-col mt-5 bg-red-300 py-4">
          <label htmlFor="name">Name</label>
          <input
            onChange={handleChange}
            type="text"
            className="border border-gray-300 outline-none rounded-lg p-2"
            name="name"
            id="name"
          />
        </div>

        <div className="flex justify-center items-center flex-col mt-5 bg-yellow-300 py-4">
          <label htmlFor="title">title</label>
          <input onChange={handleChange} type="text" className="border border-gray-300 outline-none rounded-lg p-2" name="title" id="title" />
        </div>

        <button className=" bg-green-500 p-2 my-10">Submit</button>
      </form>

      <div className="grid grid-cols-6">
        {
          isFetching || isLoading ? 
          (
            <>
            <CircularProgress />
            </>
          ) 
          : 
          (
            data?.map((item:any) => (
              <div className="border border-black p-2" key={item.id}>
                  <h1>{item.name}</h1>
                  <h1>{item.title}</h1>
              </div>
            ))
          )
        }
      </div>
    </div>
  );
};

export default PracticeMutation;
