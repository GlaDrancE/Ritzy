import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import SplitType from "split-type";
import slide1 from "../assets/videos/slides/slide1.webm";
import slide2 from "../assets/videos/slides/slide2.webm";
import slide3 from "../assets/videos/slides/slide3.webm";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function MobileHorizontal() {
  const horizontalBannerRef = useRef(null);
  const worksRef = useRef(null);

  // useEffect(() => {
  //   console.log(horizontalBannerRef.current);

  //   const horizontalBannerText = new SplitType(horizontalBannerRef.current, {
  //     type: "words",
  //   }).chars;

  //   const t1 = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: "#horizontalBanner",
  //       start: "top 25%",
  //       end: "bottom bottom",
  //       scrub: true,
  //       markers: true,
  //       // onEnter: () => {
  //       //   gsap.to(worksRef.current, { position: "fixed", duration: 0 });
  //       // },
  //       // onLeave: () => {
  //       //   gsap.to(worksRef.current, { position: "relative", duration: 0 });
  //       // },
  //     },
  //   });
  //   // t1.fromTo(
  //   //   horizontalBannerText,
  //   //   { opacity: 0.1 },
  //   //   { opacity: 1, duration: 1, stagger: 0.1 }
  //   // );

  //   return () => {
  //     if (horizontalBannerText) {
  //       horizontalBannerText.forEach((char) => {
  //         gsap.killTweensOf(char);
  //       });
  //       t1.kill();
  //     }
  //   };
  // }, [horizontalBannerRef]);
  return (
    <section className="relative">
      <div
        ref={horizontalBannerRef}
        id="horizontalBanner"
        className="w-screen h-screen primary-bg text-[#a39b8b] flex justify-center items-center md:text-7xl text-5xl font-francy text-center"
      >
        How it works
      </div>
      <div className="top-0 left-0" ref={worksRef}>
        <div className="my-4 mx-1 morph-glass p-2  rounded-2xl bg-[#aeaeae4a]">
          <div className=" text-white text-center rounded-2xl my-4">
            <div id="heading1">
              <h1 className="text-4xl flex items-center">
                <span className="text-5xl">1.</span> Consultation & Planning:
              </h1>
              <hr className="my-8" />
              <p className="text-xl font-maxima-nouva">
                We start with a detailed consultation to understand your needs
                and create a tailored home automation plan.
              </p>
            </div>
          </div>{" "}
          <video
            src={slide1}
            autoPlay
            muted
            loop
            className="rounded-2xl"
          ></video>
        </div>
        <div className="my-4 mx-1 morph-glass p-2  rounded-2xl bg-[#aeaeae4a]">
          <div className="  text-white text-center my-4 ">
            <div id="heading2">
              <h1 className="text-4xl mb-12 flex items-center">
                <span className="text-6xl mr-1 block">2.</span> Design &
                Integration:
              </h1>
              <hr className="my-8" />
              <p className="text-xl font-maxima-nouva">
                Our team designs a seamless integration strategy, selects
                products, and prepares for installation, ensuring everything is
                connected on a single platform.
              </p>
            </div>
          </div>{" "}
          <video
            src={slide2}
            autoPlay
            muted
            loop
            className="rounded-2xl"
          ></video>
        </div>
        <div className="my-4 mx-1 morph-glass p-2  rounded-2xl bg-[#aeaeae4a]">
          <div className=" text-white text-center rounded-2xl">
            <div id="heading3">
              <h1 className="text-4xl mb-12 flex items-center">
                <span className="text-6xl mr-1 block">3.</span> Installation,
                Programming & Support:
              </h1>
              <hr className="my-8" />
              <p className="text-xl font-maxima-nouva">
                Expert technicians install, program, and test your system. We
                provide training and ongoing support to ensure everything runs
                smoothly.
              </p>
            </div>
          </div>{" "}
          <video
            src={slide3}
            autoPlay
            muted
            loop
            className="rounded-2xl"
          ></video>
        </div>
      </div>
    </section>
  );
}
