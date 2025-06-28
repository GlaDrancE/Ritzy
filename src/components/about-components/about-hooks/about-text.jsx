import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";

const AnimateText = ({
  text,
  containerRef,
  start = "top top",
  end = "bottom top",
}) => {
  const textRef = useRef(null);

  useEffect(() => {
    const splitText = new SplitType(textRef.current, { types: "words" });

    // Wrap each word in a parent div with overflow hidden
    splitText.words.forEach((word) => {
      const wrapper = document.createElement("div");
      wrapper.style.overflow = "hidden";
      wrapper.style.display = "inline-block";
      word.parentNode.insertBefore(wrapper, word);
      wrapper.appendChild(word);
    });

    // Select all words for animation
    const words = textRef.current.querySelectorAll(".word");
    gsap.fromTo(
      words,
      { y: -100 },
      {
        y: 0,
        duration: 0.2,
        stagger: 0.01,
        scrollTrigger: {
          trigger: containerRef.current,
          start: start,
          end: end,
          toggleActions: "play play reverse reverse",
        },
      }
    );
  }, [text, containerRef]);

  return <div ref={textRef}>{text}</div>;
};

export default AnimateText;
