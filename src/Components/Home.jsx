import React, { useRef } from "react";

import surface from "../assets/Pictures/surface.webp";
import black from "../assets/Pictures/black.webp";

import gold from "../assets/Pictures/gold.webp";
import gold2 from "../assets/Pictures/gold2.webp";
import brownPage from "../assets/Pictures/brownPage.webp";
import productPage from "../assets/Pictures/productPaper.webp";

import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);
const Home = () => {
  const featuresRef = useRef(null);
  const productsRef = useRef(null);
  const targetRef = useRef(null);
  const moreTextRef = useRef(null);
  const relicsTextRef = useRef(null);
  const tymlessTextRef = useRef(null);

  const extraTextsRef1 = useRef(null);
  const extraTextsRef2 = useRef(null);
  const extraTextsRef3 = useRef(null);
  const imageCenterRef = useRef(null);
  const imageRightRef = useRef(null);
  const mainButtonRef = useRef(null);
  const paragraphRef = useRef(null);
  const headingRef = useRef(null);

  useGSAP(() => {
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: featuresRef.current,
        start: "top 100%",
        end: "40% 50%",
        scrub: 1,
      },
    });
    t1.to(targetRef.current, {
      top: "115%",
      scale: 1.7,
    });
    const t2 = gsap.timeline();
    t2.fromTo(
      ".FEATURE-TEXT",
      {
        scale: 0,
        opacity: 0,
      },
      {
        scale: 1,
        duration: 2,
        opacity: 1,
        stagger: 2.5,
        ease: "circ.out",
        scrollTrigger: {
          trigger: featuresRef.current,
          start: "top 40%",
          scrub: true,
          end: "+=260",
        },
      }
    );

    const t3 = gsap.timeline({
      scrollTrigger: {
        trigger: productsRef.current,
        start: "top 115%",
        end: "38% 50%",
        scrub: 1,
      },
    });
    t3.to(targetRef.current, {
      top: "243%",
      scale: 0.9,
    });
    const t4 = gsap.timeline({
      scrollTrigger: {
        trigger: productsRef.current,
        start: "top 50%",
        end: "+=200",
        scrub: 1,
      },
    });
    t4.to(
      moreTextRef.current,
      {
        top: "42.5vh",
        scale: 1.3,
        left: "-9.0vw",
      },
      "text-move"
    );
    t4.to(
      relicsTextRef.current,
      {
        top: "42.5vh",
        scale: 1.2,
        right: "-1.1vw",
      },
      "text-move"
    );
    const t5 = gsap.timeline({
      scrollTrigger: {
        trigger: productsRef.current,
        start: "top 20%",
        end: "+=200",
      },
    });
    t5.from(".TYMLESS-CHAR", {
      opacity: 0,
      y: 30,
      stagger: 0.05,
    });
  });
  const entryAnimation = gsap.timeline({
    defaults: {
      delay: 0.2,
    },
  });
  useGSAP(() => {
    entryAnimation.from(
      imageCenterRef.current,
      {
        y: 30,

        opacity: 0,
        duration: 2,
        ease: "circ.inOut",
      },
      "entry-animation"
    );
    entryAnimation.from(
      imageRightRef.current,
      {
        scale: 0.7,
        opacity: 0,
        duration: 1,
        ease: "circ.inOut",
      },
      "entry-animation"
    );
    entryAnimation.from(
      mainButtonRef.current,
      {
        y: 0,
        opacity: 0,
        duration: 1,
        ease: "power4.in",
      },
      "entry-animation"
    );
    entryAnimation.from(
      extraTextsRef1.current,
      {
        y: 200,
        opacity: 0,
        duration: 1.5,
        ease: "back.out",
      },
      "entry-animation"
    );
    entryAnimation.from(
      extraTextsRef2.current,
      {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "back.out",
      },
      "entry-animation"
    );
    entryAnimation.from(
      extraTextsRef3.current,
      {
        y: 130,
        opacity: 0,
        duration: 1.5,
        ease: "back.out",
      },
      "entry-animation"
    );
    entryAnimation.from(
      paragraphRef.current,
      {
        opacity: 0,
        duration: 1,
        ease: "power4.in",
      },
      "entry-animation"
    );
    entryAnimation.from(
      ".HEADING-WORD",
      {
        y: 50,

        opacity: 0,
        duration: 1,

        ease: "power4.out",
        stagger: 0.02,
      },
      "entry-animation"
    );
  });
  return (
    <div className="w-full CONTAINER h-screen  from-red-800 via-red-950 to-black bg-gradient-to-b text-white ">
      <div className=" HERO-SECTION w-full h-full flex items-center justify-center">
        <div className="LEFT relative  h-[90%] w-[30%] flex flex-col items-start pt-[100px] space-y-[30px] pl-10">
          {/* <div className="flex overflow-hidden  items-end justify-center">
            <h1
              style={{ lineHeight: "2.5vw" }}
              className=" tracking-tight italic font-dm text-4xl"
            >
              {"A Limited Legacy – Own It Before It’s Gone"
                .split(" ")
                .map((item, index) => (
                  <span key={index} className="HEADING-WORD pr-2 inline-block">
                    {item}
                  </span>
                ))}
            </h1>
          </div> */}
          <div className="flex overflow-hidden items-end justify-center">
            <h1
              style={{ lineHeight: "2.5vw" }}
              className="tracking-tight  font-dmIt text-4xl"
            >
              {"A Limited Legacy – Own It Before It’s Gone"
                .split(" ")
                .map((word, wordIndex) => (
                  <span key={wordIndex} className=" pr-2 inline-block">
                    {word.split("").map((letter, letterIndex) => (
                      <span
                        key={`${wordIndex}-${letterIndex}`}
                        className="LETTER HEADING-WORD inline-block"
                      >
                        {letter}
                      </span>
                    ))}
                  </span>
                ))}
            </h1>
          </div>

          <p
            ref={paragraphRef}
            className="  tracking-wide font-slab font-light "
          >
            Inspired by the golden age of design and crafted with the precision
            of tomorrow, this watch is more than an accessory – it’s a
            statement. A rare blend of retro elegance and futuristic innovation,
            this limited edition is your chance to own a piece of time itself.
            Don’t let it slip away
          </p>
          <div
            ref={mainButtonRef}
            className="BUTTON relative w-[200px]   bg-color1 rounded-lg  overflow-hidden flex items-center justify-center px-5 py-2 font-slab  h-fit"
          >
            <img
              src={brownPage}
              style={{
                filter: "saturate(0.6)  contrast(1.5)",
              }}
              className="w-full h-full top-0 absolute z-0"
              alt=""
            />
            <h1 className="  text-bg1 font-extrabold z-10">Pre-order Now</h1>
          </div>

          <h1
            ref={extraTextsRef1}
            className="absolute text opacity-25 bottom-[13%] left-[7%] rotate-12 tracking-tight font-dm text-xl"
          >
            Limited Edition
          </h1>
          <h1
            ref={extraTextsRef2}
            className="absolute text opacity-30 tracking-tight -rotate-3 font-dm bottom-[22%] left-[150px] text-xl"
          >
            Infinite Elegance
          </h1>
          <h1
            ref={extraTextsRef3}
            className="absolute text opacity-15 tracking-tight -rotate-12 bottom-[6%] right-[15%] font-dm text-xl"
          >
            Timeless Piece
          </h1>
        </div>
        <div
          ref={imageCenterRef}
          style={{ zIndex: 1000 }}
          className="Center relative mt-[60px]  h-full w-[40%] flex items-center justify-center"
        >
          <div className=" w-[50vw]   flex items-start  justify-center">
            <div className="h-full w-full -mt-[80px] flex items-start  justify-center">
              <img
                src={surface}
                width="500"
                alt="Surface"
                style={{ display: "block" }}
                loading="eager"
                fetchpriority="high"
              />
            </div>

            <div
              style={{ zIndex: "999" }}
              ref={targetRef}
              className="w-fit h-fit top-[130px]  absolute flex items-center justify-center "
            >
              <img
                src={gold}
                width="300"
                alt="Surface"
                style={{ display: "block" }}
                loading="eager"
                fetchpriority="high"
              />
            </div>
          </div>
        </div>
        <div
          ref={imageRightRef}
          className="right  mt-[150px] relative  h-full w-[30%] flex flex-col items-center justify-start pt-[100px]"
        >
          <div className="w-[100%]   h-[500px]   relative flex items-start justify-center">
            <div className=" w-[180px] h-[130px] flex items-center justify-center absolute rotate-12 bg-gradient-to-t  from-[#E99079] opacity-100 rounded-2xl p-3 ">
              <img
                src={black}
                loading="lazy"
                className="w-[80%] h-[80%] object-contain"
                alt=""
              />{" "}
            </div>
            <div className=" w-[180px] h-[130px] flex items-center justify-center absolute -rotate-12  top-[30%] bg-gradient-to-l from-[#E99079] opacity-70 rounded-lg p-3 ">
              <img
                src={gold2}
                loading="lazy"
                className="w-[80%] h-[80%] object-contain"
                alt=""
              />{" "}
            </div>
            <div className=" w-[180px] h-[130px] flex items-center justify-center absolute rotate-12  top-[60%] bg-gradient-to-b from-[#E99079]/70 rounded-lg p-3 ">
              <h1 className="text-7xl  font-dm text-color1">?</h1>
            </div>
          </div>
          <div className=" absolute right-10 h-[400px] flex flex-col items-center rounded-l-3xl justify-center -space-y-1  top-[15%] w-[20px] ">
            <h1 className=" italic font-dm text-color1/70">L</h1>
            <h1 className=" italic font-dm text-color1/70">A</h1>
            <h1 className=" italic font-dm text-color1/70">T</h1>
            <h1 className=" italic font-dm text-color1/70">E</h1>
            <h1 className=" italic font-dm text-color1/70">S</h1>
            <h1 className=" italic font-dm text-color1/70">T</h1>
          </div>
        </div>
      </div>
      <div
        ref={featuresRef}
        className="FEATURE-SECTION relative bg-black text-color1 flex flex-col items-center justify-center    w-full h-[120vh]"
      >
        <img
          src={brownPage}
          style={{
            filter: "saturate(0.5)  contrast(1.5)",
          }}
          className="w-full h-full top-0 absolute "
          alt=""
        />

        <div className="TEXTS relative w-[85%]  rounded-lg h-[70%] text-red-950  flex flex-col items-center justify-center">
          <h1 className="FEATURE-TEXT absolute top-[10%] w-[400px] text-center   left-0 font-dm text-2xl ">
            1- Retro Aesthetic Meets Modern Durability
          </h1>
          <h1 className="FEATURE-TEXT font-dm text-center w-[400px] text-2xl absolute  top-[30%]  right-0 ">
            2- Futuristic Quartz Movement for Unmatched Accuracy
          </h1>
          <h1 className="FEATURE-TEXT font-dm text-center w-[400px]  text-2xl absolute top-[50%]  left-0">
            3- Scratch-Resistant Sapphire Crystal Glass Display
          </h1>
          <h1 className="FEATURE-TEXT font-dm w-[400px] text-center  text-2xl absolute top-[70%]  right-0">
            4- Timeless Brass Finish for Vintage Appeal
          </h1>
        </div>
        <div
          style={{ zIndex: "998" }}
          className="BANNER-TEXTS w-full bg-red-950 h-fit space-x-3 flex items-center justify-center relative"
        >
          <h1 className="relative  text-white font-dm text-4xl">You</h1>
          <h1 className="relative  text-white font-dm text-4xl">Want</h1>
          <h1
            ref={moreTextRef}
            className="relative  text-white font-dm text-4xl"
          >
            More
          </h1>
          <h1
            ref={relicsTextRef}
            className="relative  text-white font-dm text-4xl"
          >
            Relics
          </h1>
          <h1 className="relative  text-white font-dm text-4xl">?</h1>
        </div>
      </div>
      <div
        ref={productsRef}
        className="PRODUCTS-SECTION relative bg-gradient-to-b from-red-800 via-red-950 to-black flex flex-col items-center justify-center  space-y-[100px] w-full h-[140vh]"
      >
        <div className="w-full h-[200px] bg-gradient-to-b from-black absolute top-0"></div>
        <div className="flex overflow-hidden  items-end justify-center">
          <h1 className=" px-3  tracking-tight  font-dm  italic text-white text-[2.5vw]">
            {"tymless".split("").map((item, index) => (
              <span key={index} className="TYMLESS-CHAR inline-block">
                {item}
              </span>
            ))}
          </h1>
        </div>

        <div className="ALL-PRODUCTS   relative w-[80%] h-[65%]  text-red-950  flex items-center justify-between space-x-4">
          <div className="LEFT w-[30%] h-[50%] flex items-center justify-center   relative ">
            <img
              src={productPage}
              style={{
                filter: "saturate(0.4)  contrast(1.5)",
              }}
              className="w-[120%]  h-full top-0 absolute z-0"
              alt=""
            />
            <div className="P-1 w-[100%] h-[100%] -top-[220px] absolute  ">
              <img
                src={gold2}
                className="w-[100%] h-[110%] object-contain"
                alt=""
              />
            </div>
            <div className="LEFT-BOTTOM mt-[100px] space-y-4 flex flex-col items-center justify-center">
              <h1
                style={{ lineHeight: "2.5vw", zIndex: "999" }}
                className=" tracking-tight font-dm   text-[2vw]"
              >
                Golden Retriever
              </h1>
              <h1
                style={{ lineHeight: "2.5vw", zIndex: "999" }}
                className=" tracking-tight font-dm  text-[1.5vw]"
              >
                32,000 -/pkr
              </h1>

              <div className="BUTTON relative w-[280px]   bg-red-950 rounded-lg  overflow-hidden flex items-center justify-center px-5 py-2 font-slab h-fit">
                <h1 className="text-xl text-white font-bold z-10">Buy Now</h1>
              </div>
            </div>
          </div>
          <div className="CENTER w-[30%] h-[50%] flex items-center justify-center   relative ">
            <img
              src={productPage}
              style={{
                filter: "saturate(0.4)  contrast(1.5)",
              }}
              className="w-[120%]  h-full top-0 absolute z-0"
              alt=""
            />

            <div className="LEFT-BOTTOM mt-[100px] space-y-4 flex flex-col items-center justify-center">
              <h1
                style={{ lineHeight: "2.5vw", zIndex: "999" }}
                className=" tracking-tight font-dm   text-[2vw]"
              >
                Red Riot
              </h1>
              <h1
                style={{ lineHeight: "2.5vw", zIndex: "999" }}
                className=" tracking-tight font-dm  text-[1.5vw]"
              >
                42,000 -/pkr
              </h1>

              <div className="BUTTON relative w-[280px]   bg-red-950 rounded-lg  overflow-hidden flex items-center justify-center px-5 py-2 font-slab h-fit">
                <h1 className="text-xl text-white font-bold z-10">Buy Now</h1>
              </div>
            </div>
          </div>
          <div className="RIGHT w-[30%] h-[50%] flex items-center justify-center   relative ">
            <img
              src={productPage}
              style={{
                filter: "saturate(0.4)  contrast(1.5)",
              }}
              className="w-[120%]  h-full top-0 absolute z-0"
              alt=""
            />
            <div className="P-1 w-[100%] h-[100%] -top-[200px] absolute  ">
              <img
                src={black}
                className="w-[100%] h-[95%] object-contain"
                alt=""
              />
            </div>
            <div className="RIGHT-BOTTOM mt-[100px] space-y-4 flex flex-col items-center justify-center">
              <h1
                style={{ lineHeight: "2.5vw", zIndex: "999" }}
                className=" tracking-tight font-dm   text-[2vw]"
              >
                Black Abyss
              </h1>
              <h1
                style={{ lineHeight: "2.5vw", zIndex: "999" }}
                className=" tracking-tight font-dm  text-[1.5vw]"
              >
                32,000 -/pkr
              </h1>

              <div className="BUTTON relative w-[280px]   bg-red-950 rounded-lg  overflow-hidden flex items-center justify-center px-5 py-2 font-slab h-fit">
                <h1 className="text-xl text-white font-bold z-10">Buy Now</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default Home;
