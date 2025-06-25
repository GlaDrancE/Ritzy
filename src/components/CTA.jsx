import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import SplitType from "split-type";

export default function CTA() {
  const containerRef = useRef(null);
  const buttonRef = useRef(null); // Keep for potential future use

  useGSAP(() => {
    // Cache DOM elements for better performance
    const container = containerRef.current;
    const ctaContainer = document.querySelector(".cta-container");
    const ctaSubText = document.querySelector(".cta-sub-text");

    // Cache viewport check
    const isDesktop = window.innerWidth > 600;

    const ctaText = new SplitType(".cta-text", { type: "words" }).chars;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        // start: "top top",
        start: isDesktop ? "top top" : "top bottom",
        end: "+=1000",
        pin: isDesktop ? true : false,
        scrub: 1, // Optimized scrub value
      },
    });

    // Optimize timeline animations with better easing
    timeline.fromTo(
      ctaText,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.06, // Slightly reduced for smoother animation
        delay: 0.5,
        ease: "power2.out",
      }
    );

    timeline.fromTo(
      ctaSubText,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power2.out",
      }
    );
    timeline.fromTo(
      buttonRef.current,
      { opacity: 0, scale: 0 },
      {
        opacity: 1,
        scale: 1,
      }
    );

    // Optimize container animation
    gsap.to(ctaContainer, {
      borderRadius: "1rem",
      width: "96%",
      height: "96%",
      delay: 2,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "+=500",
        scrub: 1,
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
    const container = containerRef.current;
    const ctaImg = document.querySelector(".cta-img");

    // Throttle mouse move events for better performance
    let animationFrameId;
    let lastMouseMoveTime = 0;
    const throttleDelay = 16; // ~60fps

    const handleMouseMove = (e) => {
      const currentTime = Date.now();
      if (currentTime - lastMouseMoveTime < throttleDelay) return;

      lastMouseMoveTime = currentTime;

      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }

      animationFrameId = requestAnimationFrame(() => {
        const rect = container.getBoundingClientRect();
        // const x = e.clientX - rect.left;
        // const y = e.clientY - rect.top;
        const x2 = (e.clientX - rect.left) / rect.width;
        const y2 = (e.clientY - rect.top) / rect.height;

        const moveX = (x2 - 0.5) * 20; // Adjust multiplier to increase or decrease movement
        const moveY = (y2 - 0.5) * 20;

        // gsap.to(buttonRef.current, {
        //   x: x - buttonRef.current.clientWidth / 2,
        //   y: y - buttonRef.current.clientHeight / 2,
        //   ease: "power3.out",
        //   duration: 0.3,
        // });

        gsap.to(ctaImg, {
          x: moveX,
          y: moveY,
          ease: "power2.out", // Slightly smoother easing
          duration: 0.25, // Slightly faster for more responsive feel
        });
      });
    };

    // const handleMouseEnter = () => {
    //   gsap.to(buttonRef.current, {
    //     opacity: 1,
    //     scale: 1,
    //     pointerEvents: "auto",
    //   });
    //   document.body.style.cursor = "none";
    // };

    // const handleMouseLeave = () => {
    //   gsap.to(buttonRef.current, {
    //     opacity: 0,
    //     scale: 0,
    //     pointerEvents: "none",
    //   });
    //   document.body.style.cursor = "auto";
    // };

    // Optimize event listener setup
    if (window.innerWidth > 600 && container) {
      container.addEventListener("mousemove", handleMouseMove, {
        passive: true,
      });
      // containerRef.current.addEventListener("mouseenter", handleMouseEnter);
      // containerRef.current.addEventListener("mouseleave", handleMouseLeave);

      // Cleanup function
      return () => {
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
        }
        container.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, []);
  return (
    // <div className="relative h-screen w-screen">
    <section className="relative w-full h-screen" ref={containerRef}>
      <div className="w-full h-full tertiary-bg text-white flex items-center justify-center absolute  left-0 z-10">
        <div className="cta-container flex items-center justify-center h-full w-full text-center relative overflow-hidden font-francy m-0">
          <div className="flex flex-col m-auto items-center">
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
                className="p-2 flex items-center bg-black text-white font-francy relative z-50 rounded-full justify-center w-40 opacity-0"
                ref={buttonRef}
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
          {/* <Link to={"/contact"} ref={buttonRef} className="cursor-button">
            Start your journey
          </Link> */}
        </div>
      </div>
    </section>
    // </div>
  );
}
