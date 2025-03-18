import { useState } from 'react';

const images = [
  'https://via.placeholder.com/300x200?text=Image+1',
  'https://via.placeholder.com/300x200?text=Image+2',
  'https://via.placeholder.com/300x200?text=Image+3',
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);  

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="text-center mt-12 border-2 w-1/2 p-5 rounded-xl">
      <h1 className="text-2xl font-bold">Image Carousel</h1>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="mt-4 mx-auto rounded"
      />
      <div className="mt-4 flex justify-center gap-4">
        <button
          onClick={prevImage}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Previous
        </button>
        <button
          onClick={nextImage}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;