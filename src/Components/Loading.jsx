import { useGSAP } from "@gsap/react";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
//import { preloadImages } from "./assets";
const Loading = ({ loadMethod }) => {
  const targetRef = useRef(null);
  // useEffect(() => {
  //   // Preload images when the component mounts
  //   preloadImages();
  // }, []);

  return <div className="flex h-screen items-center justify-center"></div>;
};

export default Loading;
