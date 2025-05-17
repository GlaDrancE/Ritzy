import { Canvas, useThree } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import CoreServicesModel from "./CoreServicesModel";
import { OrbitControls } from "@react-three/drei";
import gsap from "gsap";

export default function CoreServices() {
  const defaultCameraRef = useRef(null);

  const handleChange = (e) => {
    // console.log(e.target.position0);
  };
  const handleDefaultCamera = () => {
    if (defaultCameraRef.current) {
      defaultCameraRef.current.setCamera();
    }
  };

  return (
    <section className="relative">
      <Canvas
        className="w-full h-screen"
        style={{
          height: "100vh",
          zIndex: 99999,
          background:
            'url("https://images.pexels.com/photos/29092517/pexels-photo-29092517/free-photo-of-scenic-moonlit-cityscape-of-istanbul-turkiye.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2") center center no-repeat',
          backgroundSize: "cover",
        }}
        camera={{
          position: [-20.837, 6.528, 10.32],
          rotation: [
            -0.4569635742958074, -1.075626922382597, -0.4083045728810875,
          ],
          fov: 50,
          near: 0.01,
          far: 1000,
        }}
      >
        {/* <OrbitControls onChange={(e) => handleChange(e)} /> */}
        <pointLight position={[4.262, 10.406, -0.195]} intensity={50} />
        <directionalLight position={[5.913, 9.13, 60.91]} />
        <CoreServicesModel ref={defaultCameraRef} />
      </Canvas>

      <div
        className="w-16 h-16 flex items-center justify-center bg-white absolute top-[80%] left-1/2 rounded-full z-[9999999999999999999] cursor-pointer scale-0 opacity-0"
        id="default-camera-button"
        onClick={handleDefaultCamera}
      >
        x
      </div>
    </section>
  );
}

/**
 * (Section - 1) - 9.051, 6.698, -1.066
 */
