"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const EditorsPics = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`flex flex-col items-center justify-center text-center mt-16 mb-7 bg-[#FAFAFA] pt-3 transition-opacity duration-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div>
        <h2 className="text-[#252B42] font-bold text-[24px] mb-2">
          EDITOR&apos;S PICK
        </h2>
        <p className="text-[#737373] text-[14px]">
          Problems trying to resolve the conflict between
        </p>
      </div>

      {/* Desktop Layout */}
      <div className="hidden sm:flex justify-center items-start gap-6 mt-6">
        {/* Men Image */}
        <div className="relative group">
          <Image
            src={"/men.png"}
            alt="men"
            width={509}
            height={500}
            className="transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute bottom-4 left-4 w-[170px] h-[48px] bg-white flex items-center justify-center">
            <span className="text-[#252B42] font-bold text-lg">MEN</span>
          </div>
        </div>

        {/* Women Image */}
        <div className="relative group">
          <Image
            src={"/women.png"}
            alt="women"
            width={240}
            height={500}
            className="transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute bottom-4 left-4 w-[170px] h-[48px] bg-white flex items-center justify-center">
            <span className="text-[#252B42] font-bold text-lg">WOMEN</span>
          </div>
        </div>

        {/* Accessories and Kids Images */}
        <div className="flex flex-col gap-6">
          {/* Accessories Image */}
          <div className="relative group">
            <Image
              src={"/accessories.png"}
              alt="accessories"
              width={240}
              height={242}
              className="transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-4 left-4 w-[170px] h-[48px] bg-white flex items-center justify-center">
              <span className="text-[#252B42] font-bold text-lg">ACCESSORIES</span>
            </div>
          </div>

          {/* Kids Image */}
          <div className="relative group">
            <Image
              src={"/kids.png"}
              alt="kids"
              width={240}
              height={242}
              className="transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-4 left-4 w-[170px] h-[48px] bg-white flex items-center justify-center">
              <span className="text-[#252B42] font-bold text-lg">KIDS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="sm:hidden flex flex-col items-center justify-center gap-6 mt-6">
        {/* Men Image */}
        <div className="relative group w-[90%] sm:w-full">
          <Image
            src={"/men.png"}
            alt="men"
            width={509}
            height={500}
            className="transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute bottom-4 left-4 w-[170px] h-[48px] bg-white flex items-center justify-center">
            <span className="text-[#252B42] font-bold text-lg">MEN</span>
          </div>
        </div>

        {/* Women Image */}
        <div className="relative group w-[90%] sm:w-full">
          <Image
            src={"/women.png"}
            alt="women"
            width={240}
            height={500}
            className="transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute bottom-4 left-4 w-[170px] h-[48px] bg-white flex items-center justify-center">
            <span className="text-[#252B42] font-bold text-lg">WOMEN</span>
          </div>
        </div>

        {/* Accessories and Kids Images */}
        <div className="flex flex-col gap-6 w-[90%] sm:w-full">
          {/* Accessories Image */}
          <div className="relative group">
            <Image
              src={"/accessories.png"}
              alt="accessories"
              width={240}
              height={242}
              className="transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-4 left-4 w-[170px] h-[48px] bg-white flex items-center justify-center">
              <span className="text-[#252B42] font-bold text-lg">ACCESSORIES</span>
            </div>
          </div>

          {/* Kids Image */}
          <div className="relative group">
            <Image
              src={"/kids.png"}
              alt="kids"
              width={240}
              height={242}
              className="transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-4 left-4 w-[170px] h-[48px] bg-white flex items-center justify-center">
              <span className="text-[#252B42] font-bold text-lg">KIDS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorsPics;
