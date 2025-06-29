import { useState, useRef, useEffect } from "react";
import Navbar from "../components/Navbar";

export const Products = () => {
  const [hoveredProduct, setHoveredProduct] = useState(1); // Start with first product expanded
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollContainerRef = useRef(null);
  const scrollIntervalRef = useRef(null);

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

  const products = [
    {
      id: 1,
      name: "HVAC SYSTEMS",
      category: "Climate Control",
      background: hvacImg,
      color: "#ff6b6b",
    },
    {
      id: 2,
      name: "AV EQUIPMENT",
      category: "Audio Visual",
      background: avEquipmentImg,
      color: "#4ecdc4",
    },
    {
      id: 3,
      name: "SECURITY SYSTEMS",
      category: "Home Security",
      background: securityImg,
      color: "#45b7d1",
    },
    {
      id: 4,
      name: "SMART LIGHTING",
      category: "Automation",
      background: smartLightsImg,
      color: "#f9ca24",
    },
    {
      id: 5,
      name: "MULTIROOM AV",
      category: "Entertainment",
      background: multiroomAVImg,
      color: "#6c5ce7",
    },
    {
      id: 6,
      name: "SMART LOCKS",
      category: "Access Control",
      background: smartLockImg,
      color: "#ff9ff3",
    },
  ];

  // Auto scroll functions
  const startScrolling = (direction) => {
    if (scrollIntervalRef.current) return;

    setIsScrolling(true);
    scrollIntervalRef.current = setInterval(() => {
      if (scrollContainerRef.current) {
        const scrollAmount = direction === "left" ? -5 : 5;
        scrollContainerRef.current.scrollLeft += scrollAmount;
      }
    }, 16); // ~60fps
  };

  const stopScrolling = () => {
    if (scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current);
      scrollIntervalRef.current = null;
    }
    setIsScrolling(false);
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
    <>
      <Navbar />
      <div className="w-full min-h-screen bg-black text-white pt-24 md:pt-32 px-4 md:px-8">
        {/* Header Section */}
        <div className="mb-12 md:mb-16">
          <h1 className="text-4xl md:text-6xl font-maxima-nouva-thin text-gray-300 mb-4">
            EXPLORE OUR
          </h1>
          <h2 className="text-4xl md:text-6xl font-maxima-nouva-bold text-white italic">
            PRESTIGIOUS PRODUCTS
          </h2>
        </div>

        {/* Products Slider */}
        <div className="relative">
          {/* Left Scroll Zone */}
          <div
            className="absolute left-0 top-0 w-16 h-full z-20 cursor-pointer"
            onMouseEnter={() => startScrolling("left")}
            onMouseLeave={stopScrolling}
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
                className={`group relative transition-all duration-700 ease-out cursor-pointer overflow-hidden rounded-lg 
                flex-shrink-0 w-[120px] md:w-[160px]
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
                {/* Overlay */}
                <div
                  className="absolute inset-0 transition-all duration-700 backdrop-blur-[1px]"
                  style={{
                    background: `linear-gradient(135deg, ${product.color}66, ${product.color}33)`,
                  }}
                >
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                    {/* Product Name - Always Visible */}
                    <h3
                      className={`font-uber-move-bold text-white mb-2 transition-all duration-700
                      ${
                        hoveredProduct === product.id
                          ? "text-2xl md:text-3xl opacity-100"
                          : "text-lg md:text-xl opacity-90 transform -rotate-90 origin-bottom-left absolute bottom-4 left-4 whitespace-nowrap"
                      }`}
                      style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}
                    >
                      {product.name}
                    </h3>

                    {/* Product Details - Show on Hover */}
                    <div
                      className={`transition-all duration-700 delay-200
                      ${
                        hoveredProduct === product.id
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4"
                      }`}
                    >
                      <p
                        className="text-white/90 text-base md:text-lg mb-4 font-maxima-nouva"
                        style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)" }}
                      >
                        {product.category}
                      </p>

                      <div className="flex gap-3">
                        <button className="bg-white/20 text-white border border-white/50 px-4 py-2 rounded-lg font-medium cursor-pointer transition-all duration-300 backdrop-blur-md text-sm hover:bg-white hover:text-black">
                          View Details
                        </button>
                        <button className="bg-white text-black px-4 py-2 rounded-lg font-medium cursor-pointer transition-all duration-300 text-sm hover:bg-gray-200">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Gradient Overlay for Better Text Readability */}
                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Space */}
        <div className="h-16 md:h-20"></div>
      </div>
    </>
  );
};
