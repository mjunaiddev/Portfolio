import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";

import HeroImage from "@assets/hero-image.svg";
import HeroVectorSmall from "@assets/hero-vector-small.svg";
import HeroVectorLarge from "@assets/hero-vector-large.svg";

const Hero = () => {
  return (
    <div className="container mt-48">
      <div className="text-center w-[920px] mx-auto">
        <div className="w-[140px] mx-auto flex flex-col items-end">
          <Image src={HeroVectorSmall} alt="Hero Text Bg"/>
          <div className="font-medium font-Lufga text-xl text-[#171717] border border-[#171717] px-6 py-3 rounded-full max-w-[100px] mx-auto -mt-2 mb-4">
            Hello!
          </div>
        </div>
        <div className="font-semibold font-Urbanist text-[95px] text-[#171717] leading-none">
          I'm <span className="text-[#FD853A]"> Junaid</span>,<br />
          Software Engineer{" "}
        </div>
        <div className="-mt-8">
          <Image src={HeroVectorLarge} alt="Hero Text Bg" />
        </div>
      </div>

      <div className="flex justify-between">
        <div className="text-[#344054] w-[320px] font-Lufga font-medium text-xl">
          <FaQuoteLeft className="text-[#344054] text-4xl mb-6" />
          Junaid's Exceptional product design ensure our website's success.
          Highly Recommended
        </div>
        <div className="flex flex-col items-center justify-center w-[200px]">
          <div className="flex text-[#FD853A] gap-1 text-4xl mb-4">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <div className="text-right">
            <h1 className="text-[#171717] text-[45px] font-bold font-Urbanist leading-none">
              2+ Years
            </h1>
            <p className="text-xl text-[#171717] font-Lufga">Experince</p>
          </div>
        </div>
      </div>
      <div className="relative w-[950px] mx-auto">
        <div className="absolute -top-[270px]">
          <Image src={HeroImage} alt="hero image" height={700} width={950} />
        </div>
        <div className="w-[800px] h-[365px] mx-auto bg-[#FD853A]/50 rounded-t-full"></div>
      </div>
    </div>
  );
};

export default Hero;
