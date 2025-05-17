import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollImageContainer = () => {
  const containerRef = useRef(null);
  const imagesRef = useRef([]);

  const images = [
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&h=1080",
    "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?auto=format&fit=crop&w=1920&h=1080",
    "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1920&h=1080",
  ];

  useEffect(() => {
    const container = containerRef.current;
    const imageElements = imagesRef.current;

    // Reset initial states
    gsap.set(imageElements, { opacity: 0 });
    gsap.set(imageElements[0], { opacity: 1 });

    // Create the main ScrollTrigger for pinning
    ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: "+=300%",
      pin: true,
      pinSpacing: true,
    });

    // Create animations for each image
    imageElements.forEach((img, index) => {
      if (index < imageElements.length - 1) {
        gsap.to(img, {
          clipPath: "inset(100% 0 0 0)",
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: `${index * 33}% top`,
            end: `${index * 33}% top`,
            scrub: true,
            onEnter: () => {
              gsap.to(imageElements[index + 1], {
                opacity: 1,
                duration: 0.5,
              });
            },
            onEnter: () => {
              gsap.to(imageElements[index - 1], {
                opacity: 0,
                duration: 0.5,
              });
            },
          },
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="relative">
      {/* Main scroll container */}
      <div className="h-[400vh]">
        {/* Pinned container */}
        <div ref={containerRef} className="relative h-screen overflow-hidden">
          {/* Content wrapper */}
          <div className="relative h-full flex">
            {/* Text content */}
            <div className="w-2/5 p-8 z-10 flex flex-col justify-center">
              <div className="text-white">
                <h2 className="text-4xl font-bold mb-4">
                  Welcome to Our Story
                </h2>
                <p className="text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>

            {/* Images */}
            <div className="absolute inset-0 w-full h-full">
              {images.map((src, index) => (
                <img
                  key={index}
                  ref={(el) => (imagesRef.current[index] = el)}
                  src={src}
                  alt={`Background ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{
                    opacity: index === 0 ? 1 : 0,
                    clipPath: "inset(0% 0 0 0)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollImageContainer;
