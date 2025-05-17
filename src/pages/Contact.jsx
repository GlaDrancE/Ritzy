import Company1 from "../Icons/Company1";
import Company2 from "../Icons/Company2";
import Company3 from "../Icons/Company3";
import Company4 from "../Icons/Company4";
import Company5 from "../Icons/Company5";
import Navbar from "../components/Navbar";
import RightMark from "../assets/lottie/Right mark.json";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./Layout";

function ContactPage() {
  const lottieDefaultOptions = {
    loop: false,
    autoplay: true,
    animationData: RightMark,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const handleContactClick = () => {
    const iframe = document.getElementById("contact-iframe");
    if (iframe) {
      iframe.contentWindow.postMessage("triggerEffect", "*");
    }
  };
  return (
    <div className="bg-[#EBE5C2] text-black" onClick={handleContactClick}>
      <Navbar
        style={
          {
            // background: "linear-gradient(180deg, #bababa, transparent)",
            // filter: "invert(1)",
          }
        }
      />
      <div className="w-[98vw] h-auto md:h-screen md:overflow-hidden  text-black">
        <div
          className="md:grid block h-full px-4 md:mt-0 mt-24"
          style={{ gridTemplateColumns: "45% 55%" }}
        >
          <div className="md:h-auto">
            <div className="lg:w-2/4 w-full h-full mx-auto flex items-end pb-1">
              <div className="w-full h-[90%] flex flex-col justify-between">
                <div>
                  <div className="mb-8">
                    <p className="text-xs  font-maxima-nouva-bold">
                      Leading Home Automation Specialists
                    </p>
                    <h2 className="text-xl font-bold  font-maxima-nouva-bold">
                      Get in Touch with RITZY
                    </h2>
                  </div>
                  <div
                    className="text-xs font-maxima-nouva"
                    style={{ letterSpacing: "1px" }}
                  >
                    At Ritzy, we’re dedicated to providing cutting-edge home
                    automation solutions tailored to your specific needs.
                    Whether you’re looking to enhance security, improve energy
                    efficiency, or elevate your entertainment experience, our
                    team of experts is here to help. Get in touch with us today
                    to start your journey toward a smarter, more convenient
                    living environment.
                  </div>
                </div>
                <div className="md:mt-0 mt-32">
                  <hr className="block bg-black h-[0.1rem] w-11/12 mx-auto mb-[8vh]" />
                  <div className="pb-8">
                    <div className="grid grid-cols-3 place-items-center mb-4 invert">
                      <div>
                        <Company1 className={"h-8"} />
                      </div>
                      <div>
                        <Company2 className={"h-8"} />
                      </div>
                      <div>
                        <Company3 className={"h-8"} />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 place-items-center invert">
                      <div>
                        <Company4 className={"h-8"} />
                      </div>
                      <div>
                        <Company5 className={"h-8"} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-4 flex w-full md:h-auto h-[calc(67.5vw+117px)] ">
            <ToastContainer />
            <div
              className=" text-black w-full h-full rounded-2xl relative flex flex-col"
              style={{
                boxShadow: "0 0 5px gold",
                background: "url(/contact-background.webp)",
                backgroundSize: "cover",
                backgroundPosition: "-119px",
              }}
            >
              <div className="mt-12 text-center font-uber-move-bold ">
                <h1 className="text-4xl">Contact Us</h1>
                <p className=" font-uber-move">
                  Start Your Smart Home Journey Today!
                </p>
              </div>
              <div
                id="contact-canvas-components"
                className="w-full h-full max-h-[100vh] rounded-b-2xl overflow-hidden "
              >
                <iframe
                  src="/contact-model"
                  id="contact-iframe"
                  className="z-10 relative bg-transparent"
                  frameBorder="0"
                  style={{ width: "100%", height: "100%" }}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Contact({ onClick }) {
  return (
    <Layout>
      <ContactPage onClick={onClick} />
    </Layout>
  );
}
