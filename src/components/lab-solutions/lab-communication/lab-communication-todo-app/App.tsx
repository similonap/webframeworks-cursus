import React, { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import type { TodoItemData } from "./components/TodoItem";

const App: React.FC = () => {
    const [todos, setTodos] = useState<TodoItemData[]>([]);

    const addTodo = (name: string) => {
        setTodos((previous) => [...previous, { name, completed: false }]);
    };

    const toggleTodo = (index: number, completed: boolean) => {
        setTodos((previous) =>
            previous.map((todo, currentIndex) =>
                currentIndex === index ? { ...todo, completed } : todo
            )
        );
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <TodoInput onAdd={addTodo} />
            <TodoList todos={todos} onToggle={toggleTodo} />
        </div>
    );
};

export default App;
