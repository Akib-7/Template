// src/assets/assets.jsx
import surface from "../assets/Pictures/surface.webp";
import black from "../assets/Pictures/black.webp";

import gold from "../assets/Pictures/gold.webp";
import gold2 from "../assets/Pictures/gold2.webp";
import brownPage from "../assets/Pictures/brownPage.webp";
import productPage from "../assets/Pictures/productPaper.webp";

// Exporting images
export const images = [surface, black, gold, gold2, brownPage, productPage];

// Preloading function
export const preloadImages = () => {
  images.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
};
