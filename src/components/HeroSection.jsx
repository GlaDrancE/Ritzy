import React, {
  Suspense,
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";
import HeroModel from "./HeroModel";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useImages } from "../context/ImageContext.jsx";
export default function HeroSection() {
  const windowWidth = window.innerWidth;
  const scrollSpeed = 2500;
  const { allImagesLoaded, imagesTemp } = useImages();
  const [images, setImages] = useState(imagesTemp);
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const totalImageCount = 80;

  useEffect(() => {
    if (allImagesLoaded && imagesTemp.length !== 0) {
      setImages(imagesTemp);
    }
  }, [allImagesLoaded, imagesTemp]);
  useEffect(() => {
    const resizeCanvas = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = windowWidth;
        canvas.height = window.innerHeight;
      }
    };

    resizeCanvas();
    window.addEventListener("load", resizeCanvas);
    window.addEventListener("resize", resizeCanvas);
    return () => {
      window.removeEventListener("load", resizeCanvas);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);
  const render = useCallback((image) => {
    console.log(image);
    const canvas = canvasRef.current;
    if (!canvas) return;

    const width = canvas.width;
    const height = canvas.height;
    const context = canvas.getContext("2d");

    if (!context) return;

    if (!image) return;
    const imageAspectRatio = image.width / image.height;
    const canvasAspectRatio = width / height;

    let drawWidth = width;
    let drawHeight = height;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasAspectRatio > imageAspectRatio) {
      drawWidth = width;
      drawHeight = width / imageAspectRatio;
      offsetY = (height - drawHeight) / 2;
    } else {
      drawHeight = height;
      drawWidth = height * imageAspectRatio;
      offsetX = (width - drawWidth) / 2;
    }

    context.clearRect(0, 0, width, height); // Clear the previous image;

    context.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);
  }, []);
  useGSAP(() => {
    const container = containerRef.current;
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: `+=${scrollSpeed}`,
        pin: true,
        scrub: true,
        onUpdate: (self) => {
          let index = Math.round(self.progress * totalImageCount);

          if (images.length > 0) {
            // uncommend below line to animate hero section
            render(images[index]);
          }
        },
      },
    });
    timeline.to(".scene-text-1", {
      opacity: 1,
      display: "block",
      duration: 0.1,
    });
    timeline.to(".scene-text-1 .scene-text-inner", {
      y: 0,
      duration: 0.1,
    });
    timeline.to(".scene-text-1", {
      z: 405,
      duration: 6,
    });
    timeline.to(".scene-text-1", {
      opacity: 0,
      display: "none",
      duration: 0.5,
    });
    timeline.to(".scene-text-2", {
      opacity: 1,
      display: "block",
      duration: 0.2,
    });
    timeline.to(".scene-text-2 .scene-text-inner", {
      y: 0,
      duration: 0.5,
      ease: "power1.inOut",
    });
    timeline.to(".scene-text-2", {
      z: 405,
      duration: 6,
    });
    timeline.to(".scene-text-2", {
      opacity: 0,
      display: "none",
      duration: 0.5,
    });
    timeline.to(".scene-text-3", {
      opacity: 1,
      display: "block",
      duration: 0.1,
    });
    timeline.to(".scene-text-3 .scene-text-inner", {
      y: 0,
      duration: 0.1,
    });
    timeline.to(".scene-text-3", {
      z: 405,
      duration: 6,
    });
    timeline.to(".scene-text-3", {
      opacity: 0,

      display: "none",
      duration: 0.5,
    });
    timeline.to(".scene-text-4", {
      display: "block",
    });
    timeline.to(".scene-text-4", {
      opacity: 1,
    });
    timeline.to(".scene-text-4", {
      z: 100,
      duration: 2,
    });
  }, []);

  // useGSAP(() => {
  //   const container = containerRef.current;
  //   const progPass = 760;

  //   const timeline = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: container,
  //       start: `top 0`,
  //       end: () => "+=5000",
  //       pin: true,
  //       scrub: true,
  //     },
  //   });

  //   timeline.to(".scene-text-1", {
  //     opacity: 1,
  //     display: "block",
  //   });
  //   timeline.to(".scene-text-1", {
  //     z: 500,
  //     duration: 0.5,
  //   });
  //   timeline.to(".scene-text-1", {
  //     opacity: 0,
  //     display: "none",
  //     duration: 0.3,
  //   });
  //   timeline.to(
  //     ".scene-text-2",
  //     {
  //       opacity: 1,
  //       display: "block",
  //       duration: 0.3,
  //     },
  //     "<"
  //   );
  //   timeline.to(
  //     ".scene-text-2",
  //     {
  //       z: 0,
  //       duration: 0.5,
  //     },
  //     "<"
  //   );
  //   timeline.to(".scene-text-2", {
  //     opacity: 0,
  //     display: "none",
  //     duration: 0.3,
  //   });
  //   timeline.to(
  //     ".scene-text-3",
  //     {
  //       opacity: 1,
  //       display: "block",
  //       duration: 0.3,
  //     },
  //     "<"
  //   );
  //   timeline.to(
  //     ".scene-text-3",
  //     {
  //       z: 0,
  //       duration: 0.5,
  //     },
  //     "<"
  //   );
  //   timeline.to(".scene-text-3", {
  //     opacity: 0,
  //     display: "none",
  //     duration: 0.3,
  //   });
  //   timeline.to(
  //     ".scene-text-4",
  //     {
  //       opacity: 1,
  //       display: "block",
  //       duration: 0.3,
  //     },
  //     "<"
  //   );
  //   timeline.to(
  //     ".scene-text-4",
  //     {
  //       z: 0,
  //       duration: 0.5,
  //     },
  //     "<"
  //   );
  //   timeline.to(".scene-text-4", {
  //     opacity: 0,
  //     display: "none",
  //     duration: 0.3,
  //   });
  //   timeline.to(container, {
  //     opacity: 0,
  //     zIndex: -99999999,
  //     duration: 0.1,
  //   });
  // }, []);
  const heroData = [
    {
      title: "Your Homes, <br /> smarter than ever.",
      class: "scene-text",
      z: 0,
    },
    {
      title: "Seamless integration <br /> and control",
      class: "scene-text",
      z: -200,
      y: 10,
    },
    {
      title: `Trusted by over 1,000 satisfied customers and backed by 9 years
                of industry expertise, our solutions transform homes into smart
                havens`,
      class: "scene-text",
      z: -400,
      y: 20,
    },
    {
      title: "Get Your Home",
      class: "scene-text",
      z: -300,
      y: 10,
    },
  ];

  return (
    <section
      id="hero-section"
      style={{
        overflow: "hidden",
        margin: "auto",
        zIndex: "99",
        position: "relative",
      }}
      ref={containerRef}
    >
      <div id="hero-section-inner" className="hero-section-inner">
        <div id="hero-section-content" className="hero-section-content">
          <div
            id="hero-section-content-inner"
            className="hero-section-content-inner flex items-center justify-center  text-white w-full h-full "
          >
            {heroData.map((text, index) => (
              <div
                className={`scene-text-${index + 1}`}
                key={index}
                style={{
                  transform: `${`translate3d(-50%,-50%,${text.z}px)`}`,
                  position: "absolute",
                  // width: `${img.width}vw`,
                  display: "none",
                  // height: `${img.height}vw`,
                  top: "50%",
                  left: "50%",
                  opacity: "1",
                  textAlign: "center",
                  transformStyle: "preserve-3d",
                  overflow: "hidden",
                  zIndex: "-9999",
                  fontSize: "3rem",
                  fontFamily: "francy, Arial, Helvetica, sans-serif",
                  lineHeight: "3rem",
                }}
              >
                <h1
                  dangerouslySetInnerHTML={{ __html: text.title }}
                  className="scene-text-inner"
                  style={{
                    transform: `translate(0, ${text.y}rem)`,
                  }}
                ></h1>
              </div>
            ))}

            <button
              className="scene-text-4"
              style={{
                transform: `${`translate3d(-50%,-50%,-300px)`}`,
                position: "absolute",
                top: "50%",
                left: "50%",
                textAlign: "center",
                transformStyle: "preserve-3d",
                border: "1px solid rgb(255, 255, 255)",
                background: "rgb(255, 255, 255)",
                color: "rgb(0, 0, 0)",
                padding: "0.6rem 1rem",
                textShadow: "none",
                borderRadius: "4rem",
                height: " 2.5rem",

                fontFamily: "francy, Arial, Helvetica, sans-serif",
                opacity: 0,
              }}
            >
              <Link to={"/contact"}>Get Started Today</Link>
            </button>
          </div>
        </div>
        <div className="hero-canvas">
          <div className="main-hero-canvas">
            <div>
              <canvas ref={canvasRef} style={{ margin: "0 auto" }}></canvas>
            </div>
          </div>
        </div>
      </div>
    </section>

    // <section className="relative w-screen h-screen" ref={containerRef}>
    //   <div
    //     id="grid-hero-section-inner"
    //     className="grid-hero-section-inner primary-bg z-[999999999999] w-screen h-screen"
    //   >
    //     <div
    //       id="grid-hero-section-content"
    //       className="grid-hero-section-content absolute w-screen h-[100dvh] z-10 inset-0"
    //     >
    //       <div
    //         id="grid-hero-section-content-inner"
    //         className="grid-hero-section-content-inner flex items-center justify-center relative text-white w-full h-full "
    //       >
    //         <h1 className="gridText opacity-0 text-5xl font-uber-move uppercase text-center">
    //           Glimps of our works
    //         </h1>
    //         {heroData.map((text, index) => (
    //           <div
    //             className={`scene-text-${index + 1}`}
    //             key={index}
    //             style={{
    //               transform: `${`translate3d(-50%,-50%,${text.z}px)`}`,
    //               position: "absolute",
    //               // width: `${img.width}vw`,
    //               // height: `${img.height}vw`,
    //               top: "50%",
    //               left: "50%",
    //               textAlign: "center",
    //               borderRadius: "2rem",
    //               transformStyle: "preserve-3d",
    //               overflow: "hidden",
    //               zIndex: "-9999",
    //               fontSize: "3rem",
    //             }}
    //           >
    //             <h1>{text.title}</h1>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
}
