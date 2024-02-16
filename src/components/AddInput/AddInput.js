import React, { useState } from 'react'
import "./AddInput.css"
import { v4 } from "uuid"

function AddInput({ setTodos, todos }) {
    const [todo, setTodo] = useState("")

    const addTodo = () => {
        // Check if todo is empty
        if (!todo) {
            return; // If empty, exit the function
        }

        // Create a new todo object with a unique id, the task, and set completed to false
        const newTodo = {
            id: v4(), // Generate a unique id
            task: todo,
            completed: false
        };

        // Create a new array with the new todo added
        const updatedTodos = [...todos, newTodo];

        // Update the state with the new array of todos
        setTodos(updatedTodos);

        // Clear the todo input field
        setTodo("");
    };


    return (
        <div className="input-container">
            <input className="input" value={todo} onChange={(e) => setTodo(e.target.value)} placeholder="Add a new task here..." />
            <button className="add-btn" onClick={addTodo} >Add</button>
        </div>
    )
}

export default AddInput
