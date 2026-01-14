"use client";

import React from "react";
import Image from "next/image";
import about from "@assets/about.png";
import btnbg from "@assets/btnbg.svg";
import { LuDot } from "react-icons/lu";
import circleGif from "@assets/aboutcirclegif.gif";
import lineGif from "@assets/linegif.gif";
import line2gif from "@assets/line.gif";
import { GoDotFill } from "react-icons/go";
import AboutLeftAnimtion from "@/src/components/aboutLeftAnimtion";
import { motion } from "framer-motion";


const spring = {
  type: "spring",
  stiffness: 80,
  damping: 18,
  mass: 0.8,
};

const About: React.FC = () => {
  return (
    <div id="about" className="container py-[80px] lg:py-[100px] flex flex-col lg:flex-row gap-[30px] 2xl:justify-between items-center">
      {/* Mobile Top Badge */}
      <div className="relative w-[150px] sm:w-[160px] md:w-[200px] lg:hidden h-[40px] sm:h-[50px] md:h-[60px]">
        <Image src={btnbg} alt="Background" fill className="object-cover rounded-lg" />
        <div className="absolute inset-0 flex items-center justify-center sm:gap-2">
          <LuDot className="text-[#090613] text-[16px] sm:text-[18px] md:text-[20px]" />
          <span className="text-[#090613] font-Inter text-[12px] sm:text-[16px] md:text-[18px]">
            ABOUT US
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row w-full max-lg:flex-col-reverse gap-[30px] justify-center lg:justify-between items-center">
        {/* Left Image */}
        <motion.div
        initial={{ x: -120, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={spring}
          viewport={{ once: true, amount: 0.35 }}
        
        className="w-full lg:max-w-[547px] max-lg:mx-auto lg:flex-shrink-0">
        <AboutLeftAnimtion />
        </motion.div>

        {/* Right Content */}
        <motion.div
        initial={{ x: 120, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={spring}
          viewport={{ once: true, amount: 0.35 }}

        className="w-full lg:max-w-[768px] flex flex-col gap-6">
          {/* Desktop Badge */}
          <div
            className="relative bg-[#FFFFFF1A] rounded-full max-lg:hidden max-lg:flex sm:w-[160px] md:w-[150px] lg:flex lg:w-[200px]
            w-[120px] h-[40px] sm:h-[50px] md:h-[50px] lg:h-[60px] shadow-[0_6px_20px_#4552D66E,0_0px_25px_#23E8F95E]"
          >
            <div className="absolute inset-0 flex items-center justify-center gap-2">
              <GoDotFill className="text-[#090613] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-bold" />
              <span className="text-[#090613] font-Inter text-[14px] sm:text-[16px] md:text-[18px] lg:text-[24px]">
                ABOUT US
              </span>
            </div>
          </div>

          {/* Paragraph */}
          <p className="text-[20px] max-lg:text-center sm:text-[24px] md:text-[32px] max-md:leading-[30px] lg:text-[36px]  text-[#090613] leading-[28px] sm:leading-[32px] md:leading-[44px] lg:leading-[50px]">
            <span className="font-semibold">Faticore Technologies</span> is a technology-driven company focused on{" "}

            {/* Circle GIF inline */}
            <span className="inline-flex items-center md:w-[30px] h-[20px] w-[20px] md:h-[30px] mx-1">
              <Image src={circleGif} alt="circleGif" className="rounded-full w-full h-full object-cover" />
            </span>{" "}

            {/* First line GIF inline */}
            <span className="inline-flex items-center z-[-1] relative w-[81px] h-[20px] md:h-[30px]  mx-1 rounded-full bg-gradient-to-r from-[#23E8F9] to-[#4552D6] overflow-hidden">
              <Image src={lineGif} alt="linegif" className="absolute inset-0 w-full h-full object-cover" />
            </span>{" "}

            delivering smart, secure, and scalable digital solutions. We partner with startups and enterprises to turn complex ideas into seamless digital experiences.{" "}

            {/* Second line GIF inline */}
            <span className="inline-flex items-center w-[81px] md:h-[30px] h-[20px] mx-1 rounded-full bg-gradient-to-r from-[#23E8F9] to-[#4552D6] z-[-1] relative overflow-hidden">
              <Image src={line2gif} alt="line2gif" className="absolute inset-0 w-full h-full object-cover" />
            </span>
          </p>

          {/* Buttons */}
          <div className="flex mb-[20px] flex-row gap-4 w-full max-lg:mx-auto max-w-[500px]">
            <button className="w-full sm:w-auto flex-1 text-white max-lg:py-[10px] bg-[#090613] md:text-[20px] text-[16px] md:h-[56px] rounded-full flex items-center justify-center font-Inter hover:bg-[#07050f] transition-colors">
              Get Started
            </button>
            <button className="w-full sm:w-auto flex-1 max-lg:py-[10px] text-[#090613] md:text-[20px] text-[16px] font-Inter bg-[#E8F2FF] md:h-[56px] rounded-full flex items-center justify-center hover:bg-[#dce4f0] transition-colors">
              Contact Us
            </button>
    
          </div>

        </motion.div>
      </div>
    </div>
  );
};

export default About;
