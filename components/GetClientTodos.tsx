"use client";

import React, { useState } from "react";
import DeleteButton from "./DeleteButton";

function GetClientTodos(props:any) {
    const { todos } = props;
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const deadLineToDate = (todoDeadline: any) => {
    const deadlineDate = new Date(todoDeadline);
    const day = deadlineDate.getDate();
    const month = deadlineDate.getMonth() + 1; // Months are zero-based, so add 1
    const year = deadlineDate.getFullYear();
    return `${month}/${day}/${year}`;
  };

  return (
    <div className="w-72 mt-8">
      <h2
        className="text-center text-green-400 font-bold mb-4 cursor-pointer"
        onClick={toggleExpand}
      >
        My Todos
      </h2>
        <div className={`${isExpanded ? 'h-full' : 'h-0'} transition-all duration-300 ease-in-out overflow-hidden `}>
          {todos.length === 0 ? (
            <h1 className="text-red-400 font-bold text-xl">You have no todos</h1>
          ) : (
            todos.map((todo: any) => (
              <div
                key={todo._id}
                className="flex flex-col items-center gap-2 p-2 border-blue-400 border-2 rounded my-4"
              >
                <div className="flex flex-col gap-2 justify-center items-center ">
                  <h3>{todo.todo}</h3>
                  <p>{deadLineToDate(todo.todoDeadline)}</p>
                </div>
                <DeleteButton id={todo._id.toString()} />
              </div>
            ))
          )}
        </div>
    </div>
  );
}

export default GetClientTodos;
