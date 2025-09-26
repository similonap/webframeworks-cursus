import React from "react";
import TodoItem, { TodoItemData } from "./TodoItem";

interface TodoListProps {
    todos: TodoItemData[];
    onToggle: (index: number, completed: boolean) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle }) => {
    return (
        <div>
            {todos.map((todo, index) => (
                <TodoItem
                    key={`${todo.name}-${index}`}
                    todo={todo}
                    onToggle={(completed) => onToggle(index, completed)}
                />
            ))}
        </div>
    );
};

export default TodoList;
