import { useState } from 'react';

const SimpleForm = () => {
  const [name, setName] = useState(''); // State to track the name input
  const [email, setEmail] = useState(''); // State to track the email input
  const [submittedData, setSubmittedData] = useState<{ name: string; email: string; date: string } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the form from refreshing the page
    if (!name.trim() || !email.trim()) {
      alert('Both fields are required!');
      return;
    }
    const currentDate = new Date().toLocaleString(); // Get the current date and time
    setSubmittedData({ name, email, date: currentDate }); // Save the submitted data with date
    setName(''); // Clear the name input
    setEmail(''); // Clear the email input
  };

  const handleReset = () => {
    setName(''); // Clear the name input
    setEmail(''); // Clear the email input
    setSubmittedData(null); // Clear the submitted data
  };

  return (
    <div className="text-center border-2 w-1/4 p-5 rounded-xl">
      <h1 className="text-2xl font-bold">Simple Form</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-4">
          <label htmlFor="name" className="block text-left font-medium">
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border px-2 py-1 rounded w-full"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-left font-medium">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border px-2 py-1 rounded w-full"
            placeholder="Enter your email"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Submit
        </button>
        <button
          type="button"
          onClick={handleReset}
          className="ml-2 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Reset
        </button>
      </form>
      {submittedData && (
        <div className="mt-6 p-4 border rounded bg-gray-100">
          <h2 className="text-xl font-bold">Submitted</h2>
          <p>
            <strong>Name:</strong> {submittedData.name}
          </p>
          <p>
            <strong>Email:</strong> {submittedData.email}
          </p>
          <p>
            <strong>Date:</strong> {submittedData.date}
          </p>
        </div>
      )}
    </div>
  );
};

export default SimpleForm;