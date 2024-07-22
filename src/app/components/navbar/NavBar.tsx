import Link from 'next/link';
import * as React from 'react';

export interface INavBarProps {
}

export default function NavBar (props: INavBarProps) {
  return (
    <div className="w-full h-[60px] bg-gray-300/70 text-white p-4 ">
      {/* Content */}
      <div className="w-full h-auto flex items-center justify-end ">
        <Link href="/">
          <h1>Products</h1>
        </Link>
      </div>
    </div>
  );
}
