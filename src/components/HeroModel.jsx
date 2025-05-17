import React, { useCallback, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useImages } from "../context/ImageContext";

export default function HeroModel() {
  const ref = useRef(null);
  const canvasRef = useRef(null);
  const windowWidth = window.innerWidth;
  const scrollSpeed = 2500;
  var index;
  const totalImageCount = 80;
  const { imagesTemp, allImagesLoaded } = useImages();
  const [images, setImages] = useState(imagesTemp);

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
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: "top top",
        end: `+=${scrollSpeed}`,
        pin: true,
        scrub: true,
        // onUpdate: (self) => { //   index = Math.round(self.progress * totalImageCount);

        //   if (images.length > 0) {
        //     render(images[index]);
        //   }
        // },
      },
    });

    timeline.to(".scene-text-1", {
      z: 500,
      duration: 0.5,
    });
    timeline.to(
      ".scene-text-2 .scene-inner-text",
      {
        y: 0,
        duration: 0.5,
        delay: 0.5,
      },
      "<"
    );
    timeline.to(
      ".scene-text-2",
      {
        z: 500,
        duration: 2,
      },
      "<"
    );
    timeline.to(
      ".scene-text-3 .scene-inner-text",
      {
        y: 0,
        duration: 0.5,
        delay: 1.5,
      },
      "<"
    );
    timeline.to(
      ".scene-text-3",
      {
        z: 500,
        duration: 2,
      },
      "<"
    );
    timeline.to(
      ".scene-text-4",
      {
        opacity: 1,
        delay: 1,
      },
      "<"
    );
    timeline.to(".scene-text-4", {
      z: 100,
      duration: 2,
    });
  }, []);

  return (
    <div className="hero-canvas" ref={ref}>
      <div className="main-hero-canvas">
        <div>
          <canvas ref={canvasRef} style={{ margin: "0 auto" }}></canvas>
        </div>
      </div>
    </div>
  );
}
