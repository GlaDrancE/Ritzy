import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import SplitType from "split-type";

export default function MobileBenifits() {
  const containerRef = useRef(null);
  useGSAP(() => {
    const enterText = new SplitType(".home-fixed-image1", { type: "words" })
      .chars;

    gsap.fromTo(
      enterText,
      { opacity: 0.2 },
      {
        opacity: 0.7,
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom 55%",
          scrub: true,
        },
      }
    );
  });
  return (
    <section className="w-screen flex flex-col relative">
      <div
        className="home-fixed-image1 md:text-5xl text-3xl flex flex-col justify-center z-[999999999999] relative !h-[120vh]  text-[#a39b8b]"
        ref={containerRef}
      >
        <h1 style={{ letterSpacing: "2px" }}>
          Features & Benefits for Customers
        </h1>

        <h2>Transform Your Home with Our Top Home Automation Benefits</h2>
      </div>
      <div className="my-4 mx-1">
        <img src="/images/img1.jpg" alt="" className="rounded-2xl" />
        <div className="morph-glass p-8 text-white text-center rounded-2xl">
          <div id="heading1">
            <h1 className="text-2xl font-helotypo">
              Seamless Integration & Ultimate Convenience
            </h1>
            <hr className="hr-1 my-12" />
            <p>
              Effortlessly control lighting, HVAC, curtains, and security
              systems from a single platform. Whether at home or on the go,
              manage everything from your smartphone or tablet, making everyday
              life simpler and more convenient.
            </p>
          </div>
        </div>
      </div>
      <div className="my-4 mx-1">
        <img src="/images/img2.jpg" className="rounded-2xl" alt="" />
        <div className="morph-glass p-8 text-white text-center rounded-2xl">
          <div id="heading2">
            <h1 className="text-2xl font-helotypo">
              Enhanced Security & Peace of Mind
            </h1>
            <hr className="hr-1 my-12" />
            <p>
              Protect your home with cutting-edge CCTV surveillance, smart
              sensors, and intrusion alarm systems. Enjoy unparalleled peace of
              mind knowing your home and loved ones are safe and secure, no
              matter where you are.
            </p>
          </div>
        </div>
      </div>
      <div className="my-4 mx-1">
        <img src="/images/img3.jpg" className="rounded-2xl block" alt="" />
        <div className="morph-glass p-8 text-white text-center rounded-2xl">
          <div id="heading3">
            <h1 className="text-2xl font-helotypo">
              Energy Efficiency & Sustainability
            </h1>
            <hr className="hr-1 my-12" />
            <p>
              Save on energy bills with intelligent systems that adjust lighting
              and HVAC based on your preferences and schedules. Our eco-friendly
              solutions enhance comfort while promoting a sustainable lifestyle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
