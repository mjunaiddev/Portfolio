"use client";

import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { projects } from "@/src/utils/data";
import ServicesCard from "@/src/components/servicesCard";
import btnbg from "@assets/btnbg.svg";
import Image from "next/image";
import { LuDot } from "react-icons/lu";
import circleGif from "@assets/aboutcirclegif.gif";
import { GoDotFill } from "react-icons/go";
import { motion } from "framer-motion";


export default function Services(): JSX.Element {
  const container = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number): void {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 18, duration: 1 } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

 
  return (
    <main id="services" ref={container} className="relative py-[100px] container">
      {/* TAG */}
< motion.div
initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
  className="relative mx-auto bg-[#FFFFFF1A] rounded-full
  w-[150px] sm:w-[160px] md:w-[150px] lg:w-[250px]
  h-[40px] sm:h-[50px] md:h-[50px] lg:h-[60px]
  shadow-[0_6px_20px_#4552D66E,0_0px_25px_#23E8F95E]"
>
  {/* Dot + Text */}
  <div className="absolute inset-0 flex items-center justify-center md:gap-2">
    <GoDotFill  className="text-[#090613] text-[16px] sm:text-[18px] md:text-[20px] font-bold lg:text-[24px]" />
    <span className="text-[#090613] font-Inter text-[12px] sm:text-[16px] md:text-[18px] lg:text-[24px]">
      OUR SERVICES
    </span>
  </div>
</motion.div>
      {/* HEADING */}
      <div className="max-w-[818px] my-5 mx-auto text-center">
        <motion.h2
        
         initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="lg:text-[48px] md:text-[30px] text-[20px] max-md:leading-[22px] lg:leading-[60px]">
          Designing{" "}
          <span className="inline-flex items-center md:w-[30px] w-[15px] md:h-[30px]  h-[15px] md:mx-1">
            <Image src={circleGif} alt="circleGif" className="rounded-full" />
          </span>
          scalable technology for tomorrow’s growth
        </motion.h2> 
      </div>

      {/* CARDS */}
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.05;

        return (
          <ServicesCard
            key={`p_${i}`}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </main>
  );
}
