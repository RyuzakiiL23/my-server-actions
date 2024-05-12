'use server';
import Todo from "@/models/todoModel";
import { revalidatePath } from "next/cache";
import { connectToMongoDB } from "./db";

export const createTodos = async (formData: FormData) => {
    await connectToMongoDB();
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
        console.log(error);
        return {message: 'error creating todo'};
    }
};

export const deleteTodo = async (id: FormData) => {
    // Extracting todo ID from formData
    const todoId = id.get("id");
    try {
        // Deleting the todo with the specified ID
        await Todo.deleteOne({_id: todoId});
        // Triggering revalidation of the specified path ("/")
        revalidatePath("/");
        // Returning a success message after deleting the todo
        return ('todo deleted');
    } catch (error) {
        // Returning an error message if todo deletion fails
        return {message: 'error deleting todo'};
    }
}