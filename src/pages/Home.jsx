import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import homeImage from "../assets/home/bg.jpg";

import LockIcon from "../assets/home/icons/static-icons/smart-door.png";
import Lightbulb from "../assets/home/icons/static-icons/idea.png";
import AirVent from "../assets/home/icons/static-icons/air-conditioning.png";
import Blinds from "../assets/home/icons/static-icons/curtain.png";
import Thermometer from "../assets/home/icons/static-icons/cold.png";
import Camera from "../assets/home/icons/static-icons/cctv.png";
import WavesLadder from "../assets/home/icons/static-icons/pool-ladder.png";

import smartDoorGif from "../assets/home/icons/smart-door.gif";
import ideaGif from "../assets/home/icons/idea.gif";
import airConditioningGif from "../assets/home/icons/air-conditioning.gif";
import curtainGif from "../assets/home/icons/curtain.gif";
import coldGif from "../assets/home/icons/cold.gif";
import cctvGif from "../assets/home/icons/cctv.gif";
import poolLadderGif from "../assets/home/icons/pool.gif";
// gsap removed as zoom-on-hover is no longer used
import Navbar from "../components/Navbar";
import gate from "../assets/home/videos/gate.webm";
import ac from "../assets/home/videos/ac.webm";
import lights from "../assets/home/videos/lights.webm";
import curtains from "../assets/home/videos/curtains.webm";
import temp from "../assets/home/videos/temp.webm";
import cctv from "../assets/home/videos/cctv.webm";
import pool from "../assets/home/videos/pool.webm";

// GIF Icon Component now shows a tooltip with autoplaying video on hover
const GifIcon = ({
  gifSrc,
  videoSrc, // optional: if provided, tooltip will play this video
  fallbackIcon: FallbackIcon,
  vidPosition,
  className = "",
}) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const iconRef = useRef(null);
  const tooltipRef = useRef(null);

  return (
    <div
      className={`relative inline-block`}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      ref={iconRef}
    >
      <img
        src={FallbackIcon}
        alt="Icon"
        className={`cursor-pointer transition-opacity duration-200 hover:opacity-80`}
        style={{
          width: "1rem",
          height: "1rem",
          objectFit: "cover",
        }}
      />
      {showTooltip && (
        <div
          className="absolute z-[1000]"
          style={{
            top: `${vidPosition.top}px`,
            left: `${vidPosition.left}px`,
            width: "300px",
            background: "rgba(0,0,0,0.8)",
            padding: 4,
            borderRadius: 8,
          }}
          ref={tooltipRef}
        >
          {videoSrc ? (
            <video
              src={videoSrc}
              autoPlay
              muted
              loop
              playsInline
              style={{
                width: 300,
                height: 150,
                display: "block",
                borderRadius: 6,
              }}
            />
          ) : (
            <img
              src={gifSrc}
              alt="Preview"
              style={{
                width: 160,
                height: 120,
                objectFit: "cover",
                display: "block",
                borderRadius: 6,
              }}
            />
          )}
        </div>
      )}
    </div>
  );
};

GifIcon.propTypes = {
  gifSrc: PropTypes.string,
  videoSrc: PropTypes.string,
  fallbackIcon: PropTypes.string.isRequired,
  className: PropTypes.string,
  vidPosition: PropTypes.object,
};

const Home = () => {
  return (
    <>
      <div className="absolute inset-0 z-[999] h-fit">
        <Navbar className="morph-glass !backdrop-blur-0 !py-6 sticky top-0 border-b-2 border-[#b0b0b0]" />
      </div>
      <div className="w-full h-screen relative  inline-block overflow-hidden">
        <img
          src={homeImage}
          alt="home"
          className="w-full h-full object-cover"
        />
        <div className="icon-container icon-lock">
          <GifIcon
            gifSrc={smartDoorGif}
            videoSrc={gate}
            fallbackIcon={LockIcon}
            className="icon-lock"
            vidPosition={{ top: 30, left: -100 }}
          />
        </div>
        <div className="icon-container icon-light">
          <GifIcon
            gifSrc={ideaGif}
            videoSrc={lights}
            fallbackIcon={Lightbulb}
            className="icon-light"
            vidPosition={{ top: 30, left: -100 }}
          />
        </div>
        <div className="icon-container icon-ac">
          <GifIcon
            gifSrc={airConditioningGif}
            videoSrc={ac}
            fallbackIcon={AirVent}
            className="icon-ac"
            vidPosition={{ top: 30, left: -100 }}
          />
        </div>
        <div className="icon-container icon-curtains">
          <GifIcon
            gifSrc={curtainGif}
            videoSrc={curtains}
            fallbackIcon={Blinds}
            className="icon-curtains"
            vidPosition={{ top: 30, left: -100 }}
          />
        </div>
        <div className="icon-container icon-temperature">
          <GifIcon
            gifSrc={coldGif}
            videoSrc={temp}
            fallbackIcon={Thermometer}
            className="icon-temperature"
            vidPosition={{ top: 30, left: -100 }}
          />
        </div>
        <div className="icon-container icon-camera">
          <GifIcon
            gifSrc={cctvGif}
            videoSrc={cctv}
            fallbackIcon={Camera}
            className="icon-camera"
            vidPosition={{ top: 30, left: -100 }}
          />
        </div>
        <div className="icon-container icon-pool">
          <GifIcon
            gifSrc={poolLadderGif}
            videoSrc={pool}
            fallbackIcon={WavesLadder}
            className="icon-pool"
            vidPosition={{ top: -170, left: -100 }}
          />
        </div>
      </div>
    </>
  );
};
export default Home;
