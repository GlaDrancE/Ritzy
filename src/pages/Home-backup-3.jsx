import React, { useState } from "react";
import Navbar from "../components/Navbar";
import section1Video from "../assets/home/section1.mp4";
import section1PhoneVideo from "../assets/home/section1_phone.mp4";
import homeImage from "../assets/home/home.png";
import { CalloutPointer } from "../components/CalloutPointer";
import Layout from "./Layout";
import { Link } from "react-router-dom";

const Home = () => {
  const [videoEnded, setVideoEnded] = useState(false);

  const handleVideoEnd = (e) => {
    e.target.pause();
    setVideoEnded(true);
  };

  return (
    <Layout>
      <div className="absolute inset-0 z-[999]">
        <Navbar className="morph-glass !backdrop-blur-0 !py-6 sticky top-0 border-b-2 border-[#b0b0b0]" />
      </div>
      <section className="relative w-full h-screen overflow-hidden">
        {/* Desktop Video Background - Hidden on mobile */}
        <video
          autoPlay
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover hidden md:block"
          onEnded={handleVideoEnd}
        >
          <source src={section1Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Mobile Video Background - Hidden on desktop */}
        <video
          autoPlay
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover block md:hidden"
          onEnded={handleVideoEnd}
        >
          <source src={section1PhoneVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Optional overlay for better text readability if needed */}
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>

        {/* Hero Content - Fades in from left after video ends */}
        <div
          className={`absolute inset-0 flex items-center justify-start px-8 md:px-16 lg:px-20 transition-all duration-1000 ease-out ${
            videoEnded
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-full"
          }`}
        >
          <div className="max-w-2xl space-y-6">
            {/* Subtitle */}
            <div
              className={`transition-all duration-700 delay-300 ${
                videoEnded
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
            >
              <p className="text-white text-sm md:text-sm font-medium tracking-wide">
                Smart Home & Office Automation Solutions
              </p>
            </div>

            {/* Main Heading */}
            <div
              className={`transition-all duration-700 delay-500 ${
                videoEnded
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-widest font-maxima-nouva">
                Where Luxury Meets Intelligent Living.
              </h1>
            </div>

            {/* Body Paragraph */}
            <div
              className={`transition-all duration-700 delay-700 ${
                videoEnded
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
            >
              <p className="text-gray-200 text-sm md:text-sm max-w-lg leading-tight">
                Discover how easy life becomes when your home listens to you.
              </p>
            </div>
            <Link to={"/contact"} className="block md:hidden">
              <button className=" bg-gradient-to-tr from-[#FF6735] to-[#993E20] px-4 py-2 text-sm rounded-md text-white font-maxima-nouva ">
                Get free consultation
              </button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
