import React, { useEffect } from "react";

import logo from "../assets/logo.webp";
import { Link } from "react-router-dom";
import gsap from "gsap";
import ComposePlus from "../Icons/ComposePlus";

export default function Navbar(props) {
  function handleMobileMenu() {
    // if (window.innerWidth >= 800) return;
    gsap.to("#mobileMenu", {
      x: 0,
      // duration: 0.7,
      // ease: "power4.in",
    });
  }
  function handleCloseMenu() {
    if (window.innerWidth >= 800) return;
    gsap.to("#mobileMenu", {
      x: -360,
      duration: 0.7,
      ease: "power4.in",
    });
  }
  // useEffect(() => {
  //   gsap.to("#nav-close", {
  //     rotateZ: 360,
  //     repeat: -1,
  //     duration: 0.2,
  //   });
  // }, []);
  return (
    <>
      <nav className="w-screen" {...props}>
        <div className="w-[77%]  py-6 mx-auto flex justify-between items-center">
          <div
            className=" font-maxima-nouva-thin !font-thin text-[1rem] cursor-pointer md:p-4"
            style={{ letterSpacing: "2px" }}
          >
            <div
              id="mobileMenu"
              className="w-screen h-screen bg-white fixed inset-0 z-50 "
              style={{ transform: "translate(-100%, 0)" }}
            >
              <div className="flex w-full justify-center my-2 relative">
                <Link to={"/"} className="text-3xl font-bold my-2">
                  <img src={logo} className=" h-8" alt="" />
                </Link>
                <div
                  id="nav-close"
                  className="rotate-45 absolute right-0 top-2"
                  style={{ transformOrigin: "center" }}
                  onClick={handleCloseMenu}
                >
                  <ComposePlus />
                </div>
              </div>
              <ul>
                <li>
                  <Link to={"/"} className="text-black">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to={"/services"} className="text-black">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to={"/about"} className="text-black">
                    About
                  </Link>
                </li>
                <li>
                  <Link to={"/contact"} className="text-black">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex peer nav-links-container relative ">
              <div onClick={handleMobileMenu} className="md:hidden">
                MENU
              </div>
              <div className="md:block hidden">MENU</div>
              <div className=" opacity-0 scale-x-0 nav-links  absolute inset-0 flex left-11 transition-all duration-300">
                <ul>
                  <li>
                    <Link to={"/"} className="text-white">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to={"/about"} className="text-white">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to={"/services"} className="text-white">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link to={"/contact"} className="text-white">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <span className="nav-line transition-all w-full h-[1px] bg-black block"></span>
          </div>
          <Link to={"/"} className="text-3xl font-bold">
            <img src={logo} className="w-8 h-8" alt="" />
          </Link>
          <button className="border-2 hover:bg-black hover:text-white transition-all duration-750 border-black px-4 py-2 text-[12px] rounded-full font-maxima-nouva-thin">
            Get Started
          </button>
        </div>
      </nav>
    </>
  );
}
