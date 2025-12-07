import { Collection, MongoClient } from "mongodb";
import { Todo } from "@/types";

const client = new MongoClient(process.env.MONGODB_URI!);

export const todosCollection: Collection<Todo> = client.db("todos").collection<Todo>("todos");

export const getTodos = async (): Promise<Todo[]> => {
    let todos = await todosCollection.find().toArray();
    return todos.map(todo => ({
        id: todo.id,
        title: todo.title,
        completed: todo.completed,
    }));
}

export const addTodo = async (title: string): Promise<void> => {
    let max = await todosCollection.find().sort({ id: -1 }).limit(1).toArray();
    let id = max[0]?.id + 1 || 1;
    await todosCollection.insertOne({
        id: id,
        title,
        completed: false,
    });
}

export const getTodoById = async (id: number): Promise<Todo | null> => {
    return await todosCollection.findOne({ id });
}

export const updateTodo = async (id: number, completed: boolean): Promise<void> => {
    await todosCollection.updateOne({ id }, { $set: { completed } });
}