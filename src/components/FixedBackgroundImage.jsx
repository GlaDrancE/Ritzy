import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import SplitType from "split-type";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import img1 from "../assets/images/slides/img1.jpg";
import img2 from "../assets/images/slides/img2.jpg";
import img3 from "../assets/images/slides/img3.jpg";
import Observer from "gsap/Observer";
gsap.registerPlugin(ScrollTrigger, Observer);
export default function FixedBackgroundImage() {
  const containerRef = useRef();
  const containerRef2 = useRef();

  const [currentSection, setCurrentSection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Refs for each section
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);

  const sections = [section1Ref, section2Ref, section3Ref, section4Ref];

  const totalSections = sections.length;

  // Function to scroll to a specific section
  const gotoSection = (index) => {
    if (index < 0 || index >= totalSections || isAnimating) return;

    setIsAnimating(true);
    setCurrentSection(index);

    gsap.to(window, {
      duration: 1,
      scrollTo: { y: sections[index].current, offsetY: 0 },
      ease: "power2.inOut",
      onComplete: () => {
        setIsAnimating(false);
      },
    });
  };

  useEffect(() => {
    // Create GSAP Observer for scroll detection
    let observer = Observer.create({
      target: window,
      type: "wheel,touch,scroll",
      wheelSpeed: 1,
      onDown: () => {
        if (!isAnimating && currentSection < totalSections - 1) {
          gotoSection(currentSection + 1);
        }
      },
      onUp: () => {
        if (!isAnimating && currentSection > 0) {
          gotoSection(currentSection - 1);
        }
      },
      tolerance: 10,
      preventDefault: true,
    });

    // Keyboard navigation
    const handleKeydown = (e) => {
      if (isAnimating) return;

      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        if (currentSection < totalSections - 1) {
          gotoSection(currentSection + 1);
        }
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        if (currentSection > 0) {
          gotoSection(currentSection - 1);
        }
      }
    };

    window.addEventListener("keydown", handleKeydown);

    // Cleanup
    return () => {
      observer.kill();
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [currentSection, isAnimating, totalSections]);

  // Set initial scroll position
  useEffect(() => {
    gsap.set(window, { scrollTo: { y: 0 } });
  }, []);

  useGSAP(() => {
    const vpHeight = window.innerHeight;

    // Cache DOM elements
    const fixedImageInner = document.querySelector("#fixed-image-inner");
    const headingElements = {
      1: { words: [], hr: document.querySelector(".hr-1") },
      2: { words: [], hr: document.querySelector(".hr-2") },
      3: { words: [], hr: document.querySelector(".hr-3") },
    };

    // Initialize SplitType with better performance
    const splitHeading1 = new SplitType("#heading1 > h1, #heading1 > p", {
      type: "words",
    });
    const splitHeading2 = new SplitType("#heading2 > h1, #heading2 > p", {
      type: "words",
    });
    const splitHeading3 = new SplitType("#heading3 > h1, #heading3 > p", {
      type: "words",
    });

    // Store words for better performance
    headingElements[1].words = splitHeading1.words;
    headingElements[2].words = splitHeading2.words;
    headingElements[3].words = splitHeading3.words;

    // Set initial opacity using GSAP.set for better performance
    gsap.set([splitHeading2.words, ".hr-2"], { opacity: 0 });
    gsap.set([splitHeading3.words, ".hr-3"], { opacity: 0 });

    const enterText = new SplitType(".home-fixed-image1", { type: "words" })
      .chars;

    // State management to prevent redundant animations
    let currentSection = 1;
    let isAnimating = false;

    // Create a single timeline for section transitions
    const sectionTimeline = gsap.timeline({ paused: true });

    const animateToSection = (targetSection) => {
      if (currentSection === targetSection || isAnimating) return;

      isAnimating = true;

      sectionTimeline.clear();

      sectionTimeline.to(
        [
          headingElements[currentSection].words,
          headingElements[currentSection].hr,
        ],
        {
          opacity: 0,
          duration: 0.15,
          ease: "power2.out",
        }
      );

      // Fade in target section
      sectionTimeline.to(
        [
          headingElements[targetSection].words,
          headingElements[targetSection].hr,
        ],
        {
          opacity: 1,
          duration: 0.2,
          ease: "power2.out",
          onComplete: () => {
            currentSection = targetSection;
            isAnimating = false;
          },
        }
      );

      sectionTimeline.play();
    };

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: `top ${vpHeight}`,
      end: `+=${vpHeight * 3}`,
      scrub: true,
      onEnter: () => {
        gsap.set(containerRef2.current, {
          position: "fixed",
          zIndex: 1,
          scale: 1,
        });
      },
      onEnterBack: () => {
        gsap.set(containerRef2.current, {
          position: "fixed",
          zIndex: 1,
        });
      },
      onLeave: () => {
        gsap.set(containerRef2.current, {
          position: "absolute",
        });
      },
      onLeaveBack: () => {
        gsap.set(containerRef2.current, {
          position: "absolute",
          scale: 0,
        });
      },
      onUpdate: (self) => {
        const progress = self.progress * (3 * vpHeight);

        // Use requestAnimationFrame for smoother scrolling
        requestAnimationFrame(() => {
          fixedImageInner.scrollTop = progress;
        });

        // Optimized section switching with cleaner thresholds
        let targetSection;
        if (progress < window.innerHeight) {
          targetSection = 1;
        } else if (progress < window.innerHeight * 2) {
          targetSection = 2;
        } else {
          targetSection = 3;
        }

        animateToSection(targetSection);
      },
    });

    // Optimize background position animations with a single batch
    const sliders = [
      { selector: ".slider-1", endY: "80%" },
      { selector: ".slider-2", endY: "80%" },
      { selector: ".slider-3", endY: "100%" },
    ];

    sliders.forEach(({ selector, endY }) => {
      gsap.to(selector, {
        backgroundPositionY: endY,
        ease: "none",
        scrollTrigger: {
          trigger: selector,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    });

    // Optimize enter text animation
    gsap.fromTo(
      enterText,
      { opacity: 0.2 },
      {
        opacity: 0.7,
        duration: 1,
        stagger: 0.05, // Reduced stagger for smoother animation
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".home-fixed-image1",
          start: "top 50%",
          end: "bottom 100%",
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <>
      <section className="relative">
        <div className="home-fixed-image1 md:text-5xl text-3xl flex flex-col justify-center z-[99999] relative !h-[120vh]  text-white animated-gradient-bg">
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
              ref={section1Ref}
              style={{ backgroundImage: `url(${img1})` }}
            ></div>
            <div
              className="home-fixed-image slider-2"
              ref={section2Ref}
              style={{ backgroundImage: `url(${img2})` }}
            ></div>
            <div
              className="home-fixed-image slider-3"
              ref={section3Ref}
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
