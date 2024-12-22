import { useGSAP } from "@gsap/react";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { preloadImages } from "./assets";
const Loading = ({ loadMethod }) => {
  const targetRef = useRef(null);
  useEffect(() => {
    // Preload images when the component mounts
    preloadImages();
  }, []);
  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        loadMethod();
      },
    });
    tl.from(targetRef.current, {
      rotateY: "-360deg", // Rotate along the X-axis
      skewX: -22, // Skew along the X-axis
      rotate: -5, // Standard 2D rotation
      width: "1vw", // Animating width
      height: "1vw", // Animating height
      duration: 2.5,
      delay: 0.2,
      borderRadius: 0,

      // Animation duration in seconds

      ease: "circ.inOut",
    });
    tl.to(".TEXT", {
      opacity: 1,
      duration: 0.5,
      ease: "power4.in",
    });

    tl.to(".TEXT", {
      top: "-47.5%",
      left: "-44%",
      scale: 0.33,
      duration: 1,
      ease: "power4.in",
    });
  });

  return (
    <div className="flex h-screen items-center justify-center">
      <div
        ref={targetRef}
        className="w-[100%] relative h-screen rounded-lg   from-red-800 via-red-950 to-black bg-gradient-to-b flex items-center justify-center"
      >
        <h1 className="TEXT relative font-dmIt italic font-bold opacity-0 text-7xl text-white">
          Tymless.
        </h1>
      </div>
    </div>
  );
};

export default Loading;
