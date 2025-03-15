import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0); // State to track the counter value
  const [inputValue, setInputValue] = useState(''); // State to track the input value

  const increment = () => setCount(count + 1); // Increase the counter
  const decrement = () => setCount(count - 1 >= 0 ? count - 1 : 0); // Decrease the counter
  const reset = () => setCount(0); // Reset the counter to 0
  const setCounter = () => {
    const value = parseInt(inputValue, 10);
    if (!isNaN(value)) setCount(value); // Set the counter to the input value if valid
  };

  return (
    <div className="text-center border-2 w-1/4 p-5 rounded-xl">
      <h1 className="text-2xl font-bold">Counter App</h1>
      <h2 className={`text-xl my-4 ${count < 10 ? 'text-red-500' : ''}`}>{count}</h2>
      <div className="flex justify-center bg-gray-100">
        <button onClick={increment} className="mx-2 px-4 py-2 bg-blue-500 text-white rounded">Increment</button>
        <button onClick={decrement} className="mx-2 px-4 py-2 bg-red-500 text-white rounded">Decrement</button>
        <button onClick={reset} className="mx-2 px-4 py-2 bg-gray-500 text-white rounded">Reset</button>
      </div>
      <div className="mt-4 flex-col gap-3 flex">
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="border px-2 py-1 rounded"
          placeholder="Set counter"
        />
        <button onClick={setCounter} className="ml-2 px-4 py-2 bg-green-500 text-white rounded">Set</button>
      </div>
    </div>
  );
};

export default Counter;