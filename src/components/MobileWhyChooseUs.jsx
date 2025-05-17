// Video by Tima Miroshnichenko: https://www.pexels.com/video/woman-using-digital-tablet-6474153/
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import SplitType from "split-type";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Navigation } from "swiper/modules";
// import "swiper/css/pagination";
export default function MobileWhyChooseUs() {
  // const containerRef = useRef();
  // const vpHeight = window.innerHeight;

  // useGSAP(() => {
  //   const chooseUsText1 = new SplitType("#choose-us-text-1", { type: "chars" })
  //     .chars;
  //   const chooseUsText2 = new SplitType("#choose-us-text-2", { type: "chars" })
  //     .chars;
  //   const chooseUsText3 = new SplitType("#choose-us-text-3", { type: "chars" })
  //     .chars;

  //   gsap.to(chooseUsText2, { opacity: 0 });
  //   gsap.to("#choose-us-text-2 span", { opacity: 0 });
  //   gsap.to(chooseUsText3, { opacity: 0 });
  //   gsap.to("#choose-us-text-3 span", { opacity: 0 });
  //   const container = containerRef.current;
  //   // function updatePinSpacer() {
  //   //   const containerHeight = container.offsetHeight;
  //   //   const pinSpacer = container.parentNode.querySelector(".pin-spacer");
  //   //   if (pinSpacer) {
  //   //     pinSpacer.style.height = `${containerHeight}px`;
  //   //   }
  //   // }
  //   const timeline = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: container,
  //       start: "top top",
  //       end: "+=5000",
  //       scrub: true,
  //       pin: true,
  //       // onLeave: () => {
  //       //   gsap.to(container, { zIndex: -1, duration: 0 });
  //       // },
  //     },
  //   });
  //   if (window.innerWidth >= 600) {
  //     timeline.to("#choose-us-card", {
  //       y: 0,
  //       duration: 0.1,
  //     });
  //   }
  //   timeline.to(".ws-2", {
  //     height: "100%",
  //     delay: 0.1,
  //     onStart: () => {
  //       gsap.to(chooseUsText1, {
  //         opacity: 0,
  //         x: -5,
  //         y: -10,
  //         stagger: 0.002,
  //         duration: 0.2,
  //       });
  //       gsap.to("#choose-us-text-1 span", {
  //         opacity: 0,
  //         x: -5,
  //         duration: 0.5,
  //       });
  //       gsap.fromTo(
  //         "#choose-us-text-2 span",
  //         { opacity: 0 },
  //         {
  //           opacity: 1,
  //           x: -5,
  //           duration: 0.5,
  //         }
  //       );
  //       gsap.fromTo(
  //         chooseUsText2,
  //         { opacity: 0 },
  //         {
  //           opacity: 1,
  //           stagger: 0.002,
  //           duration: 0.2,
  //         }
  //       );
  //     },
  //     onReverseComplete: () => {
  //       gsap.to(chooseUsText1, {
  //         opacity: 1,
  //         x: 0,
  //         y: 0,
  //         stagger: 0.002,
  //         duration: 0.2,
  //       });
  //       gsap.to("#choose-us-text-1 span", {
  //         opacity: 1,
  //         x: 0,
  //         duration: 0.5,
  //       });
  //       gsap.fromTo(
  //         "#choose-us-text-2 span",
  //         { opacity: 1 },
  //         {
  //           opacity: 0,
  //           x: 0,
  //           duration: 0.5,
  //         }
  //       );
  //       gsap.fromTo(
  //         chooseUsText2,
  //         { opacity: 1 },
  //         {
  //           opacity: 0,
  //           stagger: 0.002,
  //           duration: 0.2,
  //         }
  //       );
  //     },
  //   });
  //   timeline.to(".ws-3", {
  //     height: "100%",
  //     onStart: () => {
  //       gsap.to(chooseUsText2, {
  //         opacity: 0,
  //         x: -5,
  //         y: -10,
  //         stagger: 0.002,
  //         duration: 0.2,
  //       });
  //       gsap.to("#choose-us-text-2 span", {
  //         opacity: 0,
  //         x: -5,
  //         duration: 0.5,
  //       });
  //       gsap.fromTo(
  //         "#choose-us-text-3 span",
  //         { opacity: 0 },
  //         {
  //           opacity: 1,
  //           x: -5,
  //           duration: 0.5,
  //         }
  //       );
  //       gsap.fromTo(
  //         chooseUsText3,
  //         { opacity: 0 },
  //         {
  //           opacity: 1,
  //           stagger: 0.002,
  //           duration: 0.2,
  //         }
  //       );
  //     },
  //     onReverseComplete: () => {
  //       gsap.to(chooseUsText2, {
  //         opacity: 1,
  //         x: 0,
  //         y: 0,
  //         stagger: 0.002,
  //         duration: 0.2,
  //       });
  //       gsap.to("#choose-us-text-2 span", {
  //         opacity: 1,
  //         x: 0,
  //         duration: 0.5,
  //       });
  //       gsap.fromTo(
  //         "#choose-us-text-3 span",
  //         { opacity: 1 },
  //         {
  //           opacity: 0,
  //           x: 0,
  //           duration: 0.5,
  //         }
  //       );
  //       gsap.fromTo(
  //         chooseUsText3,
  //         { opacity: 1 },
  //         {
  //           opacity: 0,
  //           stagger: 0.002,
  //           duration: 0.2,
  //         }
  //       );
  //     },
  //   });
  // });
  return (
    <>
      {/* <section
        className="relative overflow-hidden flex justify-center primary-bg z-20 w-screen h-screen"
        ref={containerRef}
      >
        <div className="flex flex-col items-center justify-center z[99999]">
          <div
            className="relative w-[calc(100vw-2rem)] h-[calc(100vh-2rem)] rounded-2xl overflow-hidden m-auto md:mr-4"
            id="choose-us-card"
          >
            <div className="relative grid md:grid-cols-3 grid-cols-1 gap-1 w-full h-full">
              <div className="h-full w-full rounded-2xl relative text-white morph-glass md:px-4 !px-0 text-center z-[9999]">
                <div className="relative w-full h-full">
                  <div
                    id="choose-us-text-1"
                    className="absolute top-[70%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full"
                  >
                    <h1 className="font-maxima-nouva font-bold text-4xl tracking-widest">
                      Unmatched Expertise
                    </h1>
                    <span className="h-[1px] w-full inline-block bg-[gray] mt-16 mb-8"></span>
                    <p className="font-uber-move text-md tracking-widest">
                      At Ritzy, we bring unparalleled expertise to every
                      project. Our team of seasoned designers combines industry
                      knowledge with a passion for innovation, ensuring that
                      each design is both functional and aesthetically stunning.
                    </p>
                  </div>
                  <div
                    id="choose-us-text-2"
                    className="absolute top-[70%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full"
                  >
                    <h1 className="font-maxima-nouva font-bold text-4xl tracking-widest">
                      Tailored Solutions
                    </h1>
                    <span className="h-[1px] w-full inline-block bg-[gray] mt-16 mb-8"></span>
                    <p className="font-uber-move text-md tracking-widest">
                      We understand that every space is unique. Our personalized
                      approach means we work closely with you to craft designs
                      that reflect your style and meet your needs, turning your
                      vision into a reality.
                    </p>
                  </div>
                  <div
                    id="choose-us-text-3"
                    className="absolute top-[70%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full"
                  >
                    <h1 className="font-maxima-nouva font-bold text-4xl tracking-widest">
                      Attention to Detail
                    </h1>
                    <span className="h-[1px] w-full inline-block bg-[gray] mt-16 mb-8"></span>
                    <p className="font-uber-move text-md tracking-widest">
                      From concept to completion, we pride ourselves on our
                      meticulous attention to detail. Our commitment to
                      excellence ensures that every element of your space is
                      thoughtfully considered and impeccably executed.
                    </p>
                  </div>
                </div>
              </div>
              <div className="h-full w-full rounded-2xl col-span-2 overflow-hidden md:relative  top-0 absolute ">
                <div className="w-full h-full ws-1">
                  <video
                    src="/slide1.mp4"
                    className="h-full w-full object-cover"
                    autoPlay
                    muted
                    loop
                  ></video>
                </div>
                <div className="w-full h-0 ws-2 absolute bottom-0 left-0">
                  <video
                    src="/slide2.mp4"
                    className="h-full w-full object-cover"
                    autoPlay
                    muted
                    loop
                  ></video>
                </div>
                <div className="w-full h-0 ws-3 absolute bottom-0 left-0">
                  <video
                    src="/slide3.mp4"
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
      </section> */}
      <section className="w-screen h-screen p-4">
        <div className="flex w-full h-full items-center justify-center">
          <Swiper
            className="w-full h-full"
            slidesPerView={1}
            spaceBetween={30}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            // onSlideChange={handleSlideCount}
            modules={[Navigation]}
          >
            <SwiperSlide className="w-full h-full relative overflow-hidden rounded-2xl">
              <div className="h-full w-full relative  text-white morph-glass md:px-4 !px-0 text-center z-[9999]">
                <div
                  id="choose-us-text-1"
                  className="w-full h-full flex flex-col justify-center relative"
                >
                  <h1 className="font-maxima-nouva font-bold text-4xl tracking-widest">
                    Unmatched Expertise
                  </h1>
                  <span className="h-[1px] w-full inline-block bg-[gray] mt-16 mb-8"></span>
                  <p className="font-uber-move text-md tracking-widest">
                    At Ritzy, we bring unparalleled expertise to every project.
                    Our team of seasoned designers combines industry knowledge
                    with a passion for innovation, ensuring that each design is
                    both functional and aesthetically stunning.
                  </p>
                </div>
              </div>
              <div className="w-full h-full ws-3 absolute top-0 left-0">
                <video
                  src="/slide3.mp4"
                  className="h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                ></video>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-full h-full relative overflow-hidden rounded-2xl">
              <div className="h-full w-full relative  text-white morph-glass md:px-4 !px-0 text-center z-[9999]">
                <div
                  id="choose-us-text-2"
                  className="w-full h-full flex flex-col justify-center relative"
                >
                  <h1 className="font-maxima-nouva font-bold text-4xl tracking-widest">
                    Tailored Solutions
                  </h1>
                  <span className="h-[1px] w-full inline-block bg-[gray] mt-16 mb-8"></span>
                  <p className="font-uber-move text-md tracking-widest">
                    We understand that every space is unique. Our personalized
                    approach means we work closely with you to craft designs
                    that reflect your style and meet your needs, turning your
                    vision into a reality.
                  </p>
                </div>
              </div>
              <div className="w-full h-full ws-3 absolute top-0 left-0">
                <video
                  src="/slide3.mp4"
                  className="h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                ></video>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-full h-full relative overflow-hidden rounded-2xl">
              <div className="h-full w-full relative  text-white morph-glass md:px-4 !px-0 text-center z-[9999]">
                <div
                  id="choose-us-text-3"
                  className="w-full h-full flex flex-col justify-center relative"
                >
                  <h1 className="font-maxima-nouva font-bold text-4xl tracking-widest">
                    Attention to Detail
                  </h1>
                  <span className="h-[1px] w-full inline-block bg-[gray] mt-16 mb-8"></span>
                  <p className="font-uber-move text-md tracking-widest">
                    From concept to completion, we pride ourselves on our
                    meticulous attention to detail. Our commitment to excellence
                    ensures that every element of your space is thoughtfully
                    considered and impeccably executed.
                  </p>
                </div>
              </div>
              <div className="w-full h-full ws-3 absolute top-0 left-0">
                <video
                  src="/slide3.mp4"
                  className="h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                ></video>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}
