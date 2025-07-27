// const Home = () => {
//   return (
//     <>
//       {/* <div className="h-full overflow-y-auto"> */}
//       {/* Section 1 */}
//       <section
//         ref={(el) => (sectionRef.current[0] = el)}
//         className="relative w-full h-screen overflow-auto"
//       >
//         {/* Background Image with Smooth Transition */}
//         <div className="absolute inset-0">
//           {backgroundImages.map((image, index) => (
//             <div
//               key={index}
//               className={`absolute inset-0 bg-cover bg-center bg-no-repeat  ${
//                 index === currentBgIndex ? "opacity-100" : "opacity-0"
//               }`}
//               style={{
//                 backgroundImage: `url(${image})`,
//               }}
//             />
//           ))}
//           {/* Dark overlay for better text readability */}
//           <div className="absolute inset-0 bg-black bg-opacity-50" />
//         </div>

//         {/* Content */}
//         <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 lg:px-20">
//           <div className="max-w-2xl">
//             {/* Subtitle */}
//             <p className="text-gray-300 text-lg md:text-xl mb-6 font-light">
//               Smart Home & Office Automation Solutions
//             </p>

//             {/* Main Heading */}
//             <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-8">
//               Transform Your Space
//               <br />
//               <span className="text-white">with Ritzy Lifestyle</span>
//             </h1>

//             {/* Description */}
//             <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-xl leading-relaxed">
//               Discover seamless comfort, security, and entertainment with Ritzy
//               Lifestyle&apos;s cutting-edge automation systems. Based in Hebbal,
//               Bangalore, we create personalized, future-proof solutions for
//               homes and businesses.
//             </p>

//             {/* CTA Button */}
//             <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl">
//               Get a Free Consultation
//             </button>
//           </div>
//         </div>

//         {/* Bottom Right Control */}
//         <div className="absolute bottom-8 right-8 flex flex-col items-center space-y-4">
//           <p className="text-white text-sm font-light text-center max-w-48">
//             Turn on the lights of your homes with click of a button
//           </p>

//           {/* Power Button */}
//           <button
//             onClick={handleImageChange}
//             className="group relative w-16 h-16 bg-transparent border-2 border-red-500 rounded-full flex items-center justify-center hover:bg-red-500 transition-all duration-300 shadow-lg hover:shadow-red-500/30 z-[9999]"
//           >
//             <Power
//               size={24}
//               className="text-red-500 group-hover:text-white transition-colors duration-300"
//             />

//             {/* Glowing effect */}
//             <div className="absolute inset-0 rounded-full border-2 border-red-500 animate-pulse opacity-75" />
//           </button>
//         </div>
//       </section>
//     </>
//   );
// };
