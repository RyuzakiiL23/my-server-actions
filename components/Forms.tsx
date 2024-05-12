"use client";

import { createTodos } from "@/lib/action";
import { useRef } from "react";
import SubmitButton from "./SubmitButton";

export default function Forms() {
  // we are using useRef to reset the form after submission
  const ref = useRef<HTMLFormElement>(null);
  return (
    <form
      ref={ref}
      action={async (FormData) => {
        ref.current?.reset();
        await createTodos(FormData);
      }}
      className="flex flex-col"
    >
      <h2 className="text-center text-green-400 font-bold">Add Todo</h2>
      <label htmlFor="todo" className="py-2">
        Todo
      </label>
      <input type="text" name="todo" className="mb-2  w-62 h-10 p-2" />
      <label htmlFor="todoDeadline" className="py-2">
        Deadline
      </label>
      <input type="date" name="todoDeadline" className=" w-62 h-10 p-2" />
      <SubmitButton />
    </form>
  );
}
