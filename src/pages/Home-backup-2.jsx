import React, { useEffect, useRef, useState } from "react";
import {
  Power,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import backgroundImage1 from "../assets/home/base.png";
import backgroundImage2 from "../assets/home/light.png";
import section1Video from "../assets/home/section1.mp4";

// Import service images
import smartLightsImg from "../assets/images/products/smart-lights.png";
import homeTheaterImg from "../assets/images/residence-services/home-theater.jpg";
import securityImg from "../assets/images/products/security.jpg";
import hvacImg from "../assets/images/products/hvac.jpg";
import smartLockImg from "../assets/images/products/smart-lock.jpg";
import multiroomAVImg from "../assets/images/products/multiroom-av.jpg";
import avEquipmentImg from "../assets/images/products/av-equipments.png";
import officeImg from "../assets/images/office/office.jpg";
import parkingImg from "../assets/images/office/parking.png";
import ctaBg from "../assets/home/cta.png";
import { ScrollToPlugin } from "gsap/all";
import { Observer } from "gsap/all";
import gsap from "gsap/all";
import Navbar from "../components/Navbar";

const Home = () => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isScheduleDialogOpen, setIsScheduleDialogOpen] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);
  const sectionRef = useRef([]);
  const containerRef = useRef(null);

  // Placeholder background images - you can replace these with your own images
  const backgroundImages = [backgroundImage1, backgroundImage2];

  const handleImageChange = () => {
    setCurrentBgIndex((prev) => (prev + 1) % backgroundImages.length);
  };

  // Services data
  const services = [
    {
      id: 1,
      title: "Home Automation",
      description:
        "Experience seamless control of lighting, curtains, and appliances via smartphone or voice with our smart systems.",
      image: smartLightsImg,
    },
    {
      id: 2,
      title: "Home Theater",
      description:
        "Immerse yourself in custom audio-visual setups with advanced acoustics, crafted for cinematic excellence.",
      image: homeTheaterImg,
    },
    {
      id: 3,
      title: "Security Systems",
      description:
        "Ensure safety with 24/7 CCTV, digital locks, and burglar alarms, providing complete peace of mind.",
      image: securityImg,
    },
    {
      id: 4,
      title: "HVAC",
      description:
        "Optimize energy use with intelligent heating and cooling systems that adapt to occupancy.",
      image: hvacImg,
    },
    {
      id: 5,
      title: "Multiroom AV",
      description:
        "Enjoy zone-specific audio and video distribution, bringing personalized entertainment to every room.",
      image: multiroomAVImg,
    },
    {
      id: 6,
      title: "Fenestrations",
      description:
        "Automate blinds and curtains for effortless light and privacy control, integrated with your smart home.",
      image: smartLightsImg,
    },
    {
      id: 7,
      title: "Conference Rooms",
      description:
        "Upgrade offices with professional AV systems for seamless, high-quality communication.",
      image: officeImg,
    },
    {
      id: 8,
      title: "Parking Systems",
      description:
        "Enhance safety with smart lighting and presence detection for efficient parking solutions.",
      image: parkingImg,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(services.length / 4));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? Math.ceil(services.length / 4) - 1 : prev - 1
    );
  };

  // useEffect(() => {
  //   gsap.registerPlugin(Observer, ScrollToPlugin);

  //   const sections = document.querySelectorAll("section");
  //   let animating = false;
  //   let currentIndex = 0;
  //   async function gotoSection(index, direction) {
  //     if (index < 0) return;
  //     if (index > sections.length - 1) return;
  //     console.log(index);
  //     animating = true;

  //     try {
  //       console.log(sectionRef.current[index]);
  //       await gsap.to(containerRef.current, {
  //         scrollTo: sectionRef.current[index].offsetTop,
  //         duration: 2,
  //       });
  //       currentIndex = index;
  //     } catch (error) {
  //       console.log(error);
  //     } finally {
  //       animating = false;
  //     }
  //   }

  //   const observer = Observer.create({
  //     type: "scroll,touch,pointer",
  //     wheelSpeed: -1,
  //     onUp: () => !animating && gotoSection(currentIndex - 1, -1),
  //     onDown: () => !animating && gotoSection(currentIndex + 1, 1),
  //     // tolerance: 10,
  //     // preventDefault: true,
  //   });
  //   sectionRef.current[0].addEventListener("scroll", () => {
  //     console.log("scroll");
  //   });
  //   return () => {
  //     observer.kill();
  //   };
  // }, []);

  return (
    <>
      <div className="" ref={containerRef}>
        <div className="absolute inset-0 z-[9999999]">
          <Navbar />
        </div>
        <section className="relative w-full h-screen overflow-hidden">
          {/* Video Background */}
          <video
            autoPlay
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            onEnded={(e) => {
              e.target.pause();
              setVideoEnded(true);
            }}
          >
            <source src={section1Video} type="video/mp4" />
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
                <p className="text-white text-sm md:text-base font-medium tracking-wide">
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
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight font-maxima-nouva">
                  Transform Your Space
                  <br />
                  <span className="italic font-light">
                    with Ritzy Lifestyle
                  </span>
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
                <p className="text-gray-200 text-sm md:text-base leading-relaxed max-w-lg">
                  Discover seamless comfort, security, and entertainment with
                  Ritzy Lifestyle&apos;s cutting-edge automation systems. Based
                  in Hebbal, Bangalore, we create personalized, future-proof
                  solutions for homes and businesses.
                </p>
              </div>

              {/* CTA Button */}
              <div
                className={`transition-all duration-700 delay-900 ${
                  videoEnded
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-8"
                }`}
              >
                <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-lg font-semibold text-sm md:text-base hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Get a Free Consultation
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 - Services */}
        <section
          ref={(el) => (sectionRef.current[1] = el)}
          className="w-full min-h-full bg-gradient-to-br from-stone-100 via-stone-200 to-stone-300 px-8 md:px-16 lg:px-20 py-8"
        >
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-4 md:mb-8">
            {/* Left Side - Title */}
            <div className="mb-8 lg:mb-0">
              <div className="flex items-center mb-6">
                <div className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">
                  🔧 Our services
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                What we can do
                <br />
                <span className="italic font-light">for you</span>
              </h2>
            </div>

            {/* Right Side - Description and Button */}
            <div className="max-w-md">
              <p className="text-gray-600 text-sm md:text-sm mb-8 leading-relaxed">
                From design to installation, we provide quality smart home
                solutions tailored to your needs.
              </p>
              <button className="group bg-orange-500 hover:bg-orange-600 text-white px-2 pl-8 py-1 rounded-full text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-3">
                <span>See our services</span>
                <span className=" bg-black rounded-full p-3">
                  <ArrowUpRight
                    size={16}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                  />
                </span>
              </button>
            </div>
          </div>

          {/* Service Cards Slider */}
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:bg-gray-50"
            >
              <ChevronLeft size={24} className="text-gray-600" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:bg-gray-50"
            >
              <ChevronRight size={24} className="text-gray-600" />
            </button>

            {/* Slider Container */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`,
                  width: `${Math.ceil(services.length / 8) * 100}%`,
                }}
              >
                {Array.from(
                  { length: Math.ceil(services.length / 2) },
                  (_, slideIndex) => (
                    <div key={slideIndex} className="w-full flex-shrink-0 px-2">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {services
                          .slice(slideIndex * 4, slideIndex * 4 + 4)
                          .map((service) => (
                            <div
                              key={service.id}
                              className="group relative h-80 md:h-96 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform cursor-pointer"
                              onMouseEnter={() => setHoveredCard(service.id)}
                              onMouseLeave={() => setHoveredCard(null)}
                            >
                              {/* Background Image */}
                              <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{
                                  backgroundImage: `url(${service.image})`,
                                }}
                              />

                              {/* Overlay */}
                              <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all duration-500" />

                              {/* Content */}
                              <div className="relative h-full flex flex-col justify-between p-6">
                                {/* Arrow Icon */}
                                <div className="flex justify-end">
                                  <div className="w-12 h-12 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center ">
                                    <ArrowUpRight
                                      size={20}
                                      className="text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                                    />
                                  </div>
                                </div>

                                {/* Title */}
                                <div className="space-y-2">
                                  <h3 className="text-white text-xl md:text-2xl font-semibold leading-tight">
                                    {service.title}
                                  </h3>

                                  {/* Expanded content on hover */}
                                  <div
                                    className={`overflow-hidden transition-all duration-500 ${
                                      hoveredCard === service.id
                                        ? "max-h-32 opacity-100"
                                        : "max-h-0 opacity-0"
                                    }`}
                                  >
                                    <p className="text-white text-sm mt-3 leading-relaxed">
                                      {service.description}
                                    </p>
                                  </div>
                                </div>
                              </div>

                              {/* Hover effect border */}
                              <div className="absolute inset-0 rounded-2xl border-2 border-transparent " />
                            </div>
                          ))}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from(
                { length: Math.ceil(services.length / 4) },
                (_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentSlide === index
                        ? "bg-orange-500 scale-125"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                )
              )}
            </div>
          </div>
        </section>

        {/* Section 3 - Features */}
        <section
          ref={(el) => (sectionRef.current[2] = el)}
          className="w-full min-h-full h-full bg-gray-50 px-8 md:px-16 lg:px-20 py-8 md:py-8"
        >
          <div className="max-w-7xl mx-auto h-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Side - Visual Element */}
              <div className="relative h-full">
                <div
                  className="relative w-full 
              bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl overflow-hidden h-full"
                >
                  {/* Placeholder for device/phone mockup */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-64 h-96 bg-gray-900 rounded-3xl p-4 shadow-2xl">
                      <div className="w-full h-full bg-gray-800 rounded-2xl flex flex-col items-center justify-center space-y-4">
                        <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                          <Power size={24} className="text-white" />
                        </div>
                        <div className="text-center">
                          <div className="text-white text-sm font-medium">
                            Smart Control
                          </div>
                          <div className="text-gray-400 text-xs">
                            Connected & Ready
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Floating UI Cards */}
                  <div className="absolute top-8 right-8 w-48 bg-white rounded-2xl p-4 shadow-xl">
                    <div className="text-sm font-semibold text-gray-800 mb-2">
                      Lighting Control
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-600">
                          Living Room
                        </span>
                        <div className="w-8 h-4 bg-blue-500 rounded-full flex items-center justify-end px-1">
                          <div className="w-3 h-3 bg-white rounded-full"></div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-600">Kitchen</span>
                        <div className="w-8 h-4 bg-gray-300 rounded-full flex items-center justify-start px-1">
                          <div className="w-3 h-3 bg-white rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-8 left-8 w-48 bg-white rounded-2xl p-4 shadow-xl">
                    <div className="text-sm font-semibold text-gray-800 mb-2">
                      Security Status
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-xs text-gray-600">
                        All Systems Active
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="space-y-8">
                {/* Header */}
                <div className="space-y-4">
                  <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    Our smart features
                  </div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
                    Let&apos;s see how your home can evolve with smart
                    automation
                  </h2>
                  <p className="text-gray-600 text-sm md:text-sm leading-relaxed">
                    Experience the future of home living with our intelligent
                    automation systems designed for smarter, more convenient,
                    and secure living.
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-6">
                  {/* Feature 1 */}
                  <div className="bg-blue-500 text-white rounded-3xl p-6 shadow-lg">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-sm font-bold">
                        1
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">
                          Smart Remote Control
                        </h3>
                        <p className="text-blue-100 leading-relaxed">
                          Manage lighting, HVAC, and security from anywhere with
                          your smartphone or voice commands.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-sm font-bold text-white">
                        2
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                          Immersive Home Theater
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          Enjoy cinematic audio-visual experiences with custom
                          setups and advanced acoustic technology.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Feature 3 */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-sm font-bold text-white">
                        3
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                          24/7 Security Monitoring
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          Stay protected with real-time CCTV, smart locks, and
                          intrusion alerts at all times.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 - Process Unveiled with Glassmorphism Dialog */}
        <section
          ref={(el) => (sectionRef.current[3] = el)}
          className="relative w-full min-h-full h-full overflow-hidden"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${backgroundImage1})`,
              }}
            />
            {/* Dark overlay for better readability */}
            <div className="absolute inset-0 bg-black bg-opacity-40" />
          </div>

          {/* Content */}
          <div className="relative z-10 h-full min-h-screen flex items-center justify-center px-8 md:px-16 lg:px-20 py-16 md:py-24">
            <div className="w-full max-w-6xl h-full">
              {/* Glassmorphism Dialog Box */}
              <div className="relative w-full h-full">
                <div className="backdrop-blur-xl bg-white bg-opacity-10 border border-white border-opacity-20 rounded-3xl overflow-hidden shadow-2xl h-full">
                  <div className="flex flex-col lg:flex-row h-full">
                    {/* Left Side - Image/Visual */}
                    <div className="lg:w-1/2 bg-gray-100 bg-opacity-20">
                      <div className="flex flex-col items-center justify-center space-y-6 relative h-full">
                        {/* Process Stage Visual */}
                        <div className="absolute inset-0">
                          <img
                            src={smartLightsImg}
                            alt="Process Stage Visual"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="lg:w-1/2 p-8 md:p-12">
                      <div className="h-full flex flex-col justify-between">
                        {/* Stage Content */}
                        <div className="space-y-6">
                          {(() => {
                            const stages = [
                              {
                                title: "Initial Consultation",
                                description:
                                  "Begin your journey with a personalized consultation where our experts utilize advanced 3D modeling and energy efficiency analysis tools to assess your space, ensuring a solution that perfectly aligns with your vision and requirements.",
                              },
                              {
                                title: "Custom Design",
                                description:
                                  "Our team crafts a tailored automation plan, leveraging IoT technology and AI-driven optimization to integrate smart systems like lighting, HVAC, and security, ensuring seamless communication and a truly connected experience.",
                              },
                              {
                                title: "Expert Installation",
                                description:
                                  "Certified technicians, equipped with specialized tools and extensive training, execute a precise installation process, bringing your smart space to life with unparalleled technical expertise.",
                              },
                              {
                                title: "Ongoing Support",
                                description:
                                  "Enjoy continuous performance with our dedicated support, including advanced remote monitoring and automated diagnostics to swiftly identify and resolve any issues, keeping your automation running flawlessly.",
                              },
                            ];

                            const currentStage = stages[currentSlide];

                            return (
                              <div className="space-y-6">
                                <div className="flex space-x-4">
                                  <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight font-maxima-nouva">
                                    {currentStage.title}
                                  </h3>
                                </div>

                                <p className="text-gray-200 text-sm md:text-sm leading-relaxed">
                                  {currentStage.description}
                                </p>
                              </div>
                            );
                          })()}
                        </div>

                        {/* Progress Indicator */}
                        <div className="pt-6">
                          <div className="flex space-x-2 flex-col">
                            <span className="text-gray-300 text-sm">
                              {currentSlide + 1} of 4
                            </span>
                            <div className="flex items-center gap-2">
                              <div className="flex-1 h-2 bg-white bg-opacity-20 rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-gradient-to-r from-orange-400 to-orange-600 rounded-full transition-all duration-500"
                                  style={{
                                    width: `${((currentSlide + 1) / 4) * 100}%`,
                                  }}
                                />
                              </div>

                              {/* Navigation Controls */}
                              <div className="flex items-center space-x-4">
                                <button
                                  onClick={() =>
                                    setCurrentSlide((prev) =>
                                      prev === 0 ? 3 : prev - 1
                                    )
                                  }
                                  className="w-8 h-8 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300"
                                >
                                  <ChevronLeft
                                    size={20}
                                    className="text-white"
                                  />
                                </button>

                                <div className="flex space-x-2">
                                  {[0, 1, 2, 3].map((index) => (
                                    <button
                                      key={index}
                                      onClick={() => setCurrentSlide(index)}
                                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                        currentSlide === index
                                          ? "bg-orange-500 scale-125"
                                          : "bg-white bg-opacity-50 hover:bg-opacity-70"
                                      }`}
                                    />
                                  ))}
                                </div>

                                <button
                                  onClick={() =>
                                    setCurrentSlide((prev) => (prev + 1) % 4)
                                  }
                                  className="w-8 h-8 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300"
                                >
                                  <ChevronRight
                                    size={20}
                                    className="text-white"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5 - Our Journey */}
        <section
          ref={(el) => (sectionRef.current[4] = el)}
          className="w-full min-h-full bg-white px-8 md:px-16 lg:px-20 py-16 md:py-24"
        >
          <div className="w-full max-w-7xl mx-auto">
            {/* Main Headline */}
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight uppercase tracking-wide">
                Our Journey
              </h2>
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Left Column - Image and Text */}
              <div className="space-y-8">
                {/* Main Left Image */}
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src={smartLightsImg}
                    alt="Modern lighting fixture with spherical glass globes"
                    className="w-full h-[500px] md:h-[600px] object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Text below left image */}
                <div className="max-w-md">
                  <p className="text-gray-700 text-sm md:text-sm leading-relaxed">
                    We are driven by a passion for perfection and a dedication
                    to delivering exceptional quality
                  </p>
                </div>
              </div>

              {/* Right Column - Text Blocks and Image */}
              <div className="space-y-8 lg:space-y-12">
                {/* Introduction Text */}
                <div className="max-w-sm">
                  <p className="text-gray-700 text-sm md:text-sm leading-relaxed">
                    Founded by Deepa Jayaraman in Hebbal, Bangalore, Ritzy
                    Lifestyle brings smart home and office automation to life
                    with innovative designs, shaping modern living spaces as of
                    July 2025.
                  </p>
                </div>

                {/* Prominent Text */}
                <div className="text-left flex justify-end">
                  <h3 className="text-3xl md:text-4xl font-extralight text-gray-800 uppercase tracking-wide w-1/2">
                    Redefining Excellence
                  </h3>
                </div>

                {/* Details Text */}
                <div className="max-w-lg">
                  <p className="text-gray-700 text-sm md:text-sm leading-relaxed w-1/2">
                    Rooted in cutting-edge technology and a passion for luxury,
                    we transform serene, upscale environments into connected
                    sanctuaries, delivering personalized solutions tonight and
                    beyond.
                  </p>
                </div>

                <div>
                  {/* Small Text */}
                  <div className="text-left">
                    <p className="text-gray-600 text-xs md:text-xs font-medium">
                      Since 2025
                    </p>
                  </div>

                  {/* Right Image */}
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <img
                      src={homeTheaterImg}
                      alt="Modern pendant light fixture with illuminated ring"
                      className="w-full h-[400px] md:h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6 - CTA */}
        <section
          ref={(el) => (sectionRef.current[5] = el)}
          className="relative w-full overflow-hidden"
        >
          {/* Background with Gradient - Deep blue to bright light blue */}
          <div className="absolute inset-0 h-full w-full">
            <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-black w-full h-1/2">
              {/* Light bloom effect - bright white light from top-right */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white bg-opacity-40 rounded-full blur-[100px] transform translate-x-1/3 -translate-y-1/3"></div>
            </div>
            <div className="bg-gradient-to-r from-slate-200 via-slate-100 to-white w-full h-1/2">
              {/* Light bloom effect - bright white light from top-right */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white bg-opacity-40 rounded-full blur-[100px] transform translate-x-1/3 -translate-y-1/3"></div>
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 md:h-full flex items-center justify-center px-8 md:px-16 lg:px-20 py-16 md:py-24">
            <div className="w-full max-w-4xl h-full ">
              {/* Glassmorphism Card */}
              <div className="backdrop-blur-xl bg-black bg-opacity-20 border border-white border-opacity-20 rounded-3xl overflow-hidden shadow-2xl p-12 md:p-16 h-full">
                {/* Brand Identifier */}
                <div className="flex items-center justify-center mb-8">
                  <div className="w-8 h-8 bg-sky-400 rounded-lg flex items-center justify-center mr-4">
                    <Power size={16} className="text-white" />
                  </div>
                  <span className="text-sky-300 text-sm font-semibold tracking-wide uppercase">
                    Ritzy Lifestyle
                  </span>
                </div>

                {/* Main Headline */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-6 leading-tight">
                  Take the Next Step
                </h2>

                {/* Sub-headline */}
                <p className="text-gray-200 text-sm md:text-sm text-center mb-12 max-w-2xl mx-auto leading-relaxed">
                  Ready to transform your space with smart automation? Connect
                  with Ritzy Lifestyle tonight and start your journey to a
                  luxurious, connected lifestyle as of July 2025.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button
                    onClick={() => (window.location.href = "/contact")}
                    className="bg-white text-slate-800 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-gray-50 hover:shadow-lg min-w-[100px]"
                  >
                    Get in Touch
                  </button>
                  <button
                    onClick={() => setIsScheduleDialogOpen(true)}
                    className="bg-slate-800 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-slate-700 hover:shadow-lg min-w-[100px]"
                  >
                    Schedule
                  </button>
                  <button
                    onClick={() => (window.location.href = "/feedback")}
                    className="bg-slate-800 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-slate-700 hover:shadow-lg min-w-[100px]"
                  >
                    Feedback
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* </div> */}
        {/* Schedule Dialog */}
        {isScheduleDialogOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div
              className="rounded-3xl p-8 relative max-w-1/2 w-11/12 min-h-md h-full"
              style={{
                backgroundImage: `url(${ctaBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsScheduleDialogOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-300"
              >
                <X size={24} />
              </button>
              <div className="flex flex-col justify-end h-full pb-12">
                {/* Headline */}
                <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
                  GET IN TOUCH
                </h3>

                {/* Subtitle */}
                <p className="text-gray-300 text-center text-xs mb-8">
                  Join the ranks of those who demand the best. Upgrade your
                  experience today!
                </p>

                {/* Form */}
                <form className="space-y-4 flex flex-col items-center">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full px-6 py-3 bg-transparent border border-gray-600 rounded-full text-white placeholder-gray-400 
                  focus:outline-none focus:border-blue-400 transition-colors duration-300"
                    />
                    <input
                      type="email"
                      placeholder="Your email"
                      className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-full text-white placeholder-gray-400
                  focus:outline-none focus:border-blue-400  transition-colors duration-300"
                    />
                  </div>
                  <textarea
                    placeholder="Your message"
                    rows={1}
                    className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors duration-300 resize-none"
                  ></textarea>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className=" m-auto bg-gradient-to-br from-slate-800 via-black to-black text-white px-12 py-3 rounded-full font-semibold hover:bg-gray-700 transition-colors duration-300 border-t-2  border-gray-400 "
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
