'use client'
import Image from "next/image";
import * as React from "react";
import ModalIMade from "./components/modal/Modal";
import ProductList from "./components/ProductList/ProductList";

export interface Product {
  title: string;
  thumbnail: string;
  images: Array<string>;
  id: number;
}

export default function Home() {
  const [lastProductSelectedImage, setLastProductSelectedImage] = React.useState("");
  const [open, setOpen] = React.useState(false);

 

  return (
    <div className={`w-full  max-h-[calc(100vh_-_60px)] flex `}>
      {/* Content */}
      <div className="w-full grid grid-cols-[12.5rem_1fr] ">
        {/* Left SIde */}
        <ProductList lastProductSelectedImage={lastProductSelectedImage} setLastProductSelectedImage={setLastProductSelectedImage} />

        {/* Right Side */}
        <div className="w-full flex flex-col h-auto items-center">
          {lastProductSelectedImage.length > 0 && (
            <Image
              src={lastProductSelectedImage}
              width={600}
              height={600}
              priority={true}
              alt="Picture of the author"
              onClick={() => setOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Modal */}
      {open && (
        <ModalIMade lastProductSelectedImage={lastProductSelectedImage} setLastProductSelectedImage={setLastProductSelectedImage} setOpen={setOpen} />
      )}
    </div>
  );
}
