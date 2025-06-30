import { useEffect, useState } from "react";
// import Preloader from "../components/Preloader";
// import { useImages } from "../context/ImageContext";
import gsap from "gsap";

export default function Layout({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  // const { allImagesLoaded } = useImages();
  // const { handleLoading, isLoading } = useImages();

  useEffect(() => {
    gsap.fromTo(
      "#preloader-line",
      {
        width: 0,
      },
      {
        width: "100%",
        duration: 4,
        onUpdate: () => {
          const preloaderLine = document.querySelector("#preloader-line");
          if (preloaderLine) {
            const currentWidth = parseFloat(preloaderLine.style.width);
            const percentage = Math.floor(currentWidth);
            if (percentage === 100) {
              setIsLoading(false);
              // handleLoading();
            }
          }
        },
      }
    );
    if (!isLoading) {
      gsap
        .timeline()
        .to("#preloader", {
          opacity: 0,
          duration: 0.3,
          delay: 0.3,
        })
        .to("#preloader", {
          display: "none",
          delay: 0.5,
        });
    }
  }, [isLoading]);

  // return <>{!allImagesLoaded || isLoading ? <Preloader /> : children}</>;
  return (
    <div className="animated-gradient-bg">
      {/* {isLoading && <Preloader />} */}
      {children}
    </div>
  );
}
