import { useGSAP } from "@gsap/react";
import React, { useEffect, useRef } from "react";
import img1 from "../assets/imageGrid/1.jpg";
import img2 from "../assets/imageGrid/2.jpg";
import img3 from "../assets/imageGrid/3.jpg";
import img4 from "../assets/imageGrid/4.jpg";
import img5 from "../assets/imageGrid/5.jpg";
import img6 from "../assets/imageGrid/6.jpg";
import img7 from "../assets/imageGrid/7.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Testimonials from "./Testimonials";
import { Link } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);
export default function ProductsGrid() {
  const containerRef = useRef();

  const imagesData = [
    {
      src: img1,
      class: "img1",
      width: 40,
      height: 40,
      x: -100,
      y: -40,
      z: -1000,
    },
    {
      src: img2,
      class: "img2",
      width: 40,
      height: 40,
      x: 50,
      y: -30,
      z: -200,
    },
    {
      src: img3,
      class: "img3",
      width: 40,
      height: 40,
      x: -80,
      y: -10,
      z: -300,
    },
    {
      src: img4,
      class: "img4",
      width: 40,
      height: 40,
      x: 100,
      y: 0,
      z: -400,
    },
  ];
  useGSAP(() => {
    const container = containerRef.current;

    // Create reusable animation configs
    const fadeInConfig = {
      opacity: 1,
      display: "block",
      duration: 0.3,
    };

    const fadeOutConfig = {
      opacity: 0,
      display: "none",
      duration: 0.3,
    };

    const zeroZConfig = {
      z: 0,
      duration: 0.5,
    };

    // Create the timeline with ScrollTrigger
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 0",
        end: "+=5000",
        pin: true,
        scrub: true,
      },
    });

    // Initial text animation
    timeline
      .to(".gridText", { opacity: 1, duration: 0.1 })
      .to(".gridText", { opacity: 0, duration: 0.1 })
      .set(".gridText", { display: "none" }); // Using set instead of to for instant changes

    // Loop through images to reduce code repetition
    ["img1", "img2", "img3", "img4"].forEach((img, index) => {
      const selector = `.${img}`;

      // Add animations for each image
      timeline
        .to(selector, fadeInConfig)
        .to(selector, zeroZConfig, "<") // "<" makes it start at the same time as previous animation
        .to(selector, fadeOutConfig);
    });

    // Final container animation
    timeline.set(container, {
      opacity: 0,
      zIndex: -99999999,
    });
  }, []);

  return (
    <>
      {/* <section className="w-screen h-screen relative overflow-hidden"> */}
      <section className="relative w-screen h-screen" ref={containerRef}>
        <div
          id="grid-hero-section-inner"
          className="grid-hero-section-inner secondary-bg z-[999999999999] w-screen h-screen"
        >
          <div
            id="grid-hero-section-content"
            className="grid-hero-section-content absolute w-screen h-[100dvh] z-10 inset-0"
          >
            <div
              id="grid-hero-section-content-inner"
              className="grid-hero-section-content-inner flex items-center justify-center relative text-white w-full h-full "
            >
              <h1 className="gridText opacity-0 text-5xl font-uber-move uppercase text-center">
                Glimps of our works
              </h1>
              {imagesData.map((img, index) => (
                <div
                  className={img.class}
                  key={index}
                  style={{
                    transform: `${`translate3d(${img.x}%,${img.y}%,${img.z}px)`}`,
                    position: "absolute",
                    display: "none",
                    width: `${img.width}vw`,
                    height: `${img.height}vw`,
                    borderRadius: "2rem",
                    transformStyle: "preserve-3d",
                    overflow: "hidden",
                    zIndex: "-9999",
                  }}
                >
                  <Link to={"/products"} className="block w-full h-full">
                    <img
                      src={img.src}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* <Testimonials /> */}
      {/* </section> */}
    </>
  );
}
