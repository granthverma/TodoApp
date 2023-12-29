import React, { useState } from 'react';
import { useTodo } from '../context/TodoContext';

function TodoForm() {
    // State for managing the input value
    const [todo, setTodo] = useState("");

    // Accessing the addTodo function from the TodoContext
    const { addTodo } = useTodo();

    // Function to handle form submission
    const add = (e) => {
        e.preventDefault();

        // Check if the todo input is empty
        if (!todo) return;

        // Add the todo to the list
        addTodo({ todo, completed: false });

        // Clear the todo input after submission
        setTodo("");
    }

    return (
        // Form for adding todos
        <form onSubmit={add} className="flex">
            {/* Input field for entering todo */}
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />

            {/* Button to submit the todo */}
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

// Exporting the TodoForm component
export default TodoForm;
