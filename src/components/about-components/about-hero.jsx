import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import heroImage from "../../assets/images/about/about-hero.jpg";
import heroSofa from "../../assets/images/about/sofa.png";
export const AboutHero = () => {
  const containerRef = useRef(null);
  useEffect(() => {
    gsap.to("#about-hero-picture", {
      width: "90%",
      height: "90%",
      borderRadius: "3rem",
      duration: 1,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "bottom 75%",
        end: "bottom bottom",
        scrub: true,
      },
    });
    const heroText = new SplitType("#hero-text", { types: "chars" }).chars;
    gsap.fromTo(
      heroText,
      {
        y: 200,
      },
      {
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          onLeave: () => {
            gsap.to(heroText, {
              y: 200,
            });
          },
          onEnterBack: () => {
            gsap.to(heroText, {
              y: 0,
              duration: 1,
              stagger: 0.2,
            });
          },
        },
      }
    );
  }, []);
  useEffect(() => {
    const handleMouse = (e) => {
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const moveX = (x - 0.5) * 40;
      const moveY = (y - 0.5) * 40;
      gsap.to("#hero-text", {
        x: moveX,
        y: moveY,
        ease: "power1",
        duration: 0.4,
      });
    };

    containerRef.current.addEventListener("mousemove", handleMouse);
  }, []);

  return (
    <>
      <section
        className="h-screen max-h-screen w-full max-w-screen flex items-center justify-center secondary-bg"
        ref={containerRef}
      >
        <div className="w-full h-full overflow-hidden relative">
          {/* <video
            src={vid}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            id="about-hero-background"
          ></video> */}

          <div
            className="w-full h-full relative   mx-auto transition-all duration-1000 overflow-hidden"
            id="about-hero-picture"
          >
            <h1
              className="absolute top-[15%] left-1/2 -translate-x-1/2 -transalte-y-1/2 text-[10rem] text-nowrap font-serif font-bold text-[#151515]"
              id="hero-text"
            >
              About <span className="relative z-40"> Us</span>
            </h1>
            <img
              src={heroImage}
              alt=""
              className="w-full h-full object-cover aspect-auto"
            />
            <img
              src={heroSofa}
              alt=""
              className="w-full h-full absolute top-0 z-10 object-cover aspect-auto  mx-auto transition-all duration-1000"
            />
          </div>
        </div>
      </section>
    </>
  );
};
