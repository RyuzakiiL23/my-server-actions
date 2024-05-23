"use client";

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@/lib/store";
import { decrement, increment, resetState } from "@/lib/features/CounteState/CounterSlice";

export default function CreateCounter() {
  const dispatch = useDispatch();
  const countState = useSelector((state: RootState) => state.counter.value);
  const [val, setVal] = useState<number>(1);

  return (
    <div className="w-screen flex flex-col gap-10 mt-10 items-center">
      <h1 className="text-center font-bold text-2xl text-gray-600">
        Redux Counter
      </h1>
      <div className="flex flex-col gap-4 items-center">
        <div>
          <h1>Component 1</h1>
          <div className="flex flex-col items-center border p-10">
            <h2 className=" text-center py-1 px-4 font-semibold text-gray-600 ">
              counter Value
            </h2>
            <div className="flex gap-4 justify-center items-center">
              <button
                onClick={() => dispatch(decrement(val))}
                className="w-10 h-10 border rounded bg-green-300"
              >
                -
              </button>
              <h2 className="border rounded h-10 text-center py-1 px-4 font-semibold text-gray-600 ">
                {countState}
              </h2>
              <button
                onClick={() => dispatch(increment(val))}
                className="w-10 h-10 border rounded bg-green-300"
              >
                +
              </button>
            </div>
          </div>
        </div>

        <div>
          <h1>Component 2</h1>
          <div className="flex flex-col items-center border p-10">
            <h2 className=" text-center py-1 px-4 font-semibold text-gray-600 ">
              Increment by
            </h2>
            <div className="flex gap-4 justify-center items-center">
              <button
                onClick={() => setVal(val - 1)}
                className="w-10 h-10 border rounded bg-cyan-300"
              >
                -
              </button>
              <h2 className="border rounded h-10 text-center py-1 px-4 font-semibold text-gray-600 ">
                {val}
              </h2>
              <button
                onClick={() => setVal(val + 1)}
                className="w-10 h-10 border rounded bg-cyan-300"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1>component 3</h1>
          <div className="flex flex-col items-center border p-10">
        <button
          onClick={() => dispatch(resetState())}
          className=" w-40 h-10 border rounded bg-red-300 px-4 text-gray-600 font-semibold"
        >
          Reset Counter
        </button>
        </div>
      </div>
    </div>
  );
}
