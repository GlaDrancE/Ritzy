import React, { createContext, useContext, useEffect, useState } from "react";

// Create a context to store images and loading status
const ImageContext = createContext({
  imagesTemp: [],
  allImagesLoaded: false,
  isLoading: true,
  handleLoading: () => {},
});

export const ImageProvider = ({ children }) => {
  const [imagesTemp, setImagesTemp] = useState([]);
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleLoading = () => {
    console.log("Fucntion called");
    setIsLoading(false);
  };

  useEffect(() => {
    const loadImage = (src, className) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.className = className;
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
      });
    };

    if (imagesTemp.length === 0) {
      const totalImages = 80;
      const promises = [];

      for (let i = 1; i <= totalImages; i++) {
        promises.push(loadImage(`/frames/${i}.webp`, i.toString()));
      }

      Promise.all(promises)
        .then((loadedImages) => {
          setImagesTemp(loadedImages);
          setAllImagesLoaded(true);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [imagesTemp.length]);

  return (
    <ImageContext.Provider
      value={{ imagesTemp, allImagesLoaded, handleLoading, isLoading }}
    >
      {children}
    </ImageContext.Provider>
  );
};

// Custom hook to use the images in any component
export const useImages = () => useContext(ImageContext);
