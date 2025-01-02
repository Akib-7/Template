import React from "react";

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
  const entryAnimation = gsap.timeline();
  useGSAP(() => {
    entryAnimation.from(
      imageCenterRef.current,
      {
        y: 200,
        scale: 0.5,
        delay: 0.5,
        opacity: 0,
        duration: 2.5,
        ease: "expo.inOut",
      },
      "1st"
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
      "1st-round"
    );
    entryAnimation.from(
      paragraphRef.current,
      {
        opacity: 0,
        duration: 0.8,
        ease: "linear",
      },
      "1st-round"
    );

    entryAnimation.from(
      imageRightRef.current,
      {
        x: -300,

        scale: 0.5,
        delay: 0.5,
        opacity: 0,
        duration: 2.5,

        ease: "expo.inOut",
      },
      "1st"
    );

    // --------1st-round--------------------------------------------------------------------
    entryAnimation.from(
      mainButtonRef.current,
      {
        opacity: 0,
        duration: 1,
        ease: "power1.in",
      },
      "1st-round"
    );
    entryAnimation.from(
      extraTextsRef1.current,
      {
        y: 200,
        opacity: 0,
        duration: 2.5,
        ease: "back.out(2)",
      },
      "1st-round"
    );
    entryAnimation.from(
      extraTextsRef2.current,
      {
        y: 200,
        opacity: 0,
        duration: 2.5,
        ease: "back.out(2)",
      },
      "1st-round"
    );
    entryAnimation.from(
      extraTextsRef3.current,
      {
        y: 200,
        opacity: 0,
        duration: 2.5,
        ease: "back.out(2)",
      },
      "1st-round"
    );
  });
  return <div>Home</div>;
};

export default Home;
