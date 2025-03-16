import { useState } from 'react';

const BMICalculator = () => {
  const [weight, setWeight] = useState(''); // State for weight input
  const [height, setHeight] = useState(''); // State for height input
  const [bmi, setBMI] = useState<number | null>(null); // State for calculated BMI
  const [category, setCategory] = useState(''); // State for BMI category

  const calculateBMI = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100; // Convert height to meters
    if (!isNaN(w) && !isNaN(h) && h > 0) {
      const bmiValue = w / (h * h);
      setBMI(parseFloat(bmiValue.toFixed(2))); // Round to 2 decimal places
      determineBMICategory(bmiValue);
    } else {
      setBMI(null);
      setCategory('');
    }
  };

  const determineBMICategory = (bmiValue: number) => {
    if (bmiValue < 18.5) {
      setCategory('Underweight');
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setCategory('Normal weight');
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setCategory('Overweight');
    } else {
      setCategory('Obese');
    }
  };

  return (
    <div className="text-center border-2 w-1/4 p-5 rounded-xl flex flex-col items-center">
      <h1 className="text-2xl font-bold">BMI Calculator</h1>
      <div className="mt-4 flex flex-col gap-4 w-full">
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="border px-2 py-1 rounded w-full"
          placeholder="Weight (kg)"
        />
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="border px-2 py-1 rounded w-full"
          placeholder="Height (cm)"
        />
        <button
          onClick={calculateBMI}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Calculate BMI
        </button>
      </div>
      {bmi !== null && (
        <div className="mt-6 text-lg">
          <p>Your BMI: <strong>{bmi}</strong></p>
          <p>Category: <strong>{category}</strong></p>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;