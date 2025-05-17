import { useRef } from "react";
import img1 from "../assets/imageGrid/1.jpg";
import img2 from "../assets/imageGrid/2.jpg";
import img3 from "../assets/imageGrid/3.jpg";
import img4 from "../assets/imageGrid/4.jpg";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {
  FreeMode,
  Mousewheel,
  Navigation,
  EffectCards,
  Pagination,
} from "swiper/modules";
export function MobileSlider() {
  const imagesData = [
    {
      src: img1,
      class: "img1",
      width: 40,
      height: 40,
      x: -100,
      y: -40,
      z: -1000,
    },
    {
      src: img2,
      class: "img2",
      width: 40,
      height: 40,
      x: 50,
      y: -30,
      z: -200,
    },
    {
      src: img3,
      class: "img3",
      width: 40,
      height: 40,
      x: -80,
      y: -40,
      z: -300,
    },
    {
      src: img4,
      class: "img4",
      width: 40,
      height: 40,
      x: 100,
      y: 0,
      z: -400,
    },
  ];
  return (
    <>
      <div className="mySwiper w-full lg:block cursor-grab active:cursor-grabbing">
        <Swiper
          slidesPerView={1.11}
          spaceBetween={10}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          // onSlideChange={handleSlideCount}
          modules={[Navigation]}
        >
          {imagesData.map((img) => (
            <SwiperSlide>
              <div className="tech-card">
                <div className="tech-img w-full h-full">
                  <img
                    src={img.src}
                    loading="lazy"
                    className="w-full h-full object-cover"
                    alt="Blockchain Technology"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
