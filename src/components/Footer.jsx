// import { useGSAP } from "@gsap/react";
// import { useRef } from "react";
import { HashLink } from "react-router-hash-link";
import logo from "../assets/logo.webp";
import { Link } from "react-router-dom";
export default function Footer({ className }) {
  // const footerRef = useRef(null);
  // useGSAP(() => {
  //   const footer = footerRef.current;
  // const timeline = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: footer,
  //     start: "top top",
  //     end: "bottom top",
  //     pin: true,
  //     scrub: true,
  //     pinSpacing: false,
  //   },
  // });
  // });
  return (
    <footer
      className={`w-full md:relative md:mt-0 mt-12 bottom-0 left-0 text-white p-4 ${className}`}
    >
      <div className="grid md:grid-cols-4">
        <div className="w-full h-full">
          <div className="flex flex-col justify-center md:p-12">
            <div className="w-24 h-24 mb-12">
              <img src={logo} className="w-full h-full " alt="" />
            </div>
            <div className="footer-logo-heading font-maxima-nouva text-4xl">
              Ritzy
            </div>
          </div>
        </div>
        <div className="col-span-3 md:p-12">
          <div className="grid md:grid-cols-2 ">
            <div className="flex md:justify-end w-full ">
              <ul className={`footer-links`}>
                <li>
                  <HashLink to={"/about#about"}>About</HashLink>
                </li>
                <li>
                  <Link to={"/services"}>Services</Link>
                </li>
                <li>
                  <Link to={"/contact"}>Contact</Link>
                </li>
                <li>
                  <Link to={"/"}>Our Work</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col md:items-end mt-8">
              <div className="md:w-1/2 font-maxima-nouva mb-12">
                Ready to give your space the upgrade it deserves? Let’s talk.
              </div>
              <div className="w-1/2 text-left">
                <Link to={"/contact"} className="font-maxima-nouva">
                  Let's Connect <span>&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-4 md:hidden">
        <Link to={"/"}>Instagram</Link> . <Link to={"/"}>Facebook</Link> .{" "}
        <Link to={"/"}>LinkedIn</Link>
      </div>
      <span className="w-full h-[1px] bg-[#333333] block" />
      <div className="w-full md:p-4 py-4 footer-social-links md:flex justify-between">
        <div className="font-uber-move text-[0.8rem]">
          © 2024 Ritzy Design. All Rights Reserved.
        </div>
        <div>
          <Link to={"/"}>Privacy Policy</Link> .{" "}
          <Link to={"/"}>Terms & Conditions</Link>
        </div>
        <div className="md:block hidden">
          <Link to={"/"}>Instagram</Link> . <Link to={"/"}>Facebook</Link> .{" "}
          <Link to={"/"}>LinkedIn</Link>
        </div>
      </div>
    </footer>
  );
}
