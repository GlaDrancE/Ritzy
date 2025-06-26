import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import SplitType from "split-type";
import AnimateText from "./about-hooks/about-text";

export const AboutHeading = () => {
  const textRef = useRef(null);
  const containerRef = useRef(null);
  return (
    <section
      className="w-full flex h-screen justify-start font-maxima-nouva md:font-semibold md:text-3xl text-center text-white md:px-24 px-2 secondary-bg items-center z-50 relative"
      ref={containerRef}
    >
      <div className="">
        <AnimateText
          text={`At Ritzy, we are passionate about shaping the future of smart living.
          Founded by Deepa Jayaraman, our home automation journey began with a
          vision to transform homes into intelligent spaces, where technology
          seamlessly integrates with daily life. With years of experience in the
          automation industry, Ritzy has become synonymous with innovation,
          convenience, and unparalleled expertise.`}
          containerRef={containerRef}
          start={"top 90%"}
        />
      </div>
    </section>
  );
};
