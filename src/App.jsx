import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//components
// import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Lenis from "@studio-freight/lenis";
import Contact from "./pages/Contact";
import ContactModel from "./components/ContactModel";
import Products from "./pages/Products";
import { ImageProvider } from "./context/ImageContext";
// import Preloader from "./components/Preloader";
import About from "./pages/About";
import { Services } from "./pages/Services";
import Product from "./pages/Product";

function App() {
  useEffect(() => {
    // Lenis for smooth scroll
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => {
      if (lenis) {
        lenis.destroy();
      }
    };
  }, []);
  useEffect(() => {
    let angle = 0;
    const animate = () => {
      angle += 0.02;

      // Calculate dynamic positions using sin & cos for smooth orbiting
      const pos2X = 60 + 10 * Math.cos(angle);
      const pos2Y = 70 + 10 * Math.sin(angle);

      const pos3X = 80 + 8 * Math.sin(angle * 1.2);
      const pos3Y = 20 + 8 * Math.cos(angle * 1.2);

      const pos4X = 40 + 15 * Math.sin(angle * 0.8);
      const pos4Y = 90 + 10 * Math.cos(angle * 0.8);

      const pos5X = 70 + 5 * Math.cos(angle * 1.5);
      const pos5Y = 40 + 5 * Math.sin(angle * 1.5);

      const atm1X = 30 + 5 * Math.sin(angle);
      const atm1Y = 60 + 5 * Math.cos(angle);

      const atm2X = 80 + 5 * Math.cos(angle * 1.3);
      const atm2Y = 30 + 5 * Math.sin(angle * 1.3);

      const atm3X = 50 + 5 * Math.sin(angle * 0.9);
      const atm3Y = 50 + 5 * Math.cos(angle * 0.9);

      const gradient = `
        radial-gradient(ellipse at 20% 30%, #1f2937 0%, transparent 50%),
        radial-gradient(ellipse at ${pos2X}% ${pos2Y}%, #111827 0%, transparent 50%),
        radial-gradient(ellipse at ${pos3X}% ${pos3Y}%, #f97316 0%, transparent 50%),
        radial-gradient(ellipse at ${pos4X}% ${pos4Y}%, #ea580c 0%, transparent 50%),
        radial-gradient(ellipse at ${pos5X}% ${pos5Y}%, #0f172a 0%, transparent 40%),
        linear-gradient(
          135deg,
          #374151 0%,
          #1f2937 25%,
          #111827 50%,
          #111827 75%,
          #ea580c 100%
        )`;

      const atmosphere = `
        radial-gradient(circle at ${atm1X}% ${atm1Y}%, rgba(31, 41, 55, 0.3) 0%, transparent 60%),
        radial-gradient(circle at ${atm2X}% ${atm2Y}%, rgba(17, 24, 39, 0.4) 0%, transparent 50%),
        radial-gradient(circle at ${atm3X}% ${atm3Y}%, rgba(17, 24, 39, 0.3) 0%, transparent 70%)
      `;
      const animatedGradient = document.querySelectorAll(
        ".animated-gradient-bg"
      );

      animatedGradient.forEach((element) => {
        element.style.backgroundImage = `${gradient}, ${atmosphere}`;
      });

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);
  return (
    <>
      <ImageProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact-model" element={<ContactModel />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product" element={<Product />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </ImageProvider>
    </>
  );
}

export default App;
