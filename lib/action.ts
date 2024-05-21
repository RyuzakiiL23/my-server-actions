"use server";
import Todo from "@/models/todoModel";
import { revalidatePath } from "next/cache";
import { connectToMongoDB } from "./db";

export const createTodos = async (formData: FormData) => {
  // Extracting todo content and time from formData
  const todo = formData.get("todo");
  const todoDeadline = formData.get("todoDeadline");
  try {
    // Creating a new todo using Todo model
    const newTodo = await Todo.create({
      todo,
      todoDeadline,
    });
    // Saving the new todo
    newTodo.save();
    // Triggering revalidation of the specified path ("/")
    revalidatePath("/");
    // Returning the string representation of the new todo
    return newTodo.toString();
  } catch (error) {
    if (error instanceof Error) {
      console.log(error?.message, typeof error?.message);

      //this piece of code will convert our error message to an object
      const errorString = error.message;

      // Define a regular expression pattern to match key-value pairs
      const pattern = /(\w+): Path `([^`]+)` is required/g;

      // Initialize an empty object to store key-value pairs
      const errorObject: Record<string, string> = {};

      // Iterate over matches in the error string
      let match;
      while ((match = pattern.exec(errorString)) !== null) {
        const [, key, value] = match;
        errorObject[key] = value + " is required";
      }

      console.log(errorObject);
      return errorObject;
      //   return { message: "error creating todo" };
      //   return (error)
    }
    // return { message: "error creating todo" };
  }
};

export const deleteTodo = async (id: string) => {
  // Extracting todo ID from formData
  const todoId = id;
  try {
    // Deleting the todo with the specified ID
    await Todo.deleteOne({ _id: todoId });
    // Triggering revalidation of the specified path ("/")
    revalidatePath("/");
    // Returning a success message after deleting the todo
    return "todo deleted";
  } catch (error) {
    // Returning an error message if todo deletion fails
    return { message: "error deleting todo" };
  }
};

export const getTodos = async () => {
  try {
    const todos = await Todo.find();
    // Convert each todo to a plain object and serialize the _id
    return todos.map((todo) => ({
      _id: todo._id.toString(),
      todo: todo.todo,
      todoDeadline: todo.todoDeadline,
      createdAt: todo.createdAt,
      updatedAt: todo.updatedAt,
      __v: todo.__v,
    }));
  } catch (error) {
    // Returning an error message if fetching todos fails
    return { message: "error fetching todos" };
  }
};
