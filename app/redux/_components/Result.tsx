"use client";

import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";

export default function Result() {
  const countState = useSelector((state: RootState) => state.counter.value);
  return (
    <div className="mt-4">
      <h1 className="text-center mb-4">Component 2</h1>
      <div className=" bg-yellow-100 flex flex-col items-center border p-10 w-64">
        <h2 className=" text-center py-1 px-4 font-semibold text-gray-600 ">
          Result
        </h2>
        <p className="border py-2 px-4 text-gray-600 font-bold">{countState}</p>
      </div>
    </div>
  );
}
