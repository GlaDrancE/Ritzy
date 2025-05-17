// useLenis.js
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const useLenis = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // duration of the scroll (seconds)
      easing: (t) => t, // easing function
      direction: "vertical", // vertical or horizontal scrolling
      gestureDirection: "vertical", // direction to detect gestures
      smooth: true, // enable smooth scrolling
      smoothTouch: false, // smooth scrolling on touch devices
      touchMultiplier: 2, // multiplier for touch devices
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
};

export default useLenis;
