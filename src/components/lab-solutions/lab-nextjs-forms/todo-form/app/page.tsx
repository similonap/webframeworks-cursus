import AddTodoForm from "@/components/AddTodoForm";
import TodoList from "@/components/TodoList";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-2xl font-bold mb-4">Todo List</h1>

        <AddTodoForm/>
        <Suspense fallback={<div>Loading...</div>}>
            <TodoList/>
        </Suspense>
    </div>
  );
}
