import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
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

// Register GSAP plugins
gsap.registerPlugin(ScrollToPlugin);

function HomePage() {
  return (
    <>
      <div className="section">
        <HeroSection />
      </div>
      <div className="home-panel section">
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
      <div className="home-panel section">
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
      <div className="home-panel section">
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
      <div className="home-panel section">
        <div className="outer">
          <div className="inner">
            {window.innerWidth >= 600 ? <Testimonials /> : <MobileTesti />}
          </div>
        </div>
      </div>
      <div className="section">
        {window.innerWidth >= 600 ? <WhyChooseUs /> : <MobileWhyChooseUs />}
      </div>
      <div className="home-panel section">
        <div className="outer">
          <div className="inner">
            <CTA />
            <Footer className="animated-gradient-bg text-white" />
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
        home={true}
        style={{
          position: "absolute",
          zIndex: "9999",
          background: "linear-gradient(180deg, #111827, transparent)",
        }}
      />
      {allImagesLoaded && <HomePage />}
    </Layout>
  );
}
