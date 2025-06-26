import { useState } from "react";
import logo from "../assets/logo.webp";
import { Link } from "react-router-dom";
import gsap from "gsap";

export default function Navbar(props) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function handleMobileMenu() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      gsap.to("#mobileMenu", {
        x: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    } else {
      gsap.to("#mobileMenu", {
        x: "-100%",
        duration: 0.5,
        ease: "power2.in",
      });
    }
  }

  function handleCloseMenu() {
    setIsMobileMenuOpen(false);
    gsap.to("#mobileMenu", {
      x: "-100%",
      duration: 0.5,
      ease: "power2.in",
    });
  }
  return (
    <>
      <nav className="w-screen" {...props}>
        <div className="w-[77%]  py-6 mx-auto flex justify-between items-center">
          <div
            className=" font-maxima-nouva-thin !font-thin text-[1rem] cursor-pointer"
            style={{ letterSpacing: "2px" }}
          >
            {/* Mobile Menu Overlay */}
            <div
              id="mobileMenu"
              className="w-screen h-screen bg-black fixed inset-0 z-50 md:hidden"
              style={{ transform: "translateX(-100%)" }}
            >
              <div className="flex w-full justify-between items-center p-6">
                <Link to={"/"} className="text-3xl font-bold">
                  <img src={logo} className="h-8" alt="" />
                </Link>
                <button
                  onClick={handleCloseMenu}
                  className="text-white text-2xl hover:text-gray-300 transition-colors"
                >
                  ✕
                </button>
              </div>
              <ul className="flex flex-col items-center space-y-8 mt-20">
                <li>
                  <Link
                    to={"/"}
                    className="text-white text-2xl hover:text-gray-300 transition-colors"
                    onClick={handleCloseMenu}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/about"}
                    className="text-white text-2xl hover:text-gray-300 transition-colors"
                    onClick={handleCloseMenu}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/services"}
                    className="text-white text-2xl hover:text-gray-300 transition-colors"
                    onClick={handleCloseMenu}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/contact"}
                    className="text-white text-2xl hover:text-gray-300 transition-colors"
                    onClick={handleCloseMenu}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex nav-links-container relative">
              {/* Hamburger Menu for Mobile */}
              <button
                onClick={handleMobileMenu}
                className="md:hidden flex flex-col space-y-1 p-2"
                aria-label="Toggle mobile menu"
              >
                <span
                  className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                    isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                ></span>
                <span
                  className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                    isMobileMenuOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                    isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                ></span>
              </button>

              {/* Desktop Menu */}
              <div className="hidden md:flex opacity inset-0 transition-all duration-300 text-white">
                <ul className="flex flex-row ">
                  <li>
                    <Link
                      to={"/"}
                      className="text-white hover:text-gray-300 transition-colors"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/about"}
                      className="text-white hover:text-gray-300 transition-colors"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/services"}
                      className="text-white hover:text-gray-300 transition-colors"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/contact"}
                      className="text-white hover:text-gray-300 transition-colors"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Link
            to={"/"}
            className="text-3xl font-bold absolute left-1/2 -translate-x-1/2 invert"
          >
            <img src={logo} className="w-8 h-8" alt="" />
          </Link>
          <Link to={"/contact"}>
            <button className="border-2 hover:bg-black hover:text-white transition-all duration-750 border-black px-4 py-2 text-[12px] rounded-full font-maxima-nouva-thin">
              Get Started
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
}
