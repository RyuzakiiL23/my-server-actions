"use client";

import { createTodos } from "@/lib/action";
import { useRef, useState } from "react";
import SubmitButton from "./SubmitButton";

export default function Forms() {
  const [errorRes, setErrorRes] = useState<{
    todo: string;
    todoDeadline: string;
  }>({
    todo: "",
    todoDeadline: "",
  });

  // we are using useRef to reset the form after submission
  const ref = useRef<HTMLFormElement>(null);
  const clientAction = async (formData: FormData) => {
    todo: formData.get("todo");
    todoDeadline: formData.get("todoDeadline");
    let res: any;
    try {
      res = await createTodos(formData);
      if (res) {
        setErrorRes(res);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form
      ref={ref}
      action={async (FormData) => {
        (errorRes.todo === '' && errorRes.todoDeadline === '') && ref.current?.reset();
        await clientAction(FormData);
      }}
      className="flex flex-col"
    >
      <h2 className="text-center text-green-400 font-bold">Add Todo</h2>
      <label htmlFor="todo" className="py-2">
        Todo
      </label>
      <input
        type="text"
        name="todo"
        className={` w-62 h-10 p-2 ${
          errorRes.todo ? "border-red-500 border-2" : ""
        }`}
      />

      <span className="text-red-400">{errorRes.todo}</span>
      <label htmlFor="todoDeadline" className="py-2">
        Deadline
      </label>
      <input type="date" name="todoDeadline" className=" w-62 h-10 p-2" />
      <span className="text-red-400">{errorRes.todoDeadline}</span>
      <SubmitButton />
    </form>
  );
}
