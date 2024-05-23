'use client';

import { decrement, increment } from "@/lib/features/CounteState/CounterSlice";
import { RootState } from "@/lib/store";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Counter() {
  const dispatch = useDispatch();
  const [val, setVal] = useState<number>(1);
  const countState = useSelector((state: RootState) => state.counter.value);
  return (
    <div className="flex gap-8 items-center">
      <div>
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
  );
}
