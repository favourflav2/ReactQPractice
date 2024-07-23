import React from "react";

const OptimisticUpdates = () => {
  return (
    <div className="flex flex-col items-center justify-center  h-[calc(100vh_-_60px)] ">
      <label className=" flex justify-between relative items-center group p-2 text-xl">
        <input type="checkbox" className="appearance-none" />
        <span
          className="w-16 flex items-center flex-shrink-0 ml-4 p-1 bg-gray-300 rounded-full after:w-8 
after:h-8 
after:bg-white 
after:rounded-full 
after:shadow-md"
        ></span>
      </label>

      <label className="relative flex justify-between items-center group p-2 text-xl my-10">
        Send 😺 memes to my inbox?
        <input type="checkbox" className="absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md" />
        <span className="w-16 h-10 flex items-center flex-shrink-0 ml-4 p-1 bg-gray-300 rounded-full duration-300 ease-in-out peer-checked:bg-green-400 after:w-8 after:h-8 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-6 group-hover:after:translate-x-1"></span>
      </label>
    </div>
  );
};

export default OptimisticUpdates;
