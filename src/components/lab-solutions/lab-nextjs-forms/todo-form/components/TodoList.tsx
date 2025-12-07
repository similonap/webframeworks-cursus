import { getTodos } from "@/database";
import TodoItem from "./TodoItem";

const TodoList = async () => {

    const todos = await getTodos();

    return (
        <div className="max-w-md mx-auto mt-10">
            <ul>
                {todos.map(todo => (
                    <TodoItem key={todo.id} todo={todo} />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;