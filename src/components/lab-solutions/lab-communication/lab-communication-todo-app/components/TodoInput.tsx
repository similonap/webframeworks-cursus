import React, { useState } from "react";

interface TodoInputProps {
    onAdd: (text: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ onAdd }) => {
    const [value, setValue] = useState("");

    const handleSubmit = () => {
        if (!value.trim()) {
            return;
        }
        onAdd(value.trim());
        setValue("");
    };

    return (
        <div style={{ display: "flex", gap: 8 }}>
            <input
                id="todo"
                type="text"
                value={value}
                onChange={(event) => setValue(event.target.value)}
            />
            <button type="button" onClick={handleSubmit}>
                Add
            </button>
        </div>
    );
};

export default TodoInput;
