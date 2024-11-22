import React, { useState } from "react";
import "./App.css";

function App() {
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState("");
    const handleAddTask = () => {
        if (task.trim()) {
            setTodos([
                ...todos,
                { id: Date.now(), text: task, completed: false }
            ]);
            setTask("");
        }
    };
    const handleToggleComplete = id => {
        setTodos(
            todos.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };
    const handleDeleteTask = id => {
        setTodos(todos.filter(todo => todo.id !== id));
    };
    return (
        <div className="todo-container">
            <h1>Lista de Tarefas</h1>
            <div className="input-container">
                <input
                    type="text"
                    value={task}
                    onChange={e => setTask(e.target.value)}
                    placeholder="Adicione uma tarefa"
                />
                <button onClick={handleAddTask}>Adicionar</button>
            </div>
            <ul className="todo-list">
                {todos.map(todo => (
                    <li
                        key={todo.id}
                        className={`todo-item ${
                            todo.completed ? "completed" : ""
                        }`}
                    >
                        <span>{todo.text}</span>
                        <button onClick={() => handleToggleComplete(todo.id)}>
                            {todo.completed ? "Desfazer" : "completo"}
                        </button>
                        <button onClick={() => handleDeleteTask(todo.id)}>
                            Deletar
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default App;
