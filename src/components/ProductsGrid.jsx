import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import img1 from "../assets/imageGrid/1.jpg";
import img2 from "../assets/imageGrid/2.jpg";
import img3 from "../assets/imageGrid/3.jpg";
import img4 from "../assets/imageGrid/4.jpg";
// import img5 from "../assets/imageGrid/5.jpg";
// import img6 from "../assets/imageGrid/6.jpg";
// import img7 from "../assets/imageGrid/7.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
// import Testimonials from "./Testimonials";
import { Link } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);
export default function ProductsGrid() {
  const containerRef = useRef();

  const imagesData = [
    {
      src: img1,
      class: "img1",
      width: 40,
      height: 40,
      x: -100,
      y: -60,
      z: -1000,
    },
    {
      src: img2,
      class: "img2",
      width: 40,
      height: 40,
      x: 60,
      y: 60,
      z: -2000,
    },
    {
      src: img3,
      class: "img3",
      width: 40,
      height: 40,
      x: -80,
      y: -10,
      z: -3000,
    },
    {
      src: img4,
      class: "img4",
      width: 40,
      height: 40,
      x: 120,
      y: -70,
      z: -4000,
    },
  ];
  useGSAP(() => {
    const container = containerRef.current;

    // Create reusable animation configs
    const fadeInConfig = {
      opacity: 1,
      display: "block",
      duration: 0.3,
    };

    // Create the timeline with ScrollTrigger
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 0",
        end: "+=5000",
        pin: true,
        scrub: true,
      },
    });

    // Get all image selectors for simultaneous animation
    const allImageSelectors = [".img1", ".img2", ".img3", ".img4"];

    // Initial text animation
    timeline
      .to(".gridText", { opacity: 1, duration: 0.1 })
      .to(".gridText", { opacity: 0, duration: 0.1 })
      .set(".gridText", { display: "none" }); // Using set instead of to for instant changes

    // PHASE 1: All images fade in with stagger
    timeline.to(
      allImageSelectors,
      {
        ...fadeInConfig,
        // stagger: 0.3, // Staggered fade in
      },
      "-=1.25"
    );

    // PHASE 2: Images move forward sequentially based on distance (closest first)

    // img1 (z: -1000) - shortest distance, arrives first
    timeline.to(".img1", {
      z: 0,
      duration: 0.8,
      ease: "power2.out",
    });
    // img1 fades away with opacity after arriving
    timeline.to(".img1", {
      opacity: 0,
      duration: 0.5,
    });

    // img2 (z: -4000) - medium distance, arrives second
    timeline.to(
      ".img2",
      {
        z: 0,
        duration: 1.2, // Longer duration as it travels more distance
        ease: "power2.out",
      },
      "-=1.25"
    ); // Start before img1 fully fades
    // img2 fades away with opacity after arriving
    timeline.to(".img2", {
      opacity: 0,
      duration: 0.5,
    });

    // img3 (z: -8000) - longer distance, arrives third
    timeline.to(
      ".img3",
      {
        z: 0,
        duration: 1.6, // Even longer duration for more distance
        ease: "power2.out",
      },
      "-=1.25"
    );
    // img3 fades away with opacity after arriving
    timeline.to(".img3", {
      opacity: 0,
      duration: 0.5,
    });

    // img4 (z: -12000) - longest distance, arrives last
    timeline.to(
      ".img4",
      {
        z: 0,
        duration: 2.0, // Longest duration for furthest distance
        ease: "power2.out",
      },
      "-=1.25"
    );
    // img4 fades away with opacity after arriving
    timeline.to(".img4", {
      opacity: 0,
      duration: 0.5,
    });

    // Final container animation
    timeline.set(container, {
      opacity: 0,
      zIndex: -99999999,
    });
  }, []);

  return (
    <>
      {/* <section className="w-screen h-screen relative overflow-hidden"> */}
      <section className="relative w-screen h-screen" ref={containerRef}>
        <div
          id="grid-hero-section-inner"
          className="grid-hero-section-inner z-[999999999999] w-screen h-screen animated-gradient-bg"
        >
          <div
            id="grid-hero-section-content"
            className="grid-hero-section-content absolute w-screen h-[100dvh] z-10 inset-0"
          >
            <div
              id="grid-hero-section-content-inner"
              className="grid-hero-section-content-inner flex items-center justify-center relative text-white w-full h-full "
            >
              <h1 className="gridText opacity-0   uppercase text-center md:text-7xl text-5xl font-francy">
                Our Works
              </h1>
              {imagesData.map((img, index) => (
                <div
                  className={img.class}
                  key={index}
                  style={{
                    transform: `${`translate3d(${img.x}%,${img.y}%,${img.z}px)`}`,
                    position: "absolute",
                    opacity: 0,
                    width: `${img.width}vw`,
                    height: `${img.height}vw`,
                    borderRadius: "2rem",
                    transformStyle: "preserve-3d",
                    overflow: "hidden",
                    zIndex: "-9999",
                  }}
                >
                  <Link to={"/products"} className="block w-full h-full">
                    <img
                      src={img.src}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* <Testimonials /> */}
      {/* </section> */}
    </>
  );
}
