import { useState, useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Layout from "./Layout";

const Products = () => {
  const [hoveredProduct, setHoveredProduct] = useState(1); // Start with first product expanded
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollContainerRef = useRef(null);
  const scrollIntervalRef = useRef(null);
  const [searchParams] = useSearchParams();
  const serviceId = parseInt(searchParams.get("service")) || 1;

  // Import product images
  const hvacImg = new URL("../assets/images/products/hvac.jpg", import.meta.url)
    .href;
  const avEquipmentImg = new URL(
    "../assets/images/products/av-equipments.png",
    import.meta.url
  ).href;
  const smartLockImg = new URL(
    "../assets/images/products/smart-lock.jpg",
    import.meta.url
  ).href;
  const multiroomAVImg = new URL(
    "../assets/images/products/multiroom-av.jpg",
    import.meta.url
  ).href;
  const smartLightsImg = new URL(
    "../assets/images/products/smart-lights.png",
    import.meta.url
  ).href;
  const securityImg = new URL(
    "../assets/images/products/security.jpg",
    import.meta.url
  ).href;
  const burglarAlarmImg = new URL(
    "../assets/images/products/burglar-alarm.jpg",
    import.meta.url
  ).href;
  const sensorLightsImg = new URL(
    "../assets/images/products/sensor-lights.jpg",
    import.meta.url
  ).href;

  // Import service images for backgrounds
  const livingRoomImg = new URL(
    "../assets/images/residence-services/living-room.jpg",
    import.meta.url
  ).href;
  const homeTheaterImg = new URL(
    "../assets/images/residence-services/home-theater.jpg",
    import.meta.url
  ).href;
  const lightingsImg = new URL(
    "../assets/images/residence-services/lightings.jpg",
    import.meta.url
  ).href;
  const residenceImg = new URL(
    "../assets/images/residence-services/residence.jpg",
    import.meta.url
  ).href;
  const gardningImg = new URL(
    "../assets/images/residence-services/gardning.jpg",
    import.meta.url
  ).href;
  const residenceSecurityImg = new URL(
    "../assets/images/residence-services/security.jpg",
    import.meta.url
  ).href;

  // Import office images
  const officeImg = new URL(
    "../assets/images/office/office.jpg",
    import.meta.url
  ).href;
  const officeHvacImg = new URL(
    "../assets/images/office/hvac.png",
    import.meta.url
  ).href;
  const parkingImg = new URL(
    "../assets/images/office/parking.png",
    import.meta.url
  ).href;
  const vc1Img = new URL("../assets/images/office/vc-1.png", import.meta.url)
    .href;
  const vc2Img = new URL("../assets/images/office/vc-2.png", import.meta.url)
    .href;

  // Product sets for different services
  const productSets = {
    1: [
      // HOME AUTOMATION
      {
        id: 1,
        name: "Smart Lighting Control",
        category: "Lighting Automation",
        background: smartLightsImg,
        color: "#4ecdc4",
      },
      {
        id: 2,
        name: "HVAC Control System",
        category: "Climate Control",
        background: hvacImg,
        color: "#4ecdc4",
      },
      {
        id: 3,
        name: "Smart Lock System",
        category: "Access Control",
        background: smartLockImg,
        color: "#4ecdc4",
      },
      {
        id: 4,
        name: "Living Room Integration",
        category: "Home Automation",
        background: livingRoomImg,
        color: "#4ecdc4",
      },
      {
        id: 5,
        name: "Sensor Lighting",
        category: "Motion Detection",
        background: sensorLightsImg,
        color: "#4ecdc4",
      },
    ],
    2: [
      // HOME THEATERS
      {
        id: 1,
        name: "Home Theater Setup",
        category: "Premium Theater",
        background: homeTheaterImg,
        color: "#6c5ce7",
      },
      {
        id: 2,
        name: "Multiroom AV System",
        category: "Distributed Audio",
        background: multiroomAVImg,
        color: "#6c5ce7",
      },
      {
        id: 3,
        name: "Premium AV Equipment",
        category: "Audio Visual",
        background: avEquipmentImg,
        color: "#6c5ce7",
      },
      {
        id: 4,
        name: "Lighting Control",
        category: "Ambient Lighting",
        background: lightingsImg,
        color: "#6c5ce7",
      },
      {
        id: 5,
        name: "Security Integration",
        category: "Theater Security",
        background: residenceSecurityImg,
        color: "#6c5ce7",
      },
    ],
    3: [
      // LIVING ROOM AV
      {
        id: 1,
        name: "AV Equipment Suite",
        category: "Entertainment System",
        background: avEquipmentImg,
        color: "#45b7d1",
      },
      {
        id: 2,
        name: "Multiroom Audio",
        category: "Distributed Sound",
        background: multiroomAVImg,
        color: "#45b7d1",
      },
      {
        id: 3,
        name: "Residence Integration",
        category: "Whole Home",
        background: residenceImg,
        color: "#45b7d1",
      },
      {
        id: 4,
        name: "Security Integration",
        category: "Home Security",
        background: securityImg,
        color: "#45b7d1",
      },
      {
        id: 5,
        name: "Security System",
        category: "Home Protection",
        background: burglarAlarmImg,
        color: "#45b7d1",
      },
    ],
    4: [
      // COMMERCIAL
      {
        id: 1,
        name: "Office Solutions",
        category: "Commercial Space",
        background: officeImg,
        color: "#ff6b6b",
      },
      {
        id: 2,
        name: "Commercial HVAC",
        category: "Building Climate",
        background: officeHvacImg,
        color: "#ff6b6b",
      },
      {
        id: 3,
        name: "Video Conferencing",
        category: "Meeting Rooms",
        background: vc1Img,
        color: "#ff6b6b",
      },
      {
        id: 4,
        name: "Advanced VC Systems",
        category: "Collaboration",
        background: vc2Img,
        color: "#ff6b6b",
      },
      {
        id: 5,
        name: "Parking Solutions",
        category: "Building Management",
        background: parkingImg,
        color: "#ff6b6b",
      },
    ],
    5: [
      // FENESTRATIONS
      {
        id: 1,
        name: "Smart Window Control",
        category: "Automated Blinds",
        background: smartLightsImg,
        color: "#f9ca24",
      },
      {
        id: 2,
        name: "Garden Integration",
        category: "Outdoor Control",
        background: gardningImg,
        color: "#f9ca24",
      },
      {
        id: 3,
        name: "Motorized Curtains",
        category: "Window Treatments",
        background: multiroomAVImg,
        color: "#f9ca24",
      },
      {
        id: 4,
        name: "Smart Lock Control",
        category: "Access Management",
        background: smartLockImg,
        color: "#f9ca24",
      },
      {
        id: 5,
        name: "Climate Integration",
        category: "Energy Efficiency",
        background: hvacImg,
        color: "#f9ca24",
      },
    ],
  };

  const products = productSets[serviceId] || productSets[1];

  // Get service title for display
  const serviceTitles = {
    1: "HOME AUTOMATION",
    2: "HOME THEATERS",
    3: "LIVING ROOM AV",
    4: "COMMERCIAL",
    5: "FENESTRATIONS",
  };

  const serviceTitle = serviceTitles[serviceId] || "HOME AUTOMATION";

  // Auto scroll functions
  const scrollToSlide = (direction) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const slideWidth = container.clientWidth * 0.4; // Approximate width of one expanded slide
      const currentScroll = container.scrollLeft;
      const targetScroll =
        direction === "left"
          ? currentScroll - slideWidth
          : currentScroll + slideWidth;

      container.scrollTo({
        left: Math.max(0, targetScroll),
        behavior: "smooth",
      });
    }
  };

  const startScrolling = (direction) => {
    if (scrollIntervalRef.current) return;

    setIsScrolling(true);
    scrollToSlide(direction);

    scrollIntervalRef.current = setInterval(() => {
      scrollToSlide(direction);
    }, 800); // Scroll every 800ms when hovering
  };

  const stopScrolling = () => {
    if (scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current);
      scrollIntervalRef.current = null;
    }
    setIsScrolling(false);
  };

  const handleScrollClick = (direction) => {
    stopScrolling(); // Stop any current scrolling
    scrollToSlide(direction);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }
    };
  }, []);

  return (
    <Layout>
      <div className="animated-gradient-bg" id="products">
        <div className="absolute inset-0 z-[999] h-fit">
          <Navbar className="morph-glass !backdrop-blur-0 !py-6 sticky top-0 border-b-2 border-[#b0b0b0]" />
        </div>
        <div className="w-full min-h-screen text-white pt-24 md:pt-32 px-4 md:px-8">
          {/* Header Section */}
          <div className="mb-12 md:mb-16">
            <h1 className="text-4xl md:text-6xl font-maxima-nouva-thin text-gray-300 mb-4">
              EXPLORE OUR
            </h1>
            <h2 className="text-4xl md:text-6xl font-maxima-nouva-bold text-white italic">
              {serviceTitle} PRODUCTS
            </h2>
          </div>

          {/* Products Slider */}
          <div className="relative">
            {/* Left Scroll Zone */}
            <div
              className="absolute left-0 top-0 w-16 h-full z-20 cursor-pointer"
              onMouseEnter={() => startScrolling("left")}
              onMouseLeave={stopScrolling}
              onClick={() => handleScrollClick("left")}
            >
              <div className="w-full h-full bg-gradient-to-r from-black/20 to-transparent flex items-center justify-start pl-2">
                <div
                  className={`text-white/60 text-2xl transition-opacity duration-300 ${
                    isScrolling ? "opacity-100" : "opacity-0 hover:opacity-80"
                  }`}
                >
                  &#8249;
                </div>
              </div>
            </div>

            {/* Right Scroll Zone */}
            <div
              className="absolute right-0 top-0 w-16 h-full z-20 cursor-pointer"
              onMouseEnter={() => startScrolling("right")}
              onMouseLeave={stopScrolling}
              onClick={() => handleScrollClick("right")}
            >
              <div className="w-full h-full bg-gradient-to-l from-black/20 to-transparent flex items-center justify-end pr-2">
                <div
                  className={`text-white/60 text-2xl transition-opacity duration-300 ${
                    isScrolling ? "opacity-100" : "opacity-0 hover:opacity-80"
                  }`}
                >
                  &#8250;
                </div>
              </div>
            </div>

            {/* Products Container */}
            <div
              ref={scrollContainerRef}
              className="flex gap-3 md:gap-4 h-[400px] md:h-[500px] overflow-x-auto overflow-y-hidden scrollbar-hide pb-4"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                scrollBehavior: "smooth",
              }}
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  className={`group relative transition-all duration-700 ease-out cursor-pointer overflow-hidden 
                flex-shrink-0 w-[120px] md:w-[260px]
                hover:w-[400px] md:hover:w-[500px]
                ${
                  hoveredProduct === product.id ? "w-[350px] md:w-[500px]" : ""
                }`}
                  style={{
                    backgroundImage: `url(${product.background})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                  onMouseEnter={() => setHoveredProduct(product.id)}
                >
                  <Link to={`/product?product=${product.id}`}>
                    {/* Overlay */}
                    <div
                      className="absolute inset-0 transition-all duration-700 backdrop-blur-[1px]"
                      style={{
                        background: `linear-gradient(135deg, ${product.color}66, ${product.color}33)`,
                      }}
                    >
                      {/* Content */}
                      {/* Gradient Overlay for Better Text Readability */}
                      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Space */}
          <div className="h-16 md:h-20"></div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
