import { useState } from 'react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]); // State to track the list of todos
  const [inputValue, setInputValue] = useState(''); // State to track the input value

  const addTodo = () => {
    if (inputValue.trim() === '') return; // Prevent adding empty todos
    const newTodo: Todo = {
      id: Date.now(),
      text: inputValue.trim(),
      completed: false,
    };
    setTodos([...todos, newTodo]); // Add the new todo to the list
    setInputValue(''); // Clear the input field
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id)); // Remove the todo with the given ID
  };

  return (
    <div className="text-center border-2 w-1/4 p-5 rounded-xl">
      <h1 className="text-2xl font-bold">Todo List</h1>
      <div className="mt-4 flex justify-center">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="border px-2 py-1 rounded w-2/3"
          placeholder="Add a new task..."
        />
        <button
          onClick={addTodo}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Add
        </button>
      </div>
      <ul className="mt-6">
        {todos.map((todo, index) => (
          <li
            key={todo.id}
            className={`flex justify-between items-center p-2 border-b ${
              todo.completed ? 'line-through text-gray-500' : ''
            }`}
          >
            <span className="mr-2">{index + 1}.</span>
            <span
              onClick={() => toggleTodo(todo.id)}
              className="cursor-pointer flex-1 text-left"
            >
              {todo.text}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="ml-2 px-4 py-1 bg-red-500 text-white rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      {todos.length === 0 && (
        <p className="text-gray-500 mt-4">No tasks available. Add one!</p>
      )}
    </div>
  );
};

export default TodoList;