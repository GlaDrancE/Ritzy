// import React, { Suspense, useEffect, useRef, useState } from "react";
import HeroSection from "../components/HeroSection";
import Layout from "./Layout";
import Navbar from "../components/Navbar";
import FixedBackgroundImage from "../components/FixedBackgroundImage";
import HorizontalSlider from "../components/HorizontalSlider";
import ProductsGrid from "../components/ProductsGrid";
import Testimonials from "../components/Testimonials";
import WhyChooseUs from "../components/WhyChooseUs";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import MobileBenifits from "../components/MobileBenifits";
import MobileHorizontal from "../components/MobileHorizontal";
import MobileTesti from "../components/MobileTesti";
import MobileProductGrid from "../components/MobileProductGrid";
import MobileWhyChooseUs from "../components/MobileWhyChooseUs";
import { useImages } from "../context/ImageContext";

function HomePage() {
  return (
    <div className="home-container   overflow-hidden relative">
      <HeroSection />
      {/* <CoreServices /> */}
      {window.innerWidth >= 600 ? <FixedBackgroundImage /> : <MobileBenifits />}
      {window.innerWidth >= 600 ? <HorizontalSlider /> : <MobileHorizontal />}
      {window.innerWidth >= 600 ? <ProductsGrid /> : <MobileProductGrid />}
      {window.innerWidth >= 600 ? <Testimonials /> : <MobileTesti />}
      {window.innerWidth >= 600 ? <WhyChooseUs /> : <MobileWhyChooseUs />}
      <CTA />
      <Footer className="tertiary-bg text-[#504B38]" />
    </div>
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
