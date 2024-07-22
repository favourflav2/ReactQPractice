import { Skeleton } from "@mui/material";
import * as React from "react";

export interface ILoadingCardProps {}

export default function LoadingCard(props: ILoadingCardProps) {
  const arr = Array(10).fill(0);

  return (
    <>
      {arr.map((item, index) => (
        <div key={index} className="my-2 h-auto">
          <Skeleton variant="rectangular" className="w-full" height={200} />
        </div>
      ))}
    </>
  );
}
