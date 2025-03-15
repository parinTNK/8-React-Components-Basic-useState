import { useState } from 'react';

const ColorPicker = () => {
  const [color, setColor] = useState('#FFFFFF');

  return (
    <div
      className="text-center border-2 w-1/4 p-5 rounded-xl"
      style={{ backgroundColor: color }}
    >
      <h1 className="text-2xl font-bold">Color Picker</h1>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className="mt-4 w-70 h-20"
      />
      <p className="mt-4 text-lg">Selected Color: {color}</p>
    </div>
  );
};

export default ColorPicker;