import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useCallback, useRef, useState } from "react";
import SplitType from "split-type";
import profile from "../assets/profile.jpg";
import StarIcon from "../Icons/StarIcon";
export default function Testimonials() {
  const containerRef = useRef();
  const [current, setCurrent] = useState(0);
  const headingSelector = "#testimonial-heading";
  const sliderSelector = "#testimonial-slider";

  const scaleConfig = {
    scale: 1,
    duration: 0.5,
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
  useGSAP(() => {
    // Cache selectors for better performance

    const heading = new SplitType(headingSelector, {
      types: "chars",
    }).chars;

    // Main timeline
    gsap
      .timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 0",
          end: "+=3000",
          scrub: true,
          pin: true,
        },
      })
      .fromTo(
        heading,
        { opacity: 0 },
        { opacity: 1, duration: 0.5, stagger: 0.1 }
      )
      .to(headingSelector, {
        z: 1000,
        duration: 0.4,
      })
      .to(sliderSelector, scaleConfig);
  }, []);
  const handleSlideChange = useCallback(
    (index) => {
      const tl = gsap.timeline();

      tl.to(sliderSelector, {
        scale: 0.8,
        duration: 0.5,
        onComplete: () => setCurrent(index),
      }).to(sliderSelector, {
        ...scaleConfig,
        delay: 1,
      });
    },
    [setCurrent]
  );
  return (
    <div
      className="relative w-screen h-screen overflow-hidden top-[-100vh] flex justify-center items-center z-50 secondary-bg max-h-screen"
      ref={containerRef}
    >
      <div className="absolute w-screen h-screen top-0 left-0">
        <div
          className=" h-screen animated-gradient-bg text-white  flex flex-col items-center justify-center"
          id="testimonial-inner"
          style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
        >
          <h1
            id="testimonial-heading"
            className="md:text-7xl text-3xl uppercase font-francy absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-nowrap "
          >
            Testimonials
          </h1>
        </div>
      </div>
      <div
        className="w-[75%] h-[100%] flex flex-col justify-center scale-0 z-[9999999] overflow-hidden"
        id="testimonial-slider"
      >
        <div
          className={`flex w-full transition duration-1000 ease-out `}
          style={{ transform: `translate(-${current * 100}%, 0)` }}
        >
          {testimonialsData.map((t, index) => (
            <div className=" md:w-full md:min-w-[50%] h-full px-10" key={index}>
              <div
                className="self-center
      justify-center relative w-full h-full"
              >
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
                  <header className="flex items-center justify-between">
                    <div className="testi-name text-xl font-normal font-uber-move">
                      <h3>{t.clientName}</h3>
                    </div>
                    <div className="ratings flex scale-50">
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                    </div>
                  </header>
                  <h1 className="font-uber-move font-bold my-4 text-4xl">
                    Amazing Customer Service
                  </h1>
                  <p className="font-maxima-nouva text-md">{t.testimonial}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="slider-handler relative mt-6 w-full z-50">
          <div className="flex justify-center w-full">
            {[...Array(testimonialsData.length / 2)].map((t, index) => (
              <div
                key={index}
                className={`h-1 ${
                  index === current ? "w-[calc(50%/4)]" : "w-[calc(15%/4)]"
                } cursor-pointer mx-1 bg-white rounded-full`}
                style={{ transition: "all .4s" }}
                onClick={() => {
                  handleSlideChange(index);
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
    // </section>
  );
}
