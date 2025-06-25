// Video by Tima Miroshnichenko: https://www.pexels.com/video/woman-using-digital-tablet-6474153/
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import SplitType from "split-type";
import slide1 from "../assets/videos/choose-us/slide1.mp4";
import slide2 from "../assets/videos/choose-us/slide2.mp4";
import slide3 from "../assets/videos/choose-us/slide3.mp4";

export default function WhyChooseUs() {
  const containerRef = useRef();
  // const vpHeight = window.innerHeight;
  const headingContainer = useRef();
  useGSAP(() => {
    // Cache selectors and configurations
    const selectors = {
      texts: Array.from({ length: 4 }, (_, i) => `#choose-us-text-${i}`),
      wrappers: Array.from({ length: 3 }, (_, i) => `.ws-${i + 1}`),
    };

    // Reusable animation configs
    const fadeOutConfig = {
      opacity: 0,
      x: -5,
      y: -10,
      stagger: 0.002,
      duration: 0.2,
    };

    const spanFadeOutConfig = {
      opacity: 0,
      x: -5,
      duration: 0.5,
    };

    const fadeInConfig = {
      opacity: 1,
      stagger: 0.002,
      duration: 0.2,
    };

    const spanFadeInConfig = {
      opacity: 1,
      x: -5,
      duration: 0.5,
    };

    // Initialize SplitType for all texts at once
    const splitTexts = selectors.texts.map(
      (selector) => new SplitType(selector, { type: "chars" }).chars
    );

    const containerHeading = new SplitType(headingContainer.current, {
      type: "chars",
    }).chars;

    // Initial states
    gsap.set(
      [
        splitTexts[2],
        splitTexts[3],
        `${selectors.texts[2]} span`,
        `${selectors.texts[3]} span`,
      ],
      { opacity: 0 }
    );

    // Heading animation
    gsap.fromTo(
      containerHeading,
      { opacity: 0.5 },
      {
        opacity: 1,
        duration: 1,
        stagger: 1,
        scrollTrigger: {
          trigger: headingContainer.current,
          start: "top 75%",
          end: "top top",
          scrub: true,
        },
      }
    );

    // Main timeline
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=5000",
        scrub: true,
        pin: true,
      },
    });

    // Add card animation for larger screens
    if (window.innerWidth >= 600) {
      timeline.to("#choose-us-card", { y: 0, duration: 0.1 });
    }

    // Create section transitions
    const createSectionTransition = (index) => {
      const currentText = splitTexts[index];
      const nextText = splitTexts[index + 1];
      const currentSpan = `${selectors.texts[index]} span`;
      const nextSpan = `${selectors.texts[index + 1]} span`;

      return {
        height: "100%",
        onStart: () => {
          gsap.to(currentText, fadeOutConfig);
          gsap.to(currentSpan, spanFadeOutConfig);
          gsap.fromTo(nextSpan, { opacity: 0 }, spanFadeInConfig);
          gsap.fromTo(nextText, { opacity: 0 }, fadeInConfig);
        },
        onReverseComplete: () => {
          gsap.to(currentText, { ...fadeInConfig, x: 0, y: 0 });
          gsap.to(currentSpan, { ...spanFadeInConfig, x: 0 });
          gsap.fromTo(nextSpan, { opacity: 1 }, { ...spanFadeOutConfig, x: 0 });
          gsap.fromTo(
            nextText,
            { opacity: 1 },
            { ...fadeOutConfig, x: 0, y: 0 }
          );
        },
      };
    };

    // Add section transitions to timeline
    selectors.wrappers.forEach((wrapper, index) => {
      timeline.to(wrapper, createSectionTransition(index));
    });
  }, []);
  return (
    <section className="relative h-[calc(5000px-200vh)]">
      <div
        className="w-screen h-screen secondary-bg text-[#65625a] flex items-center justify-center top-[-100vh] font-francy absolute z-50 text-center md:text-7xl text-5xl"
        ref={headingContainer}
      >
        <h1>Why Us?</h1>
      </div>
      <section
        className="absolute overflow-hidden top-[-300vh] flex justify-center tertiary-bg z-20 w-screen h-screen"
        ref={containerRef}
      >
        <div className="flex flex-col items-center justify-center z[99999]">
          <div
            className="relative w-[calc(100vw-2rem)] h-[calc(100vh-2rem)] rounded-2xl overflow-hidden m-auto md:mr-4"
            id="choose-us-card"
          >
            <div className="relative grid  grid-cols-1 gap-1 w-full h-full">
              <div className="h-full  rounded-2xl absolute text-black morph-glass w-1/4 md:px-4 !px-0 text-center z-[9999]">
                <div className="relative w-full h-full">
                  <div
                    id="choose-us-text-0"
                    className="absolute top-[70%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full px-4 !text-left"
                  >
                    <h1 className="font-maxima-nouva font-bold text-4xl tracking-widest text-left"></h1>
                    <span className="h-[1px] w-full inline-block mt-8 mb-8"></span>
                    <p className="font-uber-move text-md tracking-widest"></p>
                  </div>
                  <div
                    id="choose-us-text-1"
                    className="absolute top-[70%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full px-4 !text-left"
                  >
                    <h1 className="font-maxima-nouva font-bold text-4xl tracking-widest text-left">
                      Expert Consultation:
                    </h1>
                    <span className="h-[1px] w-full inline-block mt-8 mb-8"></span>
                    <p className="font-uber-move text-md tracking-widest">
                      Receive personalized advice and solutions tailored to your
                      needs.
                    </p>
                  </div>
                  <div
                    id="choose-us-text-2"
                    className="absolute top-[70%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full text-left px-4"
                  >
                    <h1 className="font-maxima-nouva font-bold text-4xl tracking-widest">
                      Reliable Support:
                    </h1>
                    <span className="h-[1px] w-full inline-block  mt-8 mb-8"></span>
                    <p className="font-uber-move text-md tracking-widest">
                      Benefit from our dedicated support team and robust
                      after-sales service.
                    </p>
                  </div>
                  <div
                    id="choose-us-text-3"
                    className="absolute top-[70%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full text-left px-4"
                  >
                    <h1 className="font-maxima-nouva font-bold text-4xl tracking-widest">
                      Advanced Technology:
                    </h1>
                    <span className="h-[1px] w-full inline-block mt-8 mb-8"></span>
                    <p className="font-uber-move text-md tracking-widest">
                      Stay ahead with the latest innovations in home automation.
                      Transform your home into a smart haven with our trusted
                      and comprehensive home automation services.
                    </p>
                  </div>
                </div>
              </div>
              <div className="h-full w-full rounded-2xl col-span-2 overflow-hidden md:relative  top-0 absolute ">
                <div className="w-full h-full ws-0">
                  <video
                    src={slide1}
                    className="h-full w-full object-cover"
                    autoPlay
                    muted
                    loop
                  ></video>
                </div>
                <div className="w-full h-0 ws-1">
                  <video
                    src={slide1}
                    className="h-full w-full object-cover"
                    autoPlay
                    muted
                    loop
                  ></video>
                </div>
                <div className="w-full h-0 ws-2 absolute bottom-0 left-0">
                  <video
                    src={slide2}
                    className="h-full w-full object-cover"
                    autoPlay
                    muted
                    loop
                  ></video>
                </div>
                <div className="w-full h-0 ws-3 absolute bottom-0 left-0">
                  <video
                    src={slide3}
                    className="h-full w-full object-cover"
                    autoPlay
                    muted
                    loop
                  ></video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
