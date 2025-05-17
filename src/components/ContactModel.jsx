import { Canvas } from "@react-three/fiber";
import React, { useState } from "react";
import { Contact } from "./Contact";
import ContactPreloader from "./ContactPreloader";

const ContactModel = React.memo(() => {
  const [loading, setLoading] = useState(true);
  const handleLoad = () => {
    setLoading(false);
  };
  return (
    <>
      {loading && <ContactPreloader />}
      <Canvas
        style={{
          width: "100%",
          height: "67.5vw",
          position: "absolute",
          background: "url(/contact-background.webp)",
          backgroundSize: "115% 150%",
          backgroundPosition: "-32px -74px ",
          backgroundRepeat: "no-repeat",
        }}
        className="contact-model"
        camera={{
          position: [0.878, 0.748, 30],
          fov: 18,
        }}
      >
        <ambientLight intensity={1} />
        {/* <OrbitControls /> */}
        <Contact onLoad={handleLoad} />
      </Canvas>
    </>
  );
});
export default ContactModel;
