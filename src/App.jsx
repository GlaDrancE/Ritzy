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
