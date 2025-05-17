import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Products = () => {
  const officeRef = useRef(null);
  const residentialRef = useRef(null);
  const transitionRef = useRef(null);
  const [activePage, setActivePage] = useState("main");
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    gsap.set([officeRef.current, residentialRef.current], {
      width: "50%",
    });
  }, []);

  const handleMouseEnter = (section) => {
    if (transitioning) return;

    if (section === "office") {
      gsap.to(officeRef.current, {
        width: "75%",
        duration: 0.5,
        ease: "power2.out",
      });
      gsap.to(residentialRef.current, {
        width: "25%",
        duration: 0.5,
        ease: "power2.out",
      });
    } else {
      gsap.to(residentialRef.current, {
        width: "75%",
        duration: 0.5,
        ease: "power2.out",
      });
      gsap.to(officeRef.current, {
        width: "25%",
        duration: 0.5,
        ease: "power2.out",
      });
    }
  };

  const handleMouseLeave = () => {
    if (transitioning) return;

    gsap.to([officeRef.current, residentialRef.current], {
      width: "50%",
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const handleSectionClick = async (section) => {
    if (transitioning) return;
    setTransitioning(true);

    const clickedRef = section === "office" ? officeRef : residentialRef;
    const bounds = clickedRef.current.getBoundingClientRect();

    // Set initial position of transition overlay
    gsap.set(transitionRef.current, {
      x: bounds.x,
      y: bounds.y,
      width: bounds.width,
      height: bounds.height,
      backgroundColor: section === "office" ? "#111827" : "#1e3a8a",
      display: "block",
    });

    // Timeline for zoom transition
    const tl = gsap.timeline();

    // First zoom out slightly
    await tl
      .to(clickedRef.current, {
        scale: 0.9,
        duration: 0.3,
        ease: "power2.inOut",
      })
      // Then expand overlay to full screen
      .to(transitionRef.current, {
        x: 0,
        y: 0,
        width: "100%",
        height: "100%",
        duration: 0.5,
        ease: "power2.inOut",
      })
      .call(() => {
        setActivePage(section);
        setTransitioning(false);
      });
  };

  const handleBack = async () => {
    if (transitioning) return;
    setTransitioning(true);

    const tl = gsap.timeline();

    await tl
      .to(transitionRef.current, {
        scale: 0.9,
        duration: 0.3,
        ease: "power2.inOut",
      })
      .to(transitionRef.current, {
        scale: 1,
        x: "100%",
        duration: 0.5,
        ease: "power2.inOut",
      })
      .call(() => {
        setActivePage("main");
        setTransitioning(false);
        gsap.set(transitionRef.current, { display: "none", x: 0, scale: 1 });
      });
  };

  if (activePage === "office") {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-8">
        <button
          onClick={handleBack}
          className="mb-8 px-4 py-2 bg-gray-800 rounded hover:bg-gray-700 transition-colors"
        >
          Back to Main
        </button>
        <h1 className="text-4xl font-bold mb-6">Office Space Details</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Features</h2>
            <p>Modern workspace with state-of-the-art amenities</p>
            <p>24/7 access and security</p>
            <p>High-speed internet and meeting rooms</p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Location</h2>
            <p>Prime downtown location</p>
            <p>Easy access to public transport</p>
            <p>Nearby restaurants and cafes</p>
          </div>
        </div>
      </div>
    );
  }

  if (activePage === "residential") {
    return (
      <div className="min-h-screen bg-blue-900 text-white p-8">
        <button
          onClick={handleBack}
          className="mb-8 px-4 py-2 bg-blue-800 rounded hover:bg-blue-700 transition-colors"
        >
          Back to Main
        </button>
        <h1 className="text-4xl font-bold mb-6">Residential Properties</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Amenities</h2>
            <p>Luxury finishes and modern appliances</p>
            <p>Swimming pool and fitness center</p>
            <p>24/7 concierge service</p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Community</h2>
            <p>Peaceful neighborhood</p>
            <p>Community events and spaces</p>
            <p>Parks and recreation nearby</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div
        ref={officeRef}
        className="relative h-full bg-gray-900 transition-all cursor-pointer"
        onMouseEnter={() => handleMouseEnter("office")}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleSectionClick("office")}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Office</h2>
            <p className="text-gray-300 px-8">
              Click to explore our premium office spaces.
            </p>
          </div>
        </div>
      </div>

      <div
        ref={residentialRef}
        className="relative h-full bg-blue-900 transition-all cursor-pointer"
        onMouseEnter={() => handleMouseEnter("residential")}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleSectionClick("residential")}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Residential</h2>
            <p className="text-gray-300 px-8">
              Click to discover our residential properties.
            </p>
          </div>
        </div>
      </div>

      {/* Transition overlay */}
      <div
        ref={transitionRef}
        className="fixed top-0 left-0 hidden pointer-events-none"
      />
    </div>
  );
};

export default Products;
