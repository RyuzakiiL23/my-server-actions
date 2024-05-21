"use client";

import { deleteTodo } from "@/lib/action";
import React from "react";

export default function DeleteButton(props: { id: string }) {
  return (
    <button
      onClick={async () => await deleteTodo(props.id)}
      className="border rounded px-2 bg-red-400"
    >
      delete
    </button>
  );
}
