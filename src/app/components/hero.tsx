import React from "react";

const Hero = () => {
  return (
    <div className="relative bg-[url('/hero.png')] bg-cover bg-[center_top] h-[400px] sm:h-[600px] lg:h-[716px]">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>

      {/* Text Content */}
      <div className="absolute top-1/2 lg:left-24 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:translate-x-0 lg:-translate-y-1/2 text-left lg:text-left text-white px-4">
        <h2 className="text-[12px] sm:text-[14px] lg:text-[16px] font-medium tracking-widest mb-4 uppercase">
          SUMMER 2020
        </h2>
        <h1 className="text-[24px] sm:text-[32px] lg:text-[48px] font-extrabold leading-tight mb-4">
          NEW COLLECTION
        </h1>
        <p className="text-[12px] sm:text-[14px] lg:text-[16px] leading-relaxed mb-6">
          We know how large objects will act, <br />
          but things on a small scale.
        </p>
        <button className="px-6 py-3 bg-[#2DC071] text-white font-bold rounded hover:bg-green-700 transition-all">
          SHOP NOW
        </button>
      </div>
    </div>
  );
};

export default Hero;
