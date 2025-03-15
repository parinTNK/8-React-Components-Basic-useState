import { useState, useEffect } from 'react';

const LightDarkToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false); // State to track the theme

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode ? 'dark' : 'light';
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div
      className={`  border-2 w-1/4 p-5 rounded-xl  flex-col items-center flex justify-center ${
        isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'
      }`}
    >
      <h1 className="text-3xl font-bold mb-6">Light/Dark Mode Toggle</h1>
      <button
        onClick={toggleTheme}
        className={`px-6 py-3 rounded-lg text-lg font-medium ${
          isDarkMode
            ? 'bg-yellow-500 text-black hover:bg-yellow-400'
            : 'bg-blue-500 text-white hover:bg-blue-400'
        }`}
      >
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </div>
  );
};

export default LightDarkToggle;