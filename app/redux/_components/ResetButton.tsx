"use client";
import { resetState } from "@/lib/features/CounteState/CounterSlice";
import React from "react";
import { useDispatch } from "react-redux";

export default function ResetButton() {
  const dispatch = useDispatch();
  return (
    <div>
      <h1 className="text-center mb-4">component 3</h1>
      <div className="flex flex-col items-center border p-10">
        <button
          onClick={() => dispatch(resetState())}
          className=" w-40 h-10 border rounded bg-red-300 px-4 text-gray-600 font-semibold"
        >
          Reset Counter
        </button>
      </div>
    </div>
  );
}
