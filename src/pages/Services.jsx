import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Layout from "./Layout";

export const Services = () => {
  const [hoveredSection, setHoveredSection] = useState(1); // Start with first section expanded
  const navigate = useNavigate();

  const handleServiceClick = (serviceId) => {
    navigate(`/products?service=${serviceId}`);
  };

  // Import service images
  const homeAutomationImg = new URL(
    "../assets/images/residence-services/living-room.jpg",
    import.meta.url
  ).href;
  const homeTheaterImg = new URL(
    "../assets/images/residence-services/home-theater.jpg",
    import.meta.url
  ).href;
  const livingRoomAVImg = new URL(
    "../assets/images/products/av-equipments.png",
    import.meta.url
  ).href;
  const commercialImg = new URL(
    "../assets/images/office/office.jpg",
    import.meta.url
  ).href;
  const fenestrationsImg = new URL(
    "../assets/images/residence-services/lightings.jpg",
    import.meta.url
  ).href;

  const services = [
    {
      id: 1,
      title: "HOME AUTOMATION",
      description: "Smart home solutions for modern living",
      background: homeAutomationImg,
      color: "#4ecdc4",
    },
    {
      id: 2,
      title: "HOME THEATERS",
      description: "Premium home entertainment systems",
      background: homeTheaterImg,
      color: "#6c5ce7",
    },
    {
      id: 3,
      title: "LIVING ROOM AV",
      description: "Professional audio-visual equipment for living spaces",
      background: livingRoomAVImg,
      color: "#45b7d1",
    },
    {
      id: 4,
      title: "COMMERCIAL",
      description: "Commercial audio-visual and automation solutions",
      background: commercialImg,
      color: "#ff6b6b",
    },
    {
      id: 5,
      title: "FENESTRATIONS",
      description: "Smart window treatments and lighting control",
      background: fenestrationsImg,
      color: "#f9ca24",
    },
  ];

  return (
    <Layout>
      <div className="animated-gradient-bg" id="services">
        <Navbar />
        <div className="w-full min-h-screen overflow-hidden secondary-bg">
          <div className="flex flex-col h-full overflow-hidden min-h-[calc(100vh-7rem)] md:min-h-full">
            {services.map((service) => (
              <div
                key={service.id}
                className={`group flex-1 min-h-[150px] md:min-h-[200px] relative transition-all duration-700 ease-out cursor-pointer overflow-hidden 
                hover:flex-[4] hover:min-h-[350px] md:hover:min-h-[400px] 
                ${
                  hoveredSection === service.id
                    ? "flex-[4] min-h-[350px] md:min-h-[400px]"
                    : ""
                }`}
                style={{
                  backgroundImage: `url(${service.background})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
                onMouseEnter={() => setHoveredSection(service.id)}
                onClick={() => handleServiceClick(service.id)}
              >
                <div className="absolute inset-0 flex items-end justify-center transition-all duration-700 ">
                  <div className=" text-white z-10 p-4 md:p-8 w-full">
                    <h2
                      className={`text-5xl md:text-4xl  mb-4 transition-all duration-700 whitespace-nowrap font-maxima-nouva-thin
                      group-hover:text-4xl md:group-hover:text-5xl
                      ${
                        hoveredSection === service.id
                          ? "text-4xl md:text-5xl"
                          : ""
                      }`}
                      style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
                    >
                      {service.title}
                    </h2>
                    <div
                      className={`transition-all duration-700 delay-200 max-w-md mx-auto
                        ${
                          hoveredSection === service.id
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-5"
                        }`}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer className="bg-transparent text-white" />
      </div>
    </Layout>
  );
};
