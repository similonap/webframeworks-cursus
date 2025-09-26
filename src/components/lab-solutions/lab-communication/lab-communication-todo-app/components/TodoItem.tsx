import React from "react";

export interface TodoItemData {
    name: string;
    completed: boolean;
}

interface TodoItemProps {
    todo: TodoItemData;
    onToggle: (completed: boolean) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle }) => {
    return (
        <div>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={(event) => onToggle(event.target.checked)}
            />
            <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
                {todo.name}
            </span>
        </div>
    );
};

export default TodoItem;
