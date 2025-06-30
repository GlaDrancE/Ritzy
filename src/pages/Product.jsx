import Layout from "./Layout";
import Navbar from "../components/Navbar";
import { MoveRight, MoveLeft } from "lucide-react";
import Footer from "../components/Footer";
import { useState } from "react";

export default function Product() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 4; // Total number of slides

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <Layout>
      <Navbar />

      {/* Hero Section */}
      <div className="product-hero-section relative min-h-screen bg-black text-white overflow-hidden">
        {/* Background with fade lines and transparent text */}
        <div className="absolute inset-0 opacity-50">
          {/* <div className="product-bg-text">
            <span className="product-name-bg">MODERN WATCH STYLE</span>
          </div> */}
          <div className="fade-lines-container">
            {/* Horizontal Lines */}
            <div className="fade-line fade-line-1"></div>
            <div className="fade-line fade-line-2"></div>
            <div className="fade-line fade-line-3"></div>
            <div className="fade-line fade-line-4"></div>
            <div className="fade-line fade-line-5"></div>

            {/* Vertical Lines */}
            <div className="fade-line-vertical fade-line-vertical-1"></div>
            <div className="fade-line-vertical fade-line-vertical-2"></div>
            <div className="fade-line-vertical fade-line-vertical-3"></div>
            <div className="fade-line-vertical fade-line-vertical-4"></div>
            <div className="fade-line-vertical fade-line-vertical-5"></div>
          </div>
        </div>
        <div className="main-hero-content pt-8 flex justify-center">
          <div>
            <h1 className="text-9xl">Modern Watch Style</h1>
            <p className="text-gray-400 font-maxima-nouva-thin text-lg lg:text-xl mt-6 italic">
              Shop the Latest Watch Trends
            </p>
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center justify-between min-h-screen h-screen pt-0">
          {/* Left Side Content */}
          <div className="w-full lg:w-1/3 space-y-8 min-h-full flex flex-col justify-end">
            {/* Shop Elegant Section */}
            <div className="shop-elegant-section relative bg-gray-800/50 rounded-2xl overflow-hidden backdrop-blur-sm h-32 lg:w-3/4 ">
              <img
                src={new URL("../assets/imageGrid/1.jpg", import.meta.url).href}
                alt="Elegant Wristwatches"
                className="absolute inset-0 w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>
              <div className="relative z-10 p-4 h-full flex items-center justify-between">
                <div>
                  <h3 className="text-white font-maxima-nouva text-lg font-semibold">
                    Shop Elegant
                  </h3>
                  <p className="text-gray-200 font-maxima-nouva-thin text-sm">
                    Wristwatches
                  </p>
                </div>
                <div className="play-button-container">
                  <button className="play-button w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:scale-110 transition-transform duration-300">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            {/* Stats Section */}
            <div className="gap-7 flex items-end">
              <div className="space-x-2  stat-item">
                <div className="text-3xl lg:text-4xl font-maxima-nouva-bold">
                  2.5K+
                </div>
                <div className="text-gray-400 text-sm font-maxima-nouva-thin">
                  Products
                </div>
              </div>
              <div className="stat-item">
                <div className="text-3xl lg:text-4xl font-maxima-nouva-bold">
                  12+
                </div>
                <div className="text-gray-400 text-sm font-maxima-nouva-thin">
                  Year Experience
                </div>
              </div>
              <div className="stat-item">
                <div className="text-3xl lg:text-4xl font-maxima-nouva-bold">
                  400+
                </div>
                <div className="text-gray-400 text-sm font-maxima-nouva-thin">
                  Clients
                </div>
              </div>
            </div>
          </div>

          {/* Center Content - Main Hero */}
          <div className="w-full lg:w-1/3 text-center space-y-6 my-8 lg:my-0">
            {/* Watch Image */}
            <div className="watch-container mt-12">
              <div className="watch-image-wrapper relative">
                {/* Placeholder for watch image - you can replace with actual image */}
                <div className="watch-placeholder w-64 h-64 lg:w-80 lg:h-80 mx-auto bg-gradient-to-br from-gray-700 via-gray-800 to-black rounded-full flex items-center justify-center border-4 border-gray-600 shadow-2xl">
                  <div className="inner-watch w-48 h-48 lg:w-60 lg:h-60 bg-gradient-to-br from-gray-900 to-black rounded-full flex items-center justify-center">
                    <div className="watch-face w-32 h-32 lg:w-40 lg:h-40 bg-black rounded-full border-2 border-gray-500 flex items-center justify-center">
                      <div className="watch-hands">
                        <div className="hour-hand w-1 h-8 bg-white absolute"></div>
                        <div className="minute-hand w-0.5 h-12 bg-white absolute"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-radial from-blue-500/20 via-purple-500/10 to-transparent rounded-full blur-xl"></div>
              </div>
            </div>
          </div>

          {/* Right Side Content */}
          <div className="w-full lg:w-1/3 flex justify-end items-start h-full">
            <div className="collection-card bg-gradient-to-br from-pink-500/20 via-red-500/20 to-orange-500/20 backdrop-blur-sm rounded-2xl p-1 max-w-xs flex gap-4">
              <div className="flex items-center justify-between">
                <img
                  src={
                    new URL(
                      "../assets/images/products/hvac.jpg",
                      import.meta.url
                    ).href
                  }
                  alt=""
                  className="rounded-xl"
                />
              </div>
              <div className="flex flex-col justify-end">
                <div className=" bg-white absolute top-0 right-0 rounded-full p-2 m-1">
                  <MoveRight className="text-black" />
                </div>
                <div>
                  <h3 className="text-white font-maxima-nouva text-lg mb-2">
                    Our
                  </h3>
                  <h3 className="text-white font-maxima-nouva-bold text-xl">
                    Collection
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="scroll-indicator w-12 h-12 border-2 border-white/30 rounded-full flex items-center justify-center animate-bounce">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
              <path d="M7 10l5 5 5-5z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="product-details-section bg-gray-50 py-16 lg:py-24 px-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Side - Categories */}
            <div className="w-full lg:w-1/2 space-y-8">
              {/* New Arrivals */}
              <div className="category-item group cursor-pointer">
                <div className="flex items-center justify-between pb-4 border-b border-gray-300 group-hover:border-gray-600 transition-colors duration-300">
                  <div className="flex items-center space-x-4">
                    <span className="text-sm font-maxima-nouva-thin text-gray-500">
                      01
                    </span>
                    <h3 className="text-2xl lg:text-3xl font-maxima-nouva text-gray-800">
                      New Arrivals
                    </h3>
                  </div>
                  <div className="arrow-icon transform group-hover:translate-x-2 transition-transform duration-300">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                <p className="text-gray-600 font-maxima-nouva-thin text-sm lg:text-base mt-4 leading-relaxed">
                  Provide full service to interior design that or only pays
                  attention to appearance, but also usability.
                </p>
              </div>

              {/* Best Sellers */}
              <div className="category-item group cursor-pointer">
                <div className="flex items-center justify-between pb-4 border-b border-gray-300 group-hover:border-gray-600 transition-colors duration-300">
                  <div className="flex items-center space-x-4">
                    <span className="text-sm font-maxima-nouva-thin text-gray-500">
                      02
                    </span>
                    <h3 className="text-2xl lg:text-3xl font-maxima-nouva text-gray-800">
                      Best Sellers
                    </h3>
                  </div>
                  <div className="arrow-icon transform group-hover:translate-x-2 transition-transform duration-300">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                <p className="text-gray-600 font-maxima-nouva-thin text-sm lg:text-base mt-4 leading-relaxed">
                  We are always open to counseling with clients, and this
                  doesn&apos;t cost anything.
                </p>
              </div>

              {/* Most Popular */}
              <div className="category-item group cursor-pointer">
                <div className="flex items-center justify-between pb-4 border-b border-gray-300 group-hover:border-gray-600 transition-colors duration-300">
                  <div className="flex items-center space-x-4">
                    <span className="text-sm font-maxima-nouva-thin text-gray-500">
                      03
                    </span>
                    <h3 className="text-2xl lg:text-3xl font-maxima-nouva text-gray-800">
                      Most Popular
                    </h3>
                  </div>
                  <div className="arrow-icon transform group-hover:translate-x-2 transition-transform duration-300">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                <p className="text-gray-600 font-maxima-nouva-thin text-sm lg:text-base mt-4 leading-relaxed">
                  Not only counseling about interiors, we are also very open to
                  counseling about constructions, materials, etc.
                </p>
              </div>

              {/* Luxury */}
              <div className="category-item group cursor-pointer">
                <div className="flex items-center justify-between pb-4 border-b border-gray-300 group-hover:border-gray-600 transition-colors duration-300">
                  <div className="flex items-center space-x-4">
                    <span className="text-sm font-maxima-nouva-thin text-gray-500">
                      04
                    </span>
                    <h3 className="text-2xl lg:text-3xl font-maxima-nouva text-gray-800">
                      Luxury
                    </h3>
                  </div>
                  <div className="arrow-icon transform group-hover:translate-x-2 transition-transform duration-300">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                <p className="text-gray-600 font-maxima-nouva-thin text-sm lg:text-base mt-4 leading-relaxed">
                  Provide full service to interior design that or only pays
                  attention to appearance, but also usability.
                </p>
              </div>
            </div>

            {/* Right Side - Featured Watch */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <div className="featured-watch-container relative">
                {/* Background Card */}
                <div className="bg-gradient-to-br from-pink-100 via-orange-50 to-pink-100 rounded-3xl p-8 lg:p-12 shadow-lg">
                  {/* Watch Image Container */}
                  <div className="watch-display-container relative bg-black rounded-2xl overflow-hidden">
                    {/* Watch Label */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="text-white text-sm font-maxima-nouva-thin bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
                        Classic Watch
                      </span>
                    </div>

                    {/* Watch Image */}
                    <div className="relative w-80 h-80 lg:w-96 lg:h-96 flex items-center justify-center">
                      <img
                        src={
                          new URL("../assets/imageGrid/2.jpg", import.meta.url)
                            .href
                        }
                        alt="Classic Watch"
                        className="w-full h-full object-cover"
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                    </div>

                    {/* Watch Details Overlay */}
                    <div className="absolute bottom-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                        <div className="text-xs text-gray-600 font-maxima-nouva-thin">
                          Starting from
                        </div>
                        <div className="text-lg font-maxima-nouva-bold text-gray-800">
                          $299
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full"></div>
                </div>

                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-pink-200 to-orange-200 rounded-full opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Details Section */}
      <div className="brand-details-section bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl lg:text-5xl font-maxima-nouva-bold text-gray-900">
              See Want&apos;s New
            </h2>
            <div className="flex items-center space-x-2">
              <span className="text-lg font-maxima-nouva text-gray-600 italic underline cursor-pointer hover:text-gray-900 transition-colors">
                Shop a
              </span>
            </div>
          </div>

          {/* Product Grid Slider */}
          <div className="product-slider-container relative overflow-hidden mb-8">
            <div
              className="product-grid flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {/* Slide 1 */}
              <div className="slide flex-shrink-0 w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="product-card group cursor-pointer">
                    <div className="relative bg-black rounded-3xl overflow-hidden aspect-square">
                      <div className="absolute top-4 left-4 z-10">
                        <div className="discount-badge bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm font-maxima-nouva-bold text-gray-900">
                            25%
                          </span>
                        </div>
                      </div>
                      <div className="absolute top-4 right-4 z-10">
                        <button className="wishlist-btn w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            strokeWidth="2"
                          >
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                          </svg>
                        </button>
                      </div>
                      <div className="watch-image-container relative w-full h-full flex items-center justify-center p-8">
                        <img
                          src={
                            new URL(
                              "../assets/imageGrid/3.jpg",
                              import.meta.url
                            ).href
                          }
                          alt="Automatic Watch"
                          className="w-full h-full object-contain filter brightness-110"
                        />
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <span className="text-white font-maxima-nouva text-lg">
                          Automatic Watch
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="product-card group cursor-pointer">
                    <div className="relative bg-black rounded-3xl overflow-hidden aspect-square">
                      <div className="absolute top-4 right-4 z-10">
                        <button className="wishlist-btn w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="white"
                            stroke="white"
                            strokeWidth="2"
                          >
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                          </svg>
                        </button>
                      </div>
                      <div className="watch-image-container relative w-full h-full flex items-center justify-center p-8">
                        <img
                          src={
                            new URL(
                              "../assets/imageGrid/4.jpg",
                              import.meta.url
                            ).href
                          }
                          alt="Automatic Watch"
                          className="w-full h-full object-contain filter brightness-110"
                        />
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <span className="text-white font-maxima-nouva text-lg">
                          Automatic Watch
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="product-card group cursor-pointer">
                    <div className="relative bg-black rounded-3xl overflow-hidden aspect-square">
                      <div className="absolute top-4 left-4 z-10">
                        <div className="discount-badge bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm font-maxima-nouva-bold text-gray-900">
                            25%
                          </span>
                        </div>
                      </div>
                      <div className="absolute top-4 right-4 z-10">
                        <button className="wishlist-btn w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            strokeWidth="2"
                          >
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                          </svg>
                        </button>
                      </div>
                      <div className="watch-image-container relative w-full h-full flex items-center justify-center p-8">
                        <img
                          src={
                            new URL(
                              "../assets/imageGrid/5.jpg",
                              import.meta.url
                            ).href
                          }
                          alt="Automatic Watch"
                          className="w-full h-full object-contain filter brightness-110"
                        />
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <span className="text-white font-maxima-nouva text-lg">
                          Automatic Watch
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="product-card group cursor-pointer">
                    <div className="relative bg-black rounded-3xl overflow-hidden aspect-square">
                      <div className="absolute top-4 right-4 z-10">
                        <button className="wishlist-btn w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            strokeWidth="2"
                          >
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                          </svg>
                        </button>
                      </div>
                      <div className="watch-image-container relative w-full h-full flex items-center justify-center p-8">
                        <img
                          src={
                            new URL(
                              "../assets/imageGrid/6.jpg",
                              import.meta.url
                            ).href
                          }
                          alt="Automatic Watch"
                          className="w-full h-full object-contain filter brightness-110"
                        />
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <span className="text-white font-maxima-nouva text-lg">
                          Automatic Watch
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide 2 */}
              <div className="slide flex-shrink-0 w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="product-card group cursor-pointer">
                    <div className="relative bg-black rounded-3xl overflow-hidden aspect-square">
                      <div className="watch-image-container relative w-full h-full flex items-center justify-center p-8">
                        <img
                          src={
                            new URL(
                              "../assets/imageGrid/7.jpg",
                              import.meta.url
                            ).href
                          }
                          alt="Sport Watch"
                          className="w-full h-full object-contain filter brightness-110"
                        />
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <span className="text-white font-maxima-nouva text-lg">
                          Sport Watch
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="product-card group cursor-pointer">
                    <div className="relative bg-black rounded-3xl overflow-hidden aspect-square">
                      <div className="watch-image-container relative w-full h-full flex items-center justify-center p-8">
                        <img
                          src={
                            new URL(
                              "../assets/imageGrid/1.jpg",
                              import.meta.url
                            ).href
                          }
                          alt="Classic Watch"
                          className="w-full h-full object-contain filter brightness-110"
                        />
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <span className="text-white font-maxima-nouva text-lg">
                          Classic Watch
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="product-card group cursor-pointer">
                    <div className="relative bg-black rounded-3xl overflow-hidden aspect-square">
                      <div className="watch-image-container relative w-full h-full flex items-center justify-center p-8">
                        <img
                          src={
                            new URL(
                              "../assets/imageGrid/2.jpg",
                              import.meta.url
                            ).href
                          }
                          alt="Digital Watch"
                          className="w-full h-full object-contain filter brightness-110"
                        />
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <span className="text-white font-maxima-nouva text-lg">
                          Digital Watch
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="product-card group cursor-pointer">
                    <div className="relative bg-black rounded-3xl overflow-hidden aspect-square">
                      <div className="watch-image-container relative w-full h-full flex items-center justify-center p-8">
                        <img
                          src={
                            new URL(
                              "../assets/imageGrid/3.jpg",
                              import.meta.url
                            ).href
                          }
                          alt="Luxury Watch"
                          className="w-full h-full object-contain filter brightness-110"
                        />
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <span className="text-white font-maxima-nouva text-lg">
                          Luxury Watch
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide 3 */}
              <div className="slide flex-shrink-0 w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="product-card group cursor-pointer">
                    <div className="relative bg-black rounded-3xl overflow-hidden aspect-square">
                      <div className="watch-image-container relative w-full h-full flex items-center justify-center p-8">
                        <img
                          src={
                            new URL(
                              "../assets/imageGrid/4.jpg",
                              import.meta.url
                            ).href
                          }
                          alt="Business Watch"
                          className="w-full h-full object-contain filter brightness-110"
                        />
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <span className="text-white font-maxima-nouva text-lg">
                          Business Watch
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="product-card group cursor-pointer">
                    <div className="relative bg-black rounded-3xl overflow-hidden aspect-square">
                      <div className="watch-image-container relative w-full h-full flex items-center justify-center p-8">
                        <img
                          src={
                            new URL(
                              "../assets/imageGrid/5.jpg",
                              import.meta.url
                            ).href
                          }
                          alt="Casual Watch"
                          className="w-full h-full object-contain filter brightness-110"
                        />
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <span className="text-white font-maxima-nouva text-lg">
                          Casual Watch
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="product-card group cursor-pointer">
                    <div className="relative bg-black rounded-3xl overflow-hidden aspect-square">
                      <div className="watch-image-container relative w-full h-full flex items-center justify-center p-8">
                        <img
                          src={
                            new URL(
                              "../assets/imageGrid/6.jpg",
                              import.meta.url
                            ).href
                          }
                          alt="Fashion Watch"
                          className="w-full h-full object-contain filter brightness-110"
                        />
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <span className="text-white font-maxima-nouva text-lg">
                          Fashion Watch
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="product-card group cursor-pointer">
                    <div className="relative bg-black rounded-3xl overflow-hidden aspect-square">
                      <div className="watch-image-container relative w-full h-full flex items-center justify-center p-8">
                        <img
                          src={
                            new URL(
                              "../assets/imageGrid/7.jpg",
                              import.meta.url
                            ).href
                          }
                          alt="Premium Watch"
                          className="w-full h-full object-contain filter brightness-110"
                        />
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <span className="text-white font-maxima-nouva text-lg">
                          Premium Watch
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide 4 */}
              <div className="slide flex-shrink-0 w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="product-card group cursor-pointer">
                    <div className="relative bg-black rounded-3xl overflow-hidden aspect-square">
                      <div className="watch-image-container relative w-full h-full flex items-center justify-center p-8">
                        <img
                          src={
                            new URL(
                              "../assets/imageGrid/1.jpg",
                              import.meta.url
                            ).href
                          }
                          alt="Vintage Watch"
                          className="w-full h-full object-contain filter brightness-110"
                        />
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <span className="text-white font-maxima-nouva text-lg">
                          Vintage Watch
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="product-card group cursor-pointer">
                    <div className="relative bg-black rounded-3xl overflow-hidden aspect-square">
                      <div className="watch-image-container relative w-full h-full flex items-center justify-center p-8">
                        <img
                          src={
                            new URL(
                              "../assets/imageGrid/2.jpg",
                              import.meta.url
                            ).href
                          }
                          alt="Modern Watch"
                          className="w-full h-full object-contain filter brightness-110"
                        />
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <span className="text-white font-maxima-nouva text-lg">
                          Modern Watch
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="product-card group cursor-pointer">
                    <div className="relative bg-black rounded-3xl overflow-hidden aspect-square">
                      <div className="watch-image-container relative w-full h-full flex items-center justify-center p-8">
                        <img
                          src={
                            new URL(
                              "../assets/imageGrid/3.jpg",
                              import.meta.url
                            ).href
                          }
                          alt="Elite Watch"
                          className="w-full h-full object-contain filter brightness-110"
                        />
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <span className="text-white font-maxima-nouva text-lg">
                          Elite Watch
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="product-card group cursor-pointer">
                    <div className="relative bg-black rounded-3xl overflow-hidden aspect-square">
                      <div className="watch-image-container relative w-full h-full flex items-center justify-center p-8">
                        <img
                          src={
                            new URL(
                              "../assets/imageGrid/4.jpg",
                              import.meta.url
                            ).href
                          }
                          alt="Designer Watch"
                          className="w-full h-full object-contain filter brightness-110"
                        />
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <span className="text-white font-maxima-nouva text-lg">
                          Designer Watch
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between">
            {/* Pagination Dots */}
            <div className="flex items-center space-x-3">
              {[0, 1, 2, 3].map((index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`pagination-dot w-3 h-3 rounded-full transition-colors ${
                    currentSlide === index
                      ? "bg-gray-900"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center space-x-3">
              {/* Previous Button */}
              {currentSlide > 0 && (
                <button
                  onClick={prevSlide}
                  className="nav-arrow-btn w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 group"
                >
                  <MoveLeft className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" />
                </button>
              )}

              {/* Next Button */}
              <button
                onClick={nextSlide}
                className="nav-arrow-btn w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 group"
              >
                <MoveRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </Layout>
  );
}
