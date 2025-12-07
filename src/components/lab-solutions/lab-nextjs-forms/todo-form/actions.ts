"use server";

import { addTodo, getTodoById, updateTodo } from "@/database";
import { revalidatePath } from "next/cache";

export const addTodoAction = async (formData: FormData): Promise<void> => {
    const title = formData.get("title") as string;
    if (!title) {
        return;
    }
    await addTodo(title);
    revalidatePath("/");
}

interface ToggleTodoCompletionState {
    error: string | null;
}

export const toggleTodoCompletion = async (previousState: ToggleTodoCompletionState, formdata: FormData): Promise<ToggleTodoCompletionState> => {
    const id = Number(formdata.get("id"));
    let todo = await getTodoById(id);
    if (!todo) {
        return { error: "Todo not found" };
    }

    await updateTodo(id, !todo.completed);

    revalidatePath("/");

    return {
        error: null
    }

}