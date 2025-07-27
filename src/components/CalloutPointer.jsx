import React from "react";

export const CalloutPointer = ({ className }) => {
  return (
    <div className={`absolute z-[99999] ${className}`}>
      <div className="relative h-20  ">
        <div className="callout-dot w-3 h-3 bg-red-500 rounded-full after:border-2 after:border-white after:absolute after:w-5 after:h-5 after:-left-1 after:-top-1 after:rounded-full z-50"></div>
        <div className="callout-line-1 w-60 h-[2px] bg-white  origin-left rotate-45 -translate-y-3 relative z-10 top-3 left-3">
          <div className="absolute w-full h-full bg-white origin-bottom-right rotate-[135deg] -top-[1.8px] -left-[1.02px] -bottom-20"></div>
        </div>
      </div>
    </div>
  );
};
