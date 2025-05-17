import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "tailwindcss/tailwind.css";
import { useGSAP } from "@gsap/react";
import slide1 from "../assets/videos/slides/slide1.webm";
import slide2 from "../assets/videos/slides/slide2.webm";
import slide3 from "../assets/videos/slides/slide3.webm";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const HorizontalSlider = () => {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  const horizontalBannerRef = useRef(null);

  useGSAP(() => {
    const vpHeight = window.innerHeight;
    const container = containerRef.current;
    const slider = sliderRef.current;
    const horizontalBannerText = new SplitType(horizontalBannerRef.current, {
      type: "words",
    }).chars;
    const text = [];
    document.querySelectorAll(".how-it-works").forEach((e, index) => {
      text.push({ element: e, delay: index / 10 });
    });
    gsap.fromTo(
      horizontalBannerText,
      { opacity: 0.1 },
      {
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: "#horizontalBanner",
          start: "top 25%",
          end: "bottom 75%",
          scrub: true,
          onEnter: () => {
            gsap.to(container, {
              y: 200,
              duration: 0,
            });
          },
          onEnterBack: () => {
            gsap.to(container, {
              y: 200,
              duration: 1,
            });
          },
          onLeave: () => {
            gsap.to(container, {
              y: 0,
              duration: 1,
            });
          },
        },
      }
    );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: container,
          start: `top 0`, // Adjust start position
          end: () => `+=${window.innerHeight * 3}`,
          scrub: true,
          pin: true,
          onEnterBack: () => {
            gsap.to(".cover-banner", {
              opacity: 0,
            });
          },
          onLeave: () => {
            gsap.to(".cover-banner", {
              opacity: 1,
            });
          },
        },
      })
      .to(
        slider,
        {
          x: () => -window.innerWidth * 2 + 50,
          duration: 1,
          ease: "none",
        },
        0.1
      )
      .to(slider, {
        opacity: 1,
        duration: 0.1,
      });
  });

  return (
    <section className="relative">
      <div
        ref={horizontalBannerRef}
        id="horizontalBanner"
        className="w-screen h-screen primary-bg text-[#a39b8b] flex justify-center items-center md:text-7xl text-5xl font-francy text-center"
      >
        How it works
      </div>
      <div
        ref={containerRef}
        className="overflow-hidden m-auto flex items-center justify-center relative z-50"
      >
        <div
          className="relative w-screen h-screen primary-bg overflow-hidden"
          id="horizontal-slider-container"
        >
          <div
            ref={sliderRef}
            className="flex w-full h-full justify-between items-center"
          >
            <div className="flex-none w-full px-5 h-full flex items-center">
              <div className=" flex items-center h-[95%] w-full justify-center rounded-2xl overflow-hidden relative">
                <video
                  src={slide1}
                  autoPlay
                  muted
                  loop
                  className="w-full h-full object-cover"
                ></video>
                <div className="morph-glass absolute w-full bottom-0 left-0 flex items-center justify-between rounded-b-2xl text-white font-uber-move">
                  <h1 className="text-4xl">
                    <span className="text-5xl">1.</span> Consultation &
                    Planning:
                  </h1>
                  <p className="w-[30%] text-xl font-maxima-nouva">
                    We start with a detailed consultation to understand your
                    needs and create a tailored home automation plan.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-none w-full  pr-5 h-full flex items-center">
              <div className="rounded-2xl relative flex items-center justify-center overflow-hidden  h-[95%] w-full">
                <div className="morph-glass absolute w-full bottom-0 left-0 rounded-l-2xl text-white font-uber-move flex justify-between items-center">
                  <h1 className="text-4xl">
                    <span className="text-5xl">2.</span> Design & Integration:
                  </h1>
                  <p className="w-[40%] text-xl font-maxima-nouva">
                    Our team designs a seamless integration strategy, selects
                    products, and prepares for installation, ensuring everything
                    is connected on a single platform.
                  </p>
                </div>
                <video
                  src={slide2}
                  autoPlay
                  muted
                  loop
                  className="w-full h-full object-cover"
                ></video>
              </div>
            </div>
            <div className="flex-none w-full  pr-10 h-full flex items-center ">
              <div className="rounded-2xl relative flex items-center justify-center overflow-hidden  h-[95%] w-full">
                <div className="morph-glass absolute w-full bottom-0 right-0 rounded-r-2xl text-white font-uber-move flex  justify-between items-center">
                  <h1 className="text-4xl">
                    <span className="text-5xl">3.</span> Installation,
                    Programming & Support:
                  </h1>
                  <p className="text-xl font-maxima-nouva w-[40%]">
                    Expert technicians install, program, and test your system.
                    We provide training and ongoing support to ensure everything
                    runs smoothly.
                  </p>
                </div>
                <video
                  src={slide3}
                  autoPlay
                  muted
                  loop
                  className="w-full h-full object-cover"
                ></video>
              </div>
            </div>
          </div>
        </div>
        {/* <div
        className="absolute z-50 bottom-4 right-8 text-center"
        style={{ scale: "1" }}
      >
        <div className="relative">
          <div id="heading1" className="absolute">
            <h1>Seamless Integration & Ultimate Convenience</h1>
            <hr className="hr-1" />
            <p>
              Effortlessly control lighting, HVAC, curtains, and security
              systems from a single platform. Whether at home or on the go,
              manage everything from your smartphone or tablet, making everyday
              life simpler and more convenient.
            </p>
          </div>
          <div id="heading2" className="absolute">
            <h1>Enhanced Security & Peace of Mind</h1>
            <hr className="hr-2" />
            <p>
              Protect your home with cutting-edge CCTV surveillance, smart
              sensors, and intrusion alarm systems. Enjoy unparalleled peace of
              mind knowing your home and loved ones are safe and secure, no
              matter where you are.
            </p>
          </div>
          <div id="heading3" className="absolute">
            <h1>Energy Efficiency & Sustainability</h1>
            <hr className="hr-3" />
            <p>
              Save on energy bills with intelligent systems that adjust lighting
              and HVAC based on your preferences and schedules. Our eco-friendly
              solutions enhance comfort while promoting a sustainable lifestyle.
            </p>
          </div>
        </div>
      </div> */}
        <div className="cover-banner w-screen opacity-0 h-screen absolute primary-bg left-0 top-0 z-[999]"></div>
      </div>
    </section>
  );
};

export default HorizontalSlider;
