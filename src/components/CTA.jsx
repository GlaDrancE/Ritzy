import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import SplitType from "split-type";

export default function CTA() {
  const containerRef = useRef(null);
  const buttonRef = useRef(null);
  useGSAP(() => {
    const ctaText = new SplitType(".cta-text", { type: "words" }).chars;
    const container = containerRef.current;
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        // start: "top top",
        start: window.innerWidth > 600 ? "top top" : "top bottom",
        end: "+=1000",
        pin: window.innerWidth > 600 ? true : false,
        scrub: true,
      },
    });
    timeline.fromTo(
      ctaText,
      { y: 100 },
      {
        y: 0,
        duration: 1.2,
        stagger: 0.08,
        delay: 0.5,
      }
    );
    timeline.fromTo(
      ".cta-sub-text",
      { y: 30 },
      {
        y: 0,
        duration: 0.7,
      }
    );
    gsap.to(".cta-container", {
      borderRadius: "1rem",
      width: "96%",
      height: "96%",
      delay: 2,
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "+=500",
        scrub: true,
      },
    });
    // if (window.innerWidth > 600) {
    //   gsap.fromTo(
    //     ".cta-img",
    //     {
    //       y: 0,
    //     },
    //     {
    //       y: -100,
    //       duration: 1,
    //       scrollTrigger: {
    //         trigger: container,
    //         start: "top top",
    //         end: "+=1000",
    //         scrub: true,
    //       },
    //     }
    //   );
    // }
  });
  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const x2 = (e.clientX - rect.left) / rect.width;
      const y2 = (e.clientY - rect.top) / rect.height;

      const moveX = (x2 - 0.5) * 20; // Adjust multiplier to increase or decrease movement
      const moveY = (y2 - 0.5) * 20;
      gsap.to(buttonRef.current, {
        x: x - buttonRef.current.clientWidth / 2,
        y: y - buttonRef.current.clientHeight / 2,
        ease: "power3.out",
        duration: 0.3,
      });
      gsap.to(".cta-img", {
        x: moveX,
        y: moveY,
        ease: "power3.out",
        duration: 0.3,
      });
    };

    const handleMouseEnter = () => {
      gsap.to(buttonRef.current, {
        opacity: 1,
        scale: 1,
        pointerEvents: "auto",
      });
      document.body.style.cursor = "none";
    };

    const handleMouseLeave = () => {
      gsap.to(buttonRef.current, {
        opacity: 0,
        scale: 0,
        pointerEvents: "none",
      });
      document.body.style.cursor = "auto";
    };

    if (window.innerWidth > 600) {
      containerRef.current.addEventListener("mousemove", handleMouseMove);
      containerRef.current.addEventListener("mouseenter", handleMouseEnter);
      containerRef.current.addEventListener("mouseleave", handleMouseLeave);
    }
  }, []);
  return (
    // <div className="relative h-screen w-screen">
    <section className="relative w-full h-screen" ref={containerRef}>
      <div className="w-full h-full tertiary-bg text-white flex items-center justify-center absolute  left-0 z-10 cursor-none">
        <div className="cta-container flex items-center justify-center h-full w-full text-center relative overflow-hidden font-francy m-0">
          <div className="flex flex-col m-auto">
            <h1 className="cta-text text-8xl relative z-50 tracking-wider overflow-hidden">
              Design Your Dream
            </h1>
            <div className="z-50 relative text-xl overflow-hidden">
              <h4 className="cta-sub-text">
                Experience the Art of Elegant Living.
              </h4>
            </div>

            <div>
              <Link
                to={"/contact"}
                className="p-2 flex items-center bg-black text-white font-francy relative z-50 rounded-full justify-center md:hidden"
              >
                Start Your Journey
              </Link>
            </div>
          </div>
          <img
            src="/cta.jpg"
            className="cta-img w-full h-full object-cover absolute top-0 left-0"
            alt=""
          />
          <Link to={"/contact"} ref={buttonRef} className="cursor-button">
            Start your journey
          </Link>
        </div>
      </div>
    </section>
    // </div>
  );
}
