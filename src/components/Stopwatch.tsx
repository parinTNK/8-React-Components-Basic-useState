import { useState, useEffect } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState(0); // Time in seconds
  const [isRunning, setIsRunning] = useState(false); // Whether the stopwatch is running

  useEffect(() => {
    let timer: ReturnType<typeof setInterval>; // Correct type for setInterval
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } 
    return () => clearInterval(timer); // Cleanup on unmount
  }, [isRunning]);

  const reset = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div className="text-center border-2 w-1/4 p-5 rounded-xl">
      <h1 className="text-2xl font-bold">Stopwatch</h1>
      <h2 className="text-xl my-4">{time}s</h2>
      <div className="flex justify-center gap-4">
        <button
          onClick={() => setIsRunning(true)}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Start
        </button>
        <button
          onClick={() => setIsRunning(false)}
          className="px-4 py-2 bg-yellow-500 text-white rounded"
        >
          Pause
        </button>
        <button
          onClick={() => setIsRunning(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Resume
        </button>
        <button
          onClick={reset}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;