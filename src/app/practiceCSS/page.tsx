import React from 'react'
import { QueryCache } from "@tanstack/react-query";

export default function PracticePage() {

  return (
    <div className="max-h-[calc(100vh_-_70px)] pt-[60px]">
     

      {/* Body Content */}
      <div className="flex flex-col">
        <div className='h-[400px] bg-green-400'>This is about everything</div>

        <div className='h-[400px] bg-red-300 sticky top-[60px]'>hello this is the pracitce page</div>

        <div className='h-[400px] bg-yellow-300'>This is a block element</div>
      </div>
    </div>
  );
}
