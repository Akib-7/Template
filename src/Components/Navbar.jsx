import React, { useEffect, useRef, useState } from "react";

import productPage from "../assets/Pictures/productPaper.webp";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
const Navbar = () => {
  const [time, setTime] = useState("");
  const navbarRef = useRef(null);
  const timeRef = useRef(null);
  useEffect(() => {
    // Function to fetch real-time in Pakistan timezone
    const updateTime = () => {
      const options = {
        timeZone: "Asia/Karachi",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      const formatter = new Intl.DateTimeFormat("en-US", options);
      setTime(formatter.format(new Date()));
    };

    updateTime(); // Initial call
    const interval = setInterval(updateTime, 1000); // Update every second

    return () => clearInterval(interval); // Clean up interval
  }, []);

  const navAnimation = gsap.timeline({
    defaults: {
      delay: 0.5,
    },
  });

  useGSAP(() => {
    navAnimation.from(
      navbarRef.current,
      {
        opacity: 0,
        duration: 2,
        ease: "power4.in",
      },
      "nav-animation"
    );
    navAnimation.from(
      timeRef.current,
      {
        opacity: 0,
        duration: 2,
        ease: "power4.in",
      },
      "nav-animation"
    );
  });

  return (
    <div
      style={{ zIndex: "999" }}
      className="rounded-t-lg bg-red-800 relative w-full h-fit text-white font-dm flex items-center justify-between space-x-1 "
    >
      <div
        ref={navbarRef}
        className="w-fit  fixed font-serif h-fit px-5 top-[5%] right-10 cursor-pointer flex flex-col items-center space-y-1 justify-center text-color1    text-xs tracking-widest  "
      >
        <div className="bg-black/70 overflow-hidden relative w-[9vw] flex items-center justify-center  rounded-lg py-[5px]">
          <h1 className="z-10 text-bg1 font-extrabold">Home </h1>
          <img
            src={productPage}
            style={{
              filter: "saturate(0.6)  contrast(1.5)",
            }}
            className="w-full h-full top-0 absolute z-0"
            alt=""
          />
        </div>
        <div className="bg-black/70 overflow-hidden relative w-[9vw] flex items-center justify-center  rounded-lg py-[5px]">
          <h1 className="z-10 text-bg1 font-extrabold">About</h1>
          <img
            src={productPage}
            style={{
              filter: "saturate(0.6)  contrast(1.5)",
            }}
            className="w-full h-full top-0 absolute z-0"
            alt=""
          />
        </div>
        <div className="bg-black/70 overflow-hidden relative w-[9vw] flex items-center justify-center  rounded-lg py-[5px]">
          <h1 className="z-10 text-bg1 font-extrabold">Features</h1>
          <img
            src={productPage}
            style={{
              filter: "saturate(0.6)  contrast(1.5)",
            }}
            className="w-full h-full top-0 absolute z-0"
            alt=""
          />
        </div>
        <div className="bg-black/70 overflow-hidden relative w-[9vw] flex items-center justify-center  rounded-lg py-[5px]">
          <h1 className="z-10 text-bg1 font-extrabold">Products</h1>
          <img
            src={productPage}
            style={{
              filter: "saturate(0.6)  contrast(1.5)",
            }}
            className="w-full h-full top-0 absolute z-0"
            alt=""
          />
        </div>
      </div>

      <div className="w-[30%] absolute cursor-pointer  flex items-center justify-end h-[20%] p-5  tracking-wider ">
        <h1 className=" rounded-lg"></h1>
      </div>
      <div className="w-[100%]  relative cursor-pointer flex text-white items-center justify-start px-10 text-2xl p-5 ">
        <h1
          style={{ zIndex: "1000" }}
          className="fixed font-dmIt italic font-bold"
        >
          Tymless.
        </h1>
        <h1
          style={{ zIndex: "1000" }}
          ref={timeRef}
          className="fixed left-1/2 translate-x-[-50%] uppercase font-slab  text-sm "
        >
          local time : <span className=""> {time}, Pakistan</span>
        </h1>
      </div>
    </div>
  );
};

export default Navbar;
