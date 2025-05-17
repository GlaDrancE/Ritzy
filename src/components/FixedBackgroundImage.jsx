import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import SplitType from "split-type";
import React, { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import img1 from "../assets/images/slides/img1.jpg";
import img2 from "../assets/images/slides/img2.jpg";
import img3 from "../assets/images/slides/img3.jpg";
gsap.registerPlugin(ScrollTrigger);
export default function FixedBackgroundImage() {
  const containerRef = useRef();
  const containerRef2 = useRef();
  const sliderRef = useRef();

  useGSAP(() => {
    const vpHeight = window.innerHeight;
    const splitHeading1 = new SplitType("#heading1 > h1, #heading1 > p", {
      type: "words",
    });
    const splitHeading2 = new SplitType("#heading2 > h1, #heading2 > p", {
      type: "words",
    });
    const splitHeading3 = new SplitType("#heading3 > h1, #heading3 > p", {
      type: "words",
    });
    splitHeading2.words.forEach((word) => {
      word.style.opacity = 0;
    });
    splitHeading3.words.forEach((word) => {
      word.style.opacity = 0;
    });
    const enterText = new SplitType(".home-fixed-image1", { type: "words" })
      .chars;

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: `top ${vpHeight}`,
      end: `+=${vpHeight * 3}`,
      // pin: true,
      scrub: true,
      onEnter: () => {
        gsap.to(containerRef2.current, {
          position: "fixed",
          duration: 0,
          zIndex: 1,
        });
        gsap.to(containerRef2.current, {
          scale: 1,
        });
        // gsap.to("#fixed-image-inner", {
        //   width: "98%",
        //   height: "98%",
        // });
      },
      onEnterBack: () => {
        gsap.to(containerRef2.current, {
          position: "fixed",
          duration: 0,
          zIndex: 1,
        });
      },
      onLeave: () => {
        gsap.to(containerRef2.current, {
          position: "absolute",
          duration: 0,
        });
      },
      onLeaveBack: () => {
        gsap.to(containerRef2.current, {
          position: "absolute",
          scale: 0,
          duration: 0,
        });
      },
      onUpdate: (self) => {
        const progress = self.progress * (3 * vpHeight);
        document.querySelector("#fixed-image-inner").scrollTop = progress;

        if (progress >= 900 && progress < 1500) {
          gsap.to([splitHeading1.words, ".hr-1"], {
            duration: 0.1,
            opacity: 0,
          });
          gsap
            .timeline()
            .to([splitHeading3.words, ".hr-3"], {
              duration: 0.1,
              opacity: 0,
            })
            .to([splitHeading2.words, ".hr-2"], {
              duration: 0.2,
              opacity: 1,
            });
        }
        if (progress > 1500) {
          gsap.to([splitHeading1.words, ".hr-1"], {
            opacity: 0,
          });
          gsap
            .timeline()
            .to([splitHeading2.words, ".hr-2"], {
              duration: 0.1,
              opacity: 0,
            })
            .to([splitHeading3.words, ".hr-3"], {
              duration: 0.2,
              opacity: 1,
            });
        }
        if (progress < 900) {
          gsap.to([splitHeading2.words, ".hr-2"], {
            opacity: 0,
            duration: 0.1,
          });
          gsap.to([splitHeading3.words, ".hr-3"], {
            opacity: 0,
            duration: 0.1,
          });
          gsap.to([splitHeading1.words, ".hr-1"], {
            opacity: 1,
            duration: 0.2,
          });
        }
      },
    });

    gsap.to([".slider-1"], {
      backgroundPositionY: "80%",
      scrollTrigger: {
        trigger: ".slider-1",
        start: "top bottom",
        bottom: "bottom top",
        scrub: true,
      },
    });
    gsap.to([".slider-2"], {
      backgroundPositionY: "80%",
      scrollTrigger: {
        trigger: ".slider-2",
        start: "top bottom",
        bottom: "bottom top",
        scrub: true,
      },
    });
    gsap.to([".slider-3"], {
      backgroundPositionY: "100%",
      scrollTrigger: {
        trigger: ".slider-3",
        start: "top bottom",
        bottom: "bottom top",
        scrub: true,
      },
    });

    gsap.fromTo(
      enterText,
      { opacity: 0.2 },
      {
        opacity: 0.7,
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".home-fixed-image1",
          start: "top bottom",
          end: "bottom 75%",
          scrub: true,
        },
      }
    );
  });

  return (
    <>
      <section className="relative">
        <div className="home-fixed-image1 md:text-5xl text-3xl flex flex-col justify-center z-[99999] relative !h-[120vh]  text-[#65625a]">
          <h1 style={{ letterSpacing: "2px" }}>
            Features & Benefits for Customers
          </h1>

          <h2>Transform Your Home with Our Top Home Automation Benefits</h2>
        </div>
        <div
          className="relative z-[9999] m-auto overflow-y-auto overflow-x-hidden rounded-2x"
          id="fixed-image-inner"
          ref={containerRef}
        >
          <div className="h-[300vh] inner-container">
            <div
              className="home-fixed-image slider-1"
              style={{ backgroundImage: `url(${img1})` }}
            ></div>
            <div
              className="home-fixed-image slider-2"
              style={{ backgroundImage: `url(${img2})` }}
            ></div>
            <div
              className="home-fixed-image slider-3"
              style={{ backgroundImage: `url(${img3})` }}
            ></div>
          </div>
          <div
            className="absolute z-50 home-image-card-container bottom-4 left-4 text-center"
            ref={containerRef2}
          >
            <div className="relative distortion-element">
              <div id="heading1" className="absolute">
                <h1>Seamless Integration & Ultimate Convenience</h1>
                <hr className="hr-1" />
                <p>
                  Effortlessly control lighting, HVAC, curtains, and security
                  systems from a single platform. Whether at home or on the go,
                  manage everything from your smartphone or tablet, making
                  everyday life simpler and more convenient.
                </p>
              </div>
              <div id="heading2" className="absolute">
                <h1>Enhanced Security & Peace of Mind</h1>
                <hr className="hr-2" />
                <p>
                  Protect your home with cutting-edge CCTV surveillance, smart
                  sensors, and intrusion alarm systems. Enjoy unparalleled peace
                  of mind knowing your home and loved ones are safe and secure,
                  no matter where you are.
                </p>
              </div>
              <div id="heading3" className="absolute">
                <h1>Energy Efficiency & Sustainability</h1>
                <hr className="hr-3" />
                <p>
                  Save on energy bills with intelligent systems that adjust
                  lighting and HVAC based on your preferences and schedules. Our
                  eco-friendly solutions enhance comfort while promoting a
                  sustainable lifestyle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
