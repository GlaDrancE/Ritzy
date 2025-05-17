import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { useEffect } from "react";
import AnimateText from "./about-hooks/about-text";

const AboutMission = () => {
  const containerRef = useRef(null);
  useGSAP(() => {
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        pin: true,
      },
    });
  }, []);
  return (
    <section className="relative w-full z-20 mb-12">
      <div className="h-[100vh] w-full -mt-[100vh]" ref={containerRef}>
        <div className="h-screen w-full relative bottom-0">
          <div className="h-screen w-full relative">
            <div id="mission" className="h-full w-full secondary-bg">
              <div className="grid md:grid-cols-[35%,65%] self-center text-white items-center w-full h-full">
                <div className="w-full h-full flex items-center">
                  <h1 className="md:text-4xl w-full text-2xl md:p-24 p-8 font-maxima-nouva font-semibold text-center ">
                    <AnimateText
                      text={`Our Mission`}
                      containerRef={containerRef}
                      start={"top top+=0"}
                    />
                  </h1>
                  <span className="md:h-[calc(100%_-_4rem)] inline-block w-[.1rem] bg-[#6b755f]"></span>
                </div>
                <div className="w-full p-8 md:text-3xl font-maxima-nouva">
                  <AnimateText
                    text={`                    We aim to create homes that offer unmatched convenience,
                    safety, and energy efficiency. By merging cutting-edge
                    technology with personalized solutions, we ensure that each
                    home automation project reflects the lifestyle and needs of
                    our clients.`}
                    containerRef={containerRef}
                    start={"top top+=0"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutMission;
