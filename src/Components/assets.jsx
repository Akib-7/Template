// src/assets/assets.jsx
import surface from "../assets/Pictures/surface.webp";
import black from "../assets/Pictures/black.webp";

// Exporting images
export const images = [surface, black];

// Preloading function
export const preloadImages = () => {
  images.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
};
