import { useState } from 'react';

const quotes = [
  "The best way to predict the future is to invent it.",
  "Life is 10% what happens to us and 90% how we react to it.",
  "Your time is limited, so don’t waste it living someone else’s life.",
  "The only way to do great work is to love what you do.",
  "Success is not the key to happiness. Happiness is the key to success.",
  "Don’t watch the clock; do what it does. Keep going.",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "Dream big and dare to fail.",
];

const RandomQuoteGenerator = () => {
  const [quote, setQuote] = useState<string>(''); // State to store the current quote

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length); // Generate a random index
    setQuote(quotes[randomIndex]); // Set the quote based on the random index
  };

  return (
    <div className="text-center  border-2 w-1/4 p-5 rounded-xl">
      <h1 className="text-2xl font-bold mb-4">Random Quote Generator</h1>
      <div className='h-30 flex flex-col justify-center'>
      <p className="text-lg italic mb-6">{quote || "Click the button to generate a quote!"}</p>
      </div>
      <button
        onClick={generateRandomQuote}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Generate Quote
      </button>
    </div>
  );
};

export default RandomQuoteGenerator;