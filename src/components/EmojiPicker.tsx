import { useState } from 'react';

const emojis = ['😀', '😂', '😍', '😎', '😢', '😡', '👍', '🎉'];

const EmojiPicker = () => {
  const [selectedEmoji, setSelectedEmoji] = useState<string | null>(null);

  return (
    <div className="text-center mt-12 border-2 w-1/2 p-5 rounded-xl">
      <h1 className="text-2xl font-bold">Emoji Picker</h1>
      <div className="mt-4 flex justify-center gap-4">
        {emojis.map((emoji) => (
          <button
            key={emoji}
            onClick={() => setSelectedEmoji(emoji)}
            className="text-2xl px-4 py-2 border rounded hover:bg-gray-200"
          >
            {emoji}
          </button>
        ))}
      </div>
      {selectedEmoji && (
        <p className="mt-6 text-xl">
          You selected: <span className="font-bold">{selectedEmoji}</span>
        </p>
      )}
    </div>
  );
};

export default EmojiPicker;