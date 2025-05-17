import React, { useRef } from "react";
import AnimateText from "./about-hooks/about-text";

const AboutChooseUs = () => {
  const containerRef = useRef(null);
  return (
    <section
      className="w-full h-screen relative tertiary-bg p-8"
      ref={containerRef}
    >
      <div className="flex items-center">
        <span className="md:h-[.06rem] block w-[calc(100%_-_4rem)] mx-auto bg-[#c5bfb4]"></span>
        <span className="tertiary-bg px-2 text-[#dbd8d3]">+</span>
        <span className="md:h-[.06rem] block w-[calc(100%_-_4rem)] mx-auto bg-[#c5bfb4]"></span>
      </div>
      <div className="flex flex-col justify-center h-full pb-24 text-[#dbd8d3]">
        <div className="md:text-3xl text-center pt-8 font-maxima-nouva font-bold">
          <AnimateText
            text={"Why Choose Us ?"}
            containerRef={containerRef}
            start="top 50%"
          />
        </div>
        <div className="md:text-xl text-sm pt-8 font-maxima-nouva">
          <AnimateText
            text={`At Ritzy, we believe in providing more than just technology—we offer a lifestyle upgrade. With our integrated automation solutions, you can control everything from lighting, security, and entertainment systems with just a few taps, whether you're home or miles away. We pride ourselves on delivering solutions that not only meet but exceed your expectations, with a focus on energy efficiency and seamless control.
Our commitment to excellence and client satisfaction is the foundation of everything we do. Join us in experiencing the next level of home automation, where convenience, safety, and style come together effortlessly.
`}
            containerRef={containerRef}
            start="top 50%"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutChooseUs;
