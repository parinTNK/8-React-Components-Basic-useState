import { useState } from 'react';

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const convertToFahrenheit = (value: string) => {
    const c = parseFloat(value);
    if (!isNaN(c)) {
      setFahrenheit(((c * 9) / 5 + 32).toFixed(2));
    } else {
      setFahrenheit('');
    }
    setCelsius(value);
  };

  const convertToCelsius = (value: string) => {
    const f = parseFloat(value);
    if (!isNaN(f)) {
      setCelsius(((f - 32) * 5 / 9).toFixed(2));
    } else {
      setCelsius('');
    }
    setFahrenheit(value);
  };

  return (
    <div className="text-center  border-2 w-1/4 p-5 rounded-xl flex flex-col items-center ">
      <h1 className="text-2xl font-bold">Temperature Converter</h1>
      <div className="mt-4 flex items-center flex-col justify-center"> 
        <input
          type="number"
          value={celsius}
          onChange={(e) => convertToFahrenheit(e.target.value)}
          className="border px-2 py-1 rounded "
          placeholder="Celsius"
        />
        <div>=</div>
        <input
          type="number"
          value={fahrenheit}
          onChange={(e) => convertToCelsius(e.target.value)}
          className="border px-2 py-1 rounded "
          placeholder="Fahrenheit"
        />
      </div>
    </div>
  );
};

export default TemperatureConverter;