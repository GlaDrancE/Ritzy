import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import SplitType from "split-type";
import profile from "../assets/profile.jpg";
import StarIcon from "../Icons/StarIcon";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function MobileTesti() {
  const containerRef = useRef();
  const [current, setCurrent] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Hide arrows if you want to use custom buttons
  };
  const testimonialsData = [
    {
      clientName: "Jhon Wick",
      testimonial:
        "Ritzy completely transformed our home into a beautiful, welcoming space. Their attention to detail and understanding of our style was remarkable. The entire process was smooth and stress-free, and the results exceeded our expectations. Highly recommend!",
      ratings: 4.5,
      img: profile,
    },
    {
      clientName: "Ayush Ramteke",
      testimonial:
        "Ritzy completely transformed our home into a beautiful, welcoming space. Their attention to detail and understanding of our style was remarkable. The entire process was smooth and stress-free, and the results exceeded our expectations. Highly recommend!",
      ratings: 4.5,
      img: profile,
    },
    {
      clientName: "Charls Willson",
      testimonial:
        "Ritzy completely transformed our home into a beautiful, welcoming space. Their attention to detail and understanding of our style was remarkable. The entire process was smooth and stress-free, and the results exceeded our expectations. Highly recommend!",
      ratings: 4.5,
      img: profile,
    },
    {
      clientName: "Jorge Stud",
      testimonial:
        "Ritzy completely transformed our home into a beautiful, welcoming space. Their attention to detail and understanding of our style was remarkable. The entire process was smooth and stress-free, and the results exceeded our expectations. Highly recommend!",
      ratings: 4.5,
      img: profile,
    },
  ];
  // useGSAP(() => {
  //   const heading = new SplitType("#testimonial-heading", { type: "words" })
  //     .chars;
  //   const container = containerRef.current;
  //   const timeline = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: container,
  //       start: "top center",
  //       end: "bottom top",
  //       scrub: true,
  //       markers: true,
  //       // pinSpacing: false,
  //       onUpdate: (self) => {
  //         const progress = self.progress * 3000;
  //         const vpHeight = window.innerHeight;
  //         // if (progress >= progress - vpHeight) {
  //         //   console.log(progress);
  //         //   self.pin(false);
  //         // }
  //       },
  //     },
  //   });
  //   timeline.fromTo(
  //     heading,
  //     { opacity: 0 },
  //     { opacity: 1, duration: 0.5, stagger: 0.1 }
  //   );
  //   timeline.to("#testimonial-inner", { z: 1000, duration: 0.4 });
  //   timeline.to("#testimonial-slider", {
  //     scale: 1,
  //     duration: 1,
  //   });
  // });
  const handleSlideChange = (index) => {
    gsap
      .timeline()
      .to("#testimonial-slider", {
        scale: 0.8,
        duration: 0.5,
        onComplete: () => {
          setCurrent(index);
        },
      })
      .to("#testimonial-slider", {
        scale: 1,
        duration: 0.5,
        delay: 1,
      });
  };
  let slider;
  return (
    // <section className="relative w-screen h-screen">
    <div
      className="relative w-screen z-50 primary-bg my-12 h-screen"
      ref={containerRef}
    >
      <div
        style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
        className="mb-8"
      >
        <div
          className="primary-bg flex flex-col items-center justify-center"
          id="testimonial-inner"
        >
          <h1
            id="testimonial-heading"
            className=" text-3xl uppercase font-francy text-[#a39b8b]"
          >
            Voices of Satisfaction
          </h1>
        </div>
      </div>
      <div className="z-[9999999] overflow-hidden" id="testimonial-slider">
        {/* <div
          className={`flex w-full transition duration-1000 ease-out `}
          style={{ transform: `translate(-${current * 100}%, 0)` }}
        > */}
        <Slider ref={(c) => (slider = c)} {...settings}>
          {testimonialsData.map((t) => (
            <div className=" md:w-full md:min-w-full p-8">
              <div className="relative w-full h-full">
                <div className="testimonial-profile-img flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden relative z-10">
                    <img
                      className="w-full h-full object-cover"
                      src={t.img}
                      alt=""
                    />
                  </div>
                </div>
                <div className="relative text-white col-span-2">
                  <header className="flex flex-col items-center justify-between">
                    <div className="testi-name text-xl font-normal font-uber-move">
                      <h3 className="text-center">{t.clientName}</h3>
                    </div>
                    <div className="ratings flex scale-50">
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                    </div>
                  </header>
                  <h1 className="font-uber-move font-bold my-4 text-2xl text-center">
                    Amazing Customer Service
                  </h1>
                  <p className="font-maxima-nouva text-center text-md">
                    {t.testimonial}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        {/* </div> */}
      </div>
    </div>
    // </section>
  );
}
