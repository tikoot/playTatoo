import React, { useState, useEffect } from 'react';

export function ImageModal ({ images, startingIndex, onClose, onNext, onPrev })  {
  const [currentImageIndex, setCurrentImageIndex] = useState(startingIndex);

  const closeModal = () => {
    onClose();
    setCurrentImageIndex(startingIndex); // Reset the index when closing the modal
  };

 const nextImage = () => {
  if (currentImageIndex === 0) {
    setCurrentImageIndex(1); // Skip the main image
    onNext();
  } else {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    onNext();
  }
};

const prevImage = () => {
  if (currentImageIndex === 1) {
    setCurrentImageIndex(0); // Show the main image
    onPrev();
  } else {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    onPrev();
  }
};

  // Update the current image index when the startingIndex prop changes
  useEffect(() => {
    setCurrentImageIndex(startingIndex);
  }, [startingIndex]);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50" >
      <div className="bg-black bg-opacity-75 fixed inset-0" onClick={onClose}></div>
      <div className="absolute inset-0 flex items-center justify-center">
        {currentImageIndex > 0 && (
          <button className="text-white absolute top-1/2 left-4 transform -translate-y-1/2" onClick={onPrev}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}
        {currentImageIndex < images.length - 1 && (
          <button className="text-white absolute top-1/2 right-4 transform -translate-y-1/2" onClick={onNext}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
        <button className="absolute top-2 right-2 text-white" onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <img src={images[currentImageIndex]} alt="Modal" className="max-w-full max-h-full p-12" onClick={onClose} />
      </div>
    </div>
  );
};

export default ImageModal;
