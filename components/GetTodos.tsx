import { deleteTodo } from "@/lib/action";
import Todo from "@/models/todoModel";
import React from "react";

export default async function GetTodos() {
  try {
    const todos = await Todo.find();
    if (todos.length === 0) {
      return <h1 className="text-red-400 font-bold text-xl">You have no todos</h1>;
    } else {
      const deadLineToDate = (todoDeadline: any) => {
        const deadlineDate = new Date(todoDeadline);

        // Extracting day, month, and year components from the Date object
        const day = deadlineDate.getDate();
        const month = deadlineDate.getMonth() + 1; // Months are zero-based, so add 1
        const year = deadlineDate.getFullYear();

        // Formatting the date as MM/DD/YYYY
        return `${month}/${day}/${year}`;
      };

      // Creating a new Date object from the given string
      return (
        <div className="w-72 mt-8">
          <h2 className="text-center text-green-400 font-bold mb-4">My Todos</h2>
          {todos.map((todo) => (
            <div key={todo._id} className="flex flex-col items-center gap-2 p-2 border-blue-400 border-2 rounded my-4">
              <div className="flex flex-col gap-2 justify-center items-center ">
                <h3>{todo.todo as string}</h3>
                <p>{deadLineToDate(todo.todoDeadline)}</p>
              </div>
              <form action={deleteTodo}>
                <input
                  hidden
                  type="text"
                  name="id"
                  defaultValue={todo._id.toString()}
                />
                <button className="border rounded px-2 bg-red-400">
                  delete
                </button>
              </form>
            </div>
          ))}
        </div>
      );
    }
  } catch (error) {
    console.log(error);
  }
}
