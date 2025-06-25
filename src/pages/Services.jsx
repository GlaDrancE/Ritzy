import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Navbar from "../components/Navbar";
import { TextLinesReveal, TextRevealOpacity } from "../components/TextReveal";
import {
  ArrowLeftCircle,
  BedDouble,
  Car,
  Cctv,
  ChevronLeft,
  ChevronRight,
  Lightbulb,
  ScanHeart,
  Sprout,
  Tv,
} from "lucide-react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import Footer from "../components/Footer";

// Images imports
import office from "../assets/images/office/office.jpg";
import residence from "../assets/images/residence-services/residence.jpg";
import security from "../assets/images/residence-services/security.jpg";
import lightings from "../assets/images/residence-services/lightings.jpg";
import gardening from "../assets/images/residence-services/gardning.jpg";
import home_theater from "../assets/images/residence-services/home-theater.jpg";
import living_room from "../assets/images/residence-services/living-room.jpg";
import vc_1 from "../assets/images/office/vc-1.png";
import parking from "../assets/images/office/parking.png";

import avEquipment from "../assets/images/products/av-equipments.png";
import burglarAlarm from "../assets/images/products/burglar-alarm.jpg";
import hvac from "../assets/images/products/hvac.jpg";
import multiroomAv from "../assets/images/products/multiroom-av.jpg";
import prodSecurity from "../assets/images/products/security.jpg";
import sensorLights from "../assets/images/products/sensor-lights.jpg";
import smartLights from "../assets/images/products/smart-lights.png";
import smartLock from "../assets/images/products/smart-lock.jpg";
import Layout from "./Layout";

const ServicesComponent = () => {
  const containerRef = useRef(null);
  const officeRef = useRef(null);
  const residenceRef = useRef(null);
  const buttonRef = useRef(null);
  const residenceSection1 = useRef(null);
  const residenceSection2 = useRef(null);
  const residenceSection3 = useRef(null);
  const residenceSection4 = useRef(null);
  const residenceSection5 = useRef(null);
  const residenceSection6 = useRef(null);
  const residenceSection7 = useRef(null);
  const residenceSlider = useRef(null);
  const footerRef = useRef(null);

  const officeImageRef = useRef([]);
  const officeServicesRef = useRef(null);
  const officeTextRef = useRef([]);

  const [sectionReveal, setSectionReveal] = useState(false);
  const [section, setSection] = useState("");

  const [sliderCurrent, setSliderCurrent] = useState(1);
  // const [isRedisInit, setRedisInit] = useState(false);
  // const [isOfficeInit, setOfficeInit] = useState(false);

  const sliderCurrentRef = useRef(0);
  // const sliderSpeed = 3000;

  const residenceProducts = [
    {
      title: "Security",
      content: "Secure, easy-to-use & trustable for complete peace of mind.",
      img: prodSecurity,
    },
    {
      title: "Smart Touch",
      content:
        "Control lighting and blinds for convenience, productivity, and sleek office designs.",
      img: smartLights,
    },
    {
      title: "Multiroom AV",
      content:
        "Seamless entertainment with multiroom audio and video, controlled via smartphone or tablet.",
      img: multiroomAv,
    },
    {
      title: "Door Locks",
      content:
        "Answer your door remotely with clear, real-time video for enhanced security.",
      img: smartLock,
    },
    {
      title: "Sensors Lights",
      content:
        "Energy-efficient sensor lights that activate on motion for improved security.",
      img: sensorLights,
    },
    {
      title: "Burglar Alarm",
      content:
        "Detects unauthorized entry and alerts homeowners or authorities with real-time notifications.",
      img: burglarAlarm,
    },
    {
      title: "HVAC Systems",
      content:
        "Smart HVAC systems adjust temperature and airflow based on occupancy and conditions.",
      img: hvac,
    },
    {
      title: "Audio Video Equipments",
      content:
        "Smart systems for enhanced audio and video experiences with energy savings.",
      img: avEquipment,
    },
  ];

  const residenceServices = [
    {
      icon: <Lightbulb />,
      title: "Lightings",
      description:
        "Automated lighting systems that adapt to your lifestyle and enhance energy efficiency.",
      image: lightings,
      ref: residenceSection2,
      z: 20,
    },

    {
      icon: <Sprout />,
      title: "Gardning Lightnings",
      description:
        "Effortlessly manage and enjoy lush, vibrant greenery with automated watering and lighting systems at your fingertips.",
      image: gardening,
      ref: residenceSection3,
      z: 19,
    },

    {
      icon: <Tv />,
      title: "Home Theater",
      description:
        "Design and install immersive home cinema setups with surround sound, projectors, and screens.",
      image: home_theater,
      ref: residenceSection4,
      z: 18,
    },
    {
      icon: <BedDouble />,
      title: "Living Room",
      description:
        "Effortlessly manage and enjoy lush, vibrant greenery with automated watering and lighting systems at your fingertips.",
      image: living_room,
      ref: residenceSection5,
      z: 17,
    },

    {
      icon: <Cctv />,
      title: "Security",
      description:
        "State-of-the-art CCTV, intrusion alarms, and sensors for complete peace of mind.",
      image: security,
      ref: residenceSection6,
      z: 16,
    },
  ];

  const officeServices = [
    {
      icon: <Tv />,
      title: "Video Conferencing",
      content:
        "Experience seamless video and audio conferencing with high-definition screens and crystal-clear sound. Control meetings effortlessly using sleek touch panels, enhancing remote collaboration in a modern, connected office.",
      image: vc_1,
    },
    {
      icon: <Car />,
      title: "Parking",
      content:
        "Smart parking systems guide drivers to available spaces using digital indicators and real-time monitoring. Integrated with EV charging stations and mobile apps, this solution ensures secure, efficient parking management.",
      image: parking,
    },
    {
      icon: <ScanHeart />,
      title: "HVAC Systems",
      content:
        "Smart HVAC systems adjust temperature and airflow based on occupancy and conditions. Enjoy optimal comfort and energy savings with automated climate control.",
      image: hvac,
    },
  ];
  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      // const x2 = (e.clientX - rect.left) / rect.width;
      // const y2 = (e.clientY - rect.top) / rect.height;

      // const moveX = (x2 - 0.5) * 50; // Adjust multiplier to increase or decrease movement
      // const moveY = (y2 - 0.5) * 50;
      gsap.to(buttonRef.current, {
        x: x - buttonRef.current.clientWidth / 2 + 10,
        y: y - buttonRef.current.clientHeight / 2 - 30,
        ease: "power3.out",
        duration: 0.3,
      });
    };

    const handleMouseEnter = () => {
      gsap.to(buttonRef.current, {
        opacity: 1,
        scale: 1,
        pointerEvents: "auto",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(buttonRef.current, {
        opacity: 0,
        scale: 0,
        pointerEvents: "none",
      });
      document.body.style.cursor = "auto";
    };

    if (sectionReveal) {
      containerRef.current.removeEventListener("mousemove", handleMouseMove);
      containerRef.current.removeEventListener("mouseenter", handleMouseEnter);
      containerRef.current.removeEventListener("mouseleave", handleMouseLeave);
    }
    if (window.innerWidth > 600 && !sectionReveal) {
      console.log(sectionReveal);
      containerRef.current.addEventListener("mousemove", handleMouseMove);
      containerRef.current.addEventListener("mouseenter", handleMouseEnter);
      containerRef.current.addEventListener("mouseleave", handleMouseLeave);
    }
  }, [sectionReveal]);

  // // Animation for Residence
  // useGSAP(() => {
  //   if (!sectionReveal || section !== "residence" || isRedisInit) return;

  //   console.log("Called residence gsap");
  //   const createScrollConfig = (triggerRef, pinRef, multiplier = 0) => ({
  //     trigger: triggerRef.current,
  //     start: "top top",
  //     end: multiplier
  //       ? () => `bottom ${-window.innerHeight * multiplier}px`
  //       : "bottom top",
  //     scrub: 1,
  //     pin: pinRef.current,
  //     pinSpacing: false,
  //     invalidateOnRefresh: true,
  //   });
  //   const sectionConfigs = [
  //     { trigger: residenceSection1, pin: residenceSection2, multiplier: 0 },
  //     { trigger: residenceSection2, pin: residenceSection3, multiplier: 1 },
  //     { trigger: residenceSection3, pin: residenceSection4, multiplier: 2 },
  //     { trigger: residenceSection4, pin: residenceSection5, multiplier: 3 },
  //     { trigger: residenceSection5, pin: residenceSection6, multiplier: 4 },
  //     { trigger: residenceSection6, pin: residenceSection7, multiplier: 5 },
  //   ];

  //   // Store ScrollTrigger instances for cleanup
  //   const scrollTriggers = [];

  //   const initializeAnimations = () => {
  //     // Create ScrollTrigger instances
  //     sectionConfigs.forEach(({ trigger, pin, multiplier }) => {
  //       const timeline = gsap.timeline({
  //         scrollTrigger: createScrollConfig(trigger, pin, multiplier),
  //       });

  //       // Store the ScrollTrigger instance
  //       scrollTriggers.push(timeline.scrollTrigger);
  //     });

  //     // Refresh ScrollTrigger after all instances are created
  //     ScrollTrigger.refresh();
  //   };

  //   // Initialize with a small delay to ensure DOM is ready
  //   const timer = setTimeout(initializeAnimations, 100);

  //   setRedisInit(true);

  //   // Cleanup function
  //   return () => {
  //     // Clear initialization timeout
  //     clearTimeout(timer);

  //     // Kill specific ScrollTrigger instances we created
  //     scrollTriggers.forEach((trigger) => {
  //       if (trigger && trigger.kill) {
  //         trigger.kill();
  //       }
  //     });

  //     // Clear the array
  //     scrollTriggers.length = 0;

  //     // Force a refresh after cleanup
  //     ScrollTrigger.refresh();
  //   };
  // }, [section]);

  // useGSAP(() => {
  //   if (!sectionReveal || section != "office" || isOfficeInit) return;
  //   console.log("OFfice init");
  //   gsap.set(officeImageRef.current[0], { height: "100%" });
  //   gsap.set(officeTextRef.current[0], { opacity: "1" });
  //   setOfficeInit(true);
  //   const officeTimeline = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: officeServicesRef.current,
  //       start: "top 0",
  //       end: () => {
  //         return `+=${window.innerHeight * 3}px`;
  //       },
  //       scrub: 1,
  //       pin: true,
  //     },
  //   });
  //   console.log(officeImageRef.current);

  //   officeImageRef.current.forEach((image, index) => {
  //     if (index === 0) return;
  //     officeTimeline.to(image, {
  //       height: "100%",
  //       duration: 2,
  //       ease: "none",
  //     });
  //     officeTimeline.to(officeTextRef.current[index], {
  //       opacity: 1,
  //     });
  //     officeTimeline.to(
  //       officeTextRef.current[index - 1],
  //       {
  //         opacity: 0,
  //       },
  //       ">-1"
  //     );
  //   });
  //   return () => {
  //     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  //   };
  // }, [section]);

  const createScrollConfig = useCallback(
    (triggerRef, pinRef, multiplier = 0) => ({
      trigger: triggerRef.current,
      start: "top top",
      end: multiplier
        ? () => `bottom ${-window.innerHeight * multiplier}px`
        : "bottom top",
      scrub: 1,
      pin: pinRef.current,
      pinSpacing: false,
      invalidateOnRefresh: true,
    }),
    []
  );

  useGSAP(() => {
    // Guard clauses
    if (!sectionReveal || (section !== "residence" && section !== "office"))
      return;

    // Reset ScrollTriggers before new animations
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    if (section === "residence") {
      const sectionConfigs = [
        { trigger: residenceSection1, pin: residenceSection2, multiplier: 0 },
        { trigger: residenceSection2, pin: residenceSection3, multiplier: 1 },
        { trigger: residenceSection3, pin: residenceSection4, multiplier: 2 },
        { trigger: residenceSection4, pin: residenceSection5, multiplier: 3 },
        { trigger: residenceSection5, pin: residenceSection6, multiplier: 4 },
        { trigger: residenceSection6, pin: residenceSection7, multiplier: 5 },
      ];

      const scrollTriggers = [];

      const initializeResidenceAnimations = () => {
        sectionConfigs.forEach(({ trigger, pin, multiplier }) => {
          const timeline = gsap.timeline({
            scrollTrigger: createScrollConfig(trigger, pin, multiplier),
          });
          scrollTriggers.push(timeline.scrollTrigger);
        });

        ScrollTrigger.refresh();
      };

      initializeResidenceAnimations();
      // setRedisInit(true);
    }

    if (section === "office") {
      gsap.set(officeImageRef.current[0], { height: "100%" });
      gsap.set(officeTextRef.current[0], { opacity: "1" });

      const officeTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: officeServicesRef.current,
          start: "top 0",
          end: () => `+=${window.innerHeight * 3}px`,
          scrub: 1,
          pin: true,
        },
      });

      officeImageRef.current.forEach((image, index) => {
        if (index === 0) return;
        officeTimeline.to(image, {
          height: "100%",
          duration: 2,
          ease: "none",
        });
        officeTimeline.to(officeTextRef.current[index], {
          opacity: 1,
        });
        officeTimeline.to(
          officeTextRef.current[index - 1],
          {
            opacity: 0,
          },
          ">-1"
        );
      });

      // setOfficeInit(true);
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      // setRedisInit(false);
      // setOfficeInit(false);
    };
  }, [section, sectionReveal, createScrollConfig]);

  const openOffice = () => openSection("office");
  const openResidence = () => openSection("residence");
  async function openSection(section) {
    const expandConfigs = {
      width: "100%",
      duration: 0.2,
      ease: "back.in",
    };
    const collapseConfig = {
      width: "0",
      duration: 0.2,
    };
    // getting ref based on condition
    const ref = {
      open: section === "office" ? officeRef.current : residenceRef.current,
      close: section === "office" ? residenceRef.current : officeRef.current,
    };
    ref.open.classList.remove("hover-section");
    footerRef.current.classList.remove("hidden");
    await gsap
      .timeline()
      .to(ref.open, expandConfigs)
      .to(ref.close, collapseConfig)
      .call(() => {
        setSectionReveal(true);
        setSection(section);
      });
  }
  const handleBack = async () => {
    // Reusable animation config
    const resetConfig = {
      width: "50%",
      duration: 0.2,
    };

    // Early return if no section is active
    if (!section) return;

    // Update state first
    setSectionReveal(false);

    // Determine sections based on current state
    const configs = {
      office: {
        firstSection: residenceRef,
        secondSection: officeRef,
      },
      residence: {
        firstSection: officeRef,
        secondSection: residenceRef,
      },
    };

    const currentConfig = configs[section];

    // Return if invalid section
    if (!currentConfig) return;

    const { firstSection, secondSection } = currentConfig;

    // Execute animations
    await gsap
      .timeline()
      .to(firstSection.current, resetConfig)
      .to(secondSection.current, {
        ...resetConfig,
        cursor: "none",
      })
      .call(() => {
        setSection("");
        secondSection.current.classList.add("hover-section");
        footerRef.current.classList.add("hidden");
      });
  };
  useEffect(() => {
    sliderCurrentRef.current = sliderCurrent;
    console.log(sliderCurrent);
  }, [sliderCurrent]);

  const changeNext = (sliderItem1, sliderItem2) => {
    if (!residenceSlider.current) return;
    // const length = residenceServices.length;
    const totalGap =
      sliderItem2.getBoundingClientRect().left -
      sliderItem1.getBoundingClientRect().left;

    const sliderOffset = residenceSlider.current.getBoundingClientRect();

    const maxScroll =
      residenceSlider.current.scrollWidth - residenceSlider.current.clientWidth;
    residenceSlider.current.scrollTo({
      left: residenceSlider.current.scrollLeft + totalGap,
      behaviour: "smooth",
    });
    const totalVisibleSlides = Math.round(
      sliderOffset.width / sliderItem1.getBoundingClientRect().width + 1
    );

    setSliderCurrent((prev) => (prev + 1) % totalVisibleSlides);

    if (
      residenceSlider.current.scrollLeft >= maxScroll &&
      sliderCurrent === 1
    ) {
      residenceSlider.current.scrollLeft = 0;
    }
  };
  const changePrev = (sliderItem1, sliderItem2) => {
    if (!residenceSlider.current) return;
    // const length = residenceServices.length;
    const totalGap =
      sliderItem2.getBoundingClientRect().left -
      sliderItem1.getBoundingClientRect().left;

    // const sliderOffset = residenceSlider.current.getBoundingClientRect();

    const maxScroll =
      residenceSlider.current.scrollWidth - residenceSlider.current.clientWidth;
    residenceSlider.current.scrollTo({
      left: residenceSlider.current.scrollLeft - totalGap,
      behaviour: "smooth",
    });
    // const totalVisibleSlides = Math.round(
    //   sliderOffset.width / sliderItem1.getBoundingClientRect().width + 1
    // );

    setSliderCurrent((prev) => prev - 1);

    if (
      residenceSlider.current.scrollLeft >= maxScroll &&
      sliderCurrent === 1
    ) {
      residenceSlider.current.scrollLeft = 0;
    }
  };

  const handleSliderChange = (e) => {
    if (!residenceSlider.current) return;
    const sliderItem1 = residenceSlider.current.querySelector(
      ".residence-item:nth-child(1)"
    );
    const sliderItem2 = residenceSlider.current.querySelector(
      ".residence-item:nth-child(2)"
    );
    console.log(e.target);
    e.target.classList.contains("lucide-chevron-right")
      ? changeNext(sliderItem1, sliderItem2)
      : changePrev(sliderItem1, sliderItem2);

    // setSliderCurrent((prev) => prev + 1);
  };
  // useEffect(() => {
  //   const interval = setInterval(() => {

  //   }, sliderSpeed);
  //   // Clean up the interval when component unmounts
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="secondary-bg">
      <Navbar />
      <main className="p-6 pt-0 relative ">
        <div className="rounded-3xl overflow-hidden" ref={containerRef}>
          <div className="flex md:flex-row flex-col h-screen w-full overflow-hidden">
            <div
              onClick={openResidence}
              ref={residenceRef}
              className="block cursor-none relative md:w-1/2 w-full  hover-section duration-1000 h-full transition-all overflow-hidden"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h2 className="text-6xl uppercase font-maxima-nouva font-bold text-white mb-4">
                    Residential
                  </h2>
                </div>
              </div>
              <img
                src={residence}
                className="w-full h-full aboslute top-0 left-0 object-cover"
                alt=""
              />
            </div>
            <div
              className="block cursor-none overflow-hidden relative h-full md:w-1/2 w-full hover-section duration-1000 bg-gray-900 transition-all"
              ref={officeRef}
              onClick={openOffice}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h2 className="text-6xl uppercase font-maxima-nouva font-bold text-white mb-4">
                    Office
                  </h2>
                </div>
              </div>
              <img
                src={office}
                className="w-full h-full aboslute top-0 left-0 object-cover"
                alt=""
              />
            </div>
          </div>
          <div
            to={"/contact"}
            ref={buttonRef}
            className={`cursor-button cursor-auto ${
              sectionReveal ? "bg-white text-black" : "bg-black text-white"
            }`}
          >
            {sectionReveal ? "Scroll" : "Click"}
          </div>
        </div>
        <button
          className={`p-6 bg-white rounded-full absolute origin-center bottom-10 left-10 ${
            !sectionReveal ? "scale-0 opacity-0" : "scale-1 opacity-1"
          }`}
          onClick={handleBack}
        >
          <ArrowLeftCircle />
        </button>
      </main>

      {
        <div
          className={`w-screen10 bg-transparent relative  overflow-hidden h-[400vh] ${
            section === "office" ? "block" : "hidden"
          }`}
        >
          <section
            ref={officeServicesRef}
            className="w-full h-screen will-change-transform p-6 absolute top-0"
          >
            <div className="grid grid-cols-2 h-full w-full bg-red-300 morph-glass rounded-3xl relative overflow-hidden p-0">
              <div className="relative morph-glass top-0 left-0 z-50 flex-col flex items-center justify-center">
                {officeServices.map((service, index) => (
                  <div
                    key={index}
                    className={`w-full h-full flex flex-col items-center justify-center absolute z-[${index}] opacity-0`}
                    ref={(el) => (officeTextRef.current[index] = el)}
                  >
                    <span className="mb-8 invert">{service.icon}</span>
                    <TextLinesReveal
                      text={service.title}
                      className="text-3xl font-uber-move
                     text-white font-maxima-nouva font-bold"
                    />
                    <TextLinesReveal
                      text={service.content}
                      className="text-lg w-4/5 font-uber-move text-center  text-white font-maxima-nouva mt-8"
                    />
                  </div>
                ))}
              </div>
              <div
                className={`absolute top-0 left-0 w-full h-full overflow-hidden`}
              >
                {officeServices.map((service, index) => (
                  <img
                    key={index}
                    src={service.image}
                    alt=""
                    ref={(el) => (officeImageRef.current[index] = el)}
                    className={`w-full h-0 object-cover  z-[${index}] absolute bottom-0 left-0`}
                  />
                ))}
              </div>
            </div>
          </section>
        </div>
      }
      {
        <div
          className={`relative w-screen overflow-hidden  h-[700vh] ${
            section === "residence" ? "block" : "hidden"
          }`}
        >
          <section
            className="secondary-bg absolute px-4 py-12 md:py-12 lg:py-12 top-0 z-50 h-screen w-screen will-change-transform font-francy "
            ref={residenceSection1}
          >
            <div className="w-full h-full flex items-center justify-center">
              <TextRevealOpacity
                text={"Crafting Intelligent Spaces with Timeless Design"}
                className="text-6xl w-3/4 text-center text-black"
              />
            </div>
          </section>

          {residenceServices.map((service, index) => (
            <section
              className={`dark-green-bg top-0 h-screen min-w-screen w-screen  will-change-transform absolute residence-sections`}
              key={index}
              style={{ zIndex: service.z }}
              ref={service.ref}
            >
              <div className="w-full h-full grid grid-cols-2 justify-center items-center px-4">
                <div
                  className={`w-full h-screen py-8 ${
                    index % 2 ? "order-1" : "order-none"
                  }`}
                >
                  <div className="w-full h-full overflow-hidden rounded-2xl">
                    <img
                      src={service.image}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex items-center justify-center text-center  text-white flex-col w-full h-full ">
                  <div className="p-2 border-2 border-white rounded-lg">
                    {service.icon}
                  </div>
                  <h1 className="text-3xl uppercase font-bold font-uber-move-bold my-6">
                    {service.title}
                  </h1>
                  <p className="text-lg font-uber-move w-1/2">
                    {service.description}
                  </p>
                </div>
              </div>
            </section>
          ))}
          <section
            className="h-screen w-screen will-change-transform px-8 md:pl-24 flex items-center absolute flex-col pt-16 relative"
            ref={residenceSection7}
          >
            <div className="w-full ">
              <h1 className="text-4xl font-uber-move-bold text-white mb-8 ">
                Services Includes :
              </h1>
              <div
                ref={residenceSlider}
                className="flex space-between scroll-smooth overflow-hidden gap-10 w-full select-none"
              >
                {residenceProducts.map((services) => (
                  <div
                    key={services.title}
                    className="w-full h-96 min-w-60 min-h-96 rounded-3xl flex items-end relative overflow-hidden justify-end group residence-item"
                  >
                    <img
                      src={services.img}
                      className="w-full h-full absolute top-0 left-0 object-cover"
                      alt=""
                    />
                    <div
                      className="morph-glass p-4 w-full h-2/5 rounded-b-xl  overflow-hidden backdrop-blur-[30px] text-black bg-[#d9d9d921] group-hover:h-96 transition-all flex justify-center flex-col duration-500"
                      style={{
                        background: "#d9d9d921",
                      }}
                    >
                      <h2 className="text-2xl font-uber-move-bold mix-blend-multiply text-[#484848]">
                        {services.title}
                      </h2>
                      <span className="text-black font-uber-move drop-shadow-lg">
                        {services.content}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute bottom-0 right-6 flex ">
              <button
                id="prev"
                className="cursor-pointer"
                onClick={(e) => handleSliderChange(e)}
              >
                <ChevronLeft />
              </button>
              <button
                id="next"
                className="ml-8 cursor-pointer"
                onClick={(e) => handleSliderChange(e)}
              >
                <ChevronRight />
              </button>
            </div>
          </section>
        </div>
      }
      <div className="hidden" ref={footerRef}>
        <Footer />
      </div>
    </div>
  );
};

export const Services = () => {
  return (
    <Layout>
      <ServicesComponent />
    </Layout>
  );
};
