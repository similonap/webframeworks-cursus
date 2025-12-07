"use client";

import { toggleTodoCompletion } from "@/actions";
import { Todo } from "@/types"
import { useActionState } from "react";

export interface TodoItemProps {
    todo: Todo
}

const TodoItem = ({ todo }: TodoItemProps) => {
    const [state, toggleTodoCompletionAction, pending] = useActionState(toggleTodoCompletion, { error: null})
    return (
        <li className="mb-2 w-lg p-4 bg-white rounded shadow flex items-center justify-between">
            <span className={todo.completed ? "line-through text-gray-500" : ""}>
                {todo.title}
            </span>
            <form action={toggleTodoCompletionAction}>
                <input type="hidden" name="id" value={todo.id} />
                { pending && <span className="mr-2 text-blue-500">Updating...</span> }
                <input disabled={pending} type="checkbox" defaultChecked={todo.completed} onChange={(e) => {
                    e.currentTarget.form?.requestSubmit();
                }}/>
            </form>
        </li>
    );
}

export default TodoItem;