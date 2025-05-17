import React from "react";

import { MobileSlider } from "./MobileSlider";
export default function MobileProductGrid() {
  return (
    <section className="w-screen bg-[#d7d1c6] h-[120vh]">
      <div className="w-screen flex items-center justify-center text-[#908c83] text-4xl font-uber-move font-bold h-[50vh]">
        <h1>Glimps Of Our Work</h1>
      </div>
      <div className="h-[70vh] w-full flex justify-center">
        {/* {imagesData.map((img) => (
          <div>
            <Link to={"/products"} className="block w-full h-full">
              <img
                src={img.src}
                className="w-full h-full object-cover"
                alt=""
              />
            </Link>
          </div>
        ))} */}
        <MobileSlider />
      </div>
    </section>
  );
}
