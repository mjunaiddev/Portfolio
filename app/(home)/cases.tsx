'use client';

import React, { useRef, useState } from 'react';
import { BsDot } from 'react-icons/bs';
import Project from '@/src/components/project';
import { motion } from 'framer-motion';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};
const Cases = () => {
  const [expanded, setExpanded] = useState(false);
  const projectRef = useRef<HTMLDivElement | null>(null);

  const handleAllWork = () => {
    setExpanded(true);

    requestAnimationFrame(() => {
      projectRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  };

  return (
    <div id='case' className="container overflow-hidden">
      {/* Top meta row */}
      <motion.div
       variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      className="flex justify-between max-w-[1340px] mx-auto items-start">
        <div className="max-w-[100px] w-full">
          <span className="md:text-[16px] text-[12px] font-Inter text-[#090613]">
            AI Powered
          </span>
        </div>

        <div className="max-w-[450px] w-full flex justify-between">
          <div className="max-w-[230px] flex w-full">
            <BsDot className="text-black text-[20px]" />
            <span className="md:text-[16px] max-md:leading-[10px]  text-[10px] font-Inter text-[#090613]">
              Innovate Today,Transform Tomorrow
            </span>
          </div>

          <div className="max-w-[120px] w-full">
            <span className="md:text-[16px] text-[10px] block max-md:leading-[-5px] font-Inter text-[#090613]">
              Beyond Limits Since 2022
            </span>
          </div>
        </div>
      </motion.div>

      {/* ================= OUR CASES BIG TEXT (UNCHANGED) ================= */}
   
 
        {/* Sharp text */}
<motion.div

  variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
className="relative  max-w-[1440px] mx-auto flex justify-center">
  <h1
    className="
      font-Inter text-center
      text-[50px] sm:text-[90px] md:text-[120px] lg:text-[150px] xl:text-[200px] 2xl:text-[235px]
      leading-none
      relative z-10
    "
    style={{
      background:
        "linear-gradient(160deg, rgba(35,232,249,1) 0%, rgba(69,82,214,1) 100%)",
      WebkitBackgroundClip: "text",
      color: "transparent",
    }}
  >
    OUR CASES
  </h1>

  {/* Overlay */}
  <div
    className="
      absolute left-0 right-0 top-[55%]
      flex items-center justify-center
      z-20
      pointer-events-none
      
    "
  >
    <div className="w-full max-w-[1440px] md:h-[80px] h-[25px] backdrop-blur-sm md:backdrop-blur-md " />
  </div>
</motion.div>

      {/* ================================================================ */}

      {/* Projects */}
      <motion.div
      
      
      ref={projectRef}>
        <Project expanded={expanded} />
      </motion.div>

      {/* Footer controls */}
      <div className="max-w-[800px] flex justify-between  items-center w-full">
        <span>Scroll to explore</span>

        <button
          onClick={handleAllWork}
          className="px-[30px] py-[10px] rounded-full text-white font-Inter text-[12px] md:text-[20px] bg-[#090613]"
        >
          All Work
        </button>
      </div>
    </div>
  );
};

export default Cases;
