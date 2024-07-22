import Image from 'next/image';
import * as React from 'react';

export interface IModalIMadeProps {
  lastProductSelectedImage: string;
  setLastProductSelectedImage: React.Dispatch<React.SetStateAction<string>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ModalIMade ({lastProductSelectedImage, setLastProductSelectedImage, setOpen}: IModalIMadeProps) {
  return (
    <div className=" fixed inset-0  w-screen h-screen z-10 bg-black/80">
      <div className="relative w-full h-screen  flex items-center justify-center ">
        <div className="lg:w-[30%] z-100 bg-gray-300 md:w-[40%] sm:w-[45%] 2xl:w-[25%] w-[95%] flex flex-col p-4 relative">
          <button
            className=" absolute top-0 right-3"
            onClick={() => {
              setOpen(false);
              setLastProductSelectedImage("");
            }}
          >
            X
          </button>
          <Image src={lastProductSelectedImage} width={400} height={400} alt="toggle" />
        </div>
      </div>
    </div>
  );
}


