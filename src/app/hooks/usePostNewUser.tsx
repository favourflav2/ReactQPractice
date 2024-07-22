import React from 'react'
import { useMutation } from '@tanstack/react-query'

type User = {
    name:string;
    title:string;
}

const usePostNewUser = async (user:User) => {

    const mutatation = useMutation({mutationFn:() =>{
        return fetch("https://dummyjson.com/posts/add");
    }})
    
  return (
    <div>
      
    </div>
  )
}

export default usePostNewUser
