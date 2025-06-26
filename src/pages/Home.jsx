// import React, { Suspense, useEffect, useRef, useState } from "react";
import HeroSection from "../components/HeroSection";
import Layout from "./Layout";
import Navbar from "../components/Navbar";
import FixedBackgroundImage from "../components/FixedBackgroundImage";
import HorizontalSlider from "../components/HorizontalSlider";
import ProductsGrid from "../components/ProductsGrid";
import Testimonials from "../components/Testimonials";
import MobileTesti from "../components/MobileTesti";
import WhyChooseUs from "../components/WhyChooseUs";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import MobileBenifits from "../components/MobileBenifits";
import MobileHorizontal from "../components/MobileHorizontal";
import MobileProductGrid from "../components/MobileProductGrid";
import MobileWhyChooseUs from "../components/MobileWhyChooseUs";
import { useImages } from "../context/ImageContext";
// import { useGSAP } from "@gsap/react";
// import { ScrollToPlugin, ScrollTrigger } from "gsap/all";
// import gsap from "gsap";
// import { useEffect } from "react";

function HomePage() {
  // gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  // useEffect(() => {
  //   const sections = document.querySelectorAll(".home-panel");
  //   const outerWrappers = gsap.utils.toArray(".outer");
  //   const innerWrappers = gsap.utils.toArray(".inner");
  //   const goToSection = (index, direction) => {
  //     if (!sections[index]) return;
  //     // gsap.to(window, {
  //     //   scrollTo: {
  //     //     y: sections[index].offsetTop,
  //     //     offsetY: 0,
  //     //     duration: 1,
  //     //   },
  //     // });

  //     // console.log(outerWrappers[index]);
  //     // gsap.to([outerWrappers[index], innerWrappers[index]], {
  //     //   yPercent: sections[index].offsetTop,
  //     //   duration: 1,
  //     //   ease: "power2.inOut",
  //     // });
  //     // console.log(sections[index].offsetTop);
  //     // console.log(window.scrollHeight);
  //   };
  //   ScrollTrigger.create({
  //     trigger: sections[1],
  //     start: "top 90%",
  //     end: "bottom 10%",
  //     markers: true,
  //     onEnter: () => {
  //       goToSection(1, 1);
  //       console.log("Enter hero section");
  //     },
  //     onEnterBack: () => {
  //       console.log("Enter back section");
  //     },
  //   });
  //   goToSection(1, 1);
  // }, []);
  return (
    <>
      <HeroSection />
      <div className="home-panel">
        <div className="outer">
          <div className="inner">
            {window.innerWidth >= 600 ? (
              <FixedBackgroundImage />
            ) : (
              <MobileBenifits />
            )}
          </div>
        </div>
      </div>
      <div className="home-panel">
        <div className="outer">
          <div className="inner">
            {window.innerWidth >= 600 ? (
              <HorizontalSlider />
            ) : (
              <MobileHorizontal />
            )}
          </div>
        </div>
      </div>
      <div className="home-panel">
        <div className="outer">
          <div className="inner">
            {window.innerWidth >= 600 ? (
              <ProductsGrid />
            ) : (
              <MobileProductGrid />
            )}
          </div>
        </div>
      </div>
      <div className="home-panel">
        <div className="outer">
          <div className="inner">
            {window.innerWidth >= 600 ? <Testimonials /> : <MobileTesti />}
          </div>
        </div>
      </div>
      {window.innerWidth >= 600 ? <WhyChooseUs /> : <MobileWhyChooseUs />}
      <div className="home-panel">
        <div className="outer">
          <div className="inner">
            <CTA />
            <Footer className="tertiary-bg text-[#504B38]" />
          </div>
        </div>
      </div>
    </>
  );
}
export default function Home() {
  const { allImagesLoaded } = useImages();
  return (
    <Layout>
      <Navbar
        style={{
          position: "absolute",
          zIndex: "9999",
          color: "black",
          background: "linear-gradient(180deg, #bababa, transparent)",
          filter: "invert(1)",
        }}
      />
      {allImagesLoaded && <HomePage />}
    </Layout>
  );
}
