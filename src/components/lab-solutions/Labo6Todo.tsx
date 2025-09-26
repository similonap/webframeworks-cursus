import React, {useState} from "react";

interface TodoItem { 
    name: string;
    completed: boolean;
}

interface AddTodoProps {
    addTodo: (todo: string) => void;
}

const AddTodo = ({addTodo} : AddTodoProps) => {
    const [todo, setTodo] = useState("");

    const handleClick = () => {
        addTodo(todo);
        setTodo("");
    }

    return (
        <div>
            <input id="todo" type="text" value={todo} onChange={(event) => setTodo(event.target.value)}/>
            <button onClick={handleClick}>Add</button>
        </div>
    );
}

interface TodoListProps {
    todos: TodoItem[];
    markCompleted: (index: number, completed: boolean) => void;
}

const TodoList = ({todos, markCompleted} : TodoListProps)  => {
    return (
    <div>
        {todos.map((todo, index) => (
            <TodoListItem key={index} todo={todo} markCompleted={(completed) => markCompleted(index,completed)}/>
        ))}
    </div>
    )
}

interface TodoListItemProps {
    todo: TodoItem,
    markCompleted: (completed: boolean) => void;
}

const TodoListItem = ({todo, markCompleted} : TodoListItemProps) => {
    return (
        <div>
            <input type="checkbox" checked={todo.completed} onChange={(event) => markCompleted(event.target.checked)}/>
            <span style={{textDecoration: todo.completed ? "line-through" : "none"}}>{todo.name}</span>
        </div>
    )
}

const App = () => {
    const [todos, setTodos] = useState<TodoItem[]>([]);

    const addTodo = (todo: string) => {
        setTodos([...todos, { name: todo, completed: false }]);
    };

    const markCompleted = (index: number, completed: boolean) => {
        setTodos(todos.map((todo, i) => i === index ? {...todo, completed: completed} : todo));
    };

    return (
        <div>
            <AddTodo addTodo={addTodo}/>
            <TodoList markCompleted={markCompleted} todos={todos}/>

        </div>
    );

}

export default App;