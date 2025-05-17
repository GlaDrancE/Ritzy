import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export const TextReveal = ({
  text,
  className = "",
  delay = 0,
  stagger = 0.05,
  duration = 0.5,
  animationType = "",
  textType = "chars",
}) => {
  const textRef = useRef(null);

  useEffect(() => {
    // Create the split type instance
    const splitText = new SplitType(textRef.current, {
      types: textType,
      tagName: "span",
    });
    const textTypes_ = textType === "word" ? splitText.words : splitText.chars;

    // Initial state - hide all characters
    gsap.set(textTypes_, {
      opacity: animationType === "opacity" ? 0 : 1,
      y: animationType === "opacity" ? 0 : 100,
      display: "inline-block",
    });

    // Animate characters
    const animation = gsap.to(textTypes_, {
      opacity: 1,
      y: 0,
      duration: duration,
      stagger: stagger,
      ease: "power2.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      delay: delay,
    });

    // Cleanup
    return () => {
      if (animation) {
        animation.kill();
      }
      splitText.revert();
    };
  }, [text, delay, stagger]);

  return (
    <div ref={textRef} className={className} aria-label={text}>
      {text}
    </div>
  );
};

export const TextLinesReveal = ({
  text,
  className = "",
  delay = 0,
  duration = 1,
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Split text into lines
    const lines = text
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line);

    if (containerRef.current) {
      // Clear previous content
      containerRef.current.innerHTML = "";

      // Create line elements
      lines.forEach((line) => {
        const lineContainer = document.createElement("div");
        lineContainer.className = "line-container overflow-hidden";

        const lineContent = document.createElement("div");
        lineContent.className = "line-content";
        lineContent.textContent = line;

        lineContainer.appendChild(lineContent);
        containerRef.current.appendChild(lineContainer);
      });

      // Animate all lines
      const lineContents =
        containerRef.current.querySelectorAll(".line-content");

      gsap.fromTo(
        lineContents,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: duration,
          stagger: 0.2,
          ease: "power4.out",
          delay: delay,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [text, delay]);

  return (
    <div ref={containerRef} className={className}>
      {text}
    </div>
  );
};

export const TextRevealOpacity = ({ text, className = "" }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const splitText_ = new SplitType(containerRef.current, {
      types: "chars",
      tagName: "span",
    });
    gsap.set(splitText_.chars, {
      opacity: 0.2,
      display: "inline-block",
    });
    gsap.to(splitText_.chars, {
      opacity: 1,
      duration: 0.1,
      stagger: 0.03,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 50%",
        toggleActions: "play none none reverse",
        scrub: 1,
      },
    });
    return () => {
      ScrollTrigger.killAll();
      splitText_.revert();
    };
  }, [text]);
  return (
    <div ref={containerRef} className={`${className}`}>
      {text}
    </div>
  );
};
