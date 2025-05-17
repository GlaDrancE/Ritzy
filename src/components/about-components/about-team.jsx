import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import AnimateText from "./about-hooks/about-text";
import men from "../../assets/images/about/men.jpg";
import women from "../../assets/images/about/women.jpeg";

const AboutTeam = () => {
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
    <section className="relative w-full">
      <div className="h-[100vh] w-full -mt-[100vh]" ref={containerRef}>
        <div className="h-screen w-full relative bottom-0">
          <div className="h-screen w-full relative">
            <div id="mission" className="h-full w-full ">
              <div className="grid md:grid-cols-[25%,50%,25%] self-center text-[#e3e0d9] items-end w-full h-full tertiary-bg">
                <div className="w-full py-12 px-2 h-full flex items-start">
                  <div className="h-full  min-w-full">
                    <img
                      src={women}
                      className="w-full h-full aspect-auto object-cover rounded-2xl"
                      alt=""
                    />
                  </div>
                  <div>
                    <h1 className="pl-4 text-nowrap text-5xl font-uber-move font-bold">
                      <AnimateText
                        text={"Deepa Jayaraman"}
                        containerRef={containerRef}
                        start="bottom bottom"
                      />
                    </h1>
                    <h1 className="pl-4 text-nowrap text-2xl font-uber-move font-bold">
                      <AnimateText
                        text={"Founder"}
                        containerRef={containerRef}
                        start="bottom bottom"
                      />
                    </h1>
                  </div>
                </div>
                <div className="w-full md:p-8 md:px-8 px-4 pb-12 md:text-xl font-maxima-nouva">
                  <AnimateText
                    text={`Our team, led by Deepa Jayaraman and supported by key member Anil, is dedicated to delivering world-class automation solutions. From the initial consultation to ongoing support, we work closely with our clients to ensure their homes are future-ready. Together, we bring expertise, dedication, and a passion for pushing the boundaries of smart home technology.`}
                    containerRef={containerRef}
                    start={"bottom bottom"}
                  />
                </div>
                <div className="w-full relative px-2 h-full flex items-center">
                  <div className="w-0 absolute -left-20 top-[30%]">
                    <h1 className="pr-4 text-nowrap text-5xl font-uber-move font-bold">
                      <AnimateText text={"Anil"} containerRef={containerRef} />
                    </h1>
                    <h1 className="pr-4 text-nowrap text-2xl font-uber-move font-bold">
                      <AnimateText text={"Team"} containerRef={containerRef} />
                    </h1>
                  </div>
                  <div className="h-2/3 min-w-full">
                    <img
                      src={men}
                      className="w-full h-full rounded-2xl aspect-auto object-cover"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutTeam;
