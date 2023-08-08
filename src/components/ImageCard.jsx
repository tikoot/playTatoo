import React, { useState } from 'react';
import { ImageModal } from './ImageModal';

export function ImageCard({ mainImage, additionalImages ,imgText}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % (additionalImages.length + 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? additionalImages.length - 1 : prevIndex - 1
    );
  };

  const renderAdditionalImages = () => {
    if (additionalImages.length <= 3) {
      return additionalImages.map((image, index) => (
        <div key={index} className="w-full cursor-pointer bg-white rounded-lg overflow-hidden">
          <img
            src={image}
            alt={`Thumbnail ${index}`}
            className="w-full h-full border border-gray-300 rounded-lg object-cover"
            onClick={() => openModal(index + 1)}
          />
        </div>
      ));
    } else {
      return (
        <>
          {additionalImages.slice(0, 2).map((image, index) => (
            <div key={index} className="w-full  cursor-pointer bg-white rounded-lg overflow-hidden">
              <img
                src={image}
                alt={`Thumbnail ${index}`}
                className="w-full h-full border border-gray-300 rounded-lg object-cover"
                onClick={() => openModal(index)}
              />
            </div>
          ))}
          <div className="w-full  relative">
            <img
              src={additionalImages[2]}
              alt={`Thumbnail 2`}
              className="w-full h-full border border-gray-300 rounded-lg object-cover"
              onClick={() => openModal(2)}
            />
            <div
              className="absolute inset-0 flex items-center justify-center rounded-lg text-white"
              style={{
                background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6))',
              }}
              onClick={() => openModal(2)}
            >
              +{additionalImages.length - 2}
            </div>
          </div>
        </>
      );
    }
  };

  return (
    <div className="w-full relative group bg-white rounded-lg overflow-hidden  shadow-md border ">
      <div className="overflow-hidden relative">
        <img src={mainImage} alt="Main" className="w-full h-auto cursor-pointer rounded-t-lg" onClick={() => openModal(0)} />
        <div className="absolute inset-x-0 top-0 ">
        
          <p className="text-lg font-bold text-left pb-1 pt-2 pl-4 text-white" style={{background: 'linear-gradient(rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.1))'}}>
             {imgText}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 mt-2 p-2 bg-white">
        {renderAdditionalImages()}
      </div>

      {modalOpen && (
        <ImageModal
          images={[mainImage, ...additionalImages]}
          startingIndex={currentImageIndex}
          onClose={closeModal}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </div>
  );
}

export default ImageCard;
