import React from "react";
import Image from "next/image";
import herogBg from "@assets/heroBg.png";
import MediaLinks from "@/src/components/mediaLinks";
import herogif from "@assets/heroGif.gif";
import btnBg from "@assets/herobtnBg.png";
import boostIcon from "@assets/boosticon.png";
import handIcon from "@assets/icons/handIcon.svg";
import knifeIcon from "@assets/icons/knifeIcon.svg";
import heroLogo from "@assets/heroLogo.svg";
import { IoArrowDown } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import tabbg from "@assets/tabherobg.svg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div id="home" className="relative  w-full min-h-screen overflow-hidden">
      <div className=" relative container">
        {/* Right Side Background */}
        <div className=" 2xl:max-w-[1200px] lg:max-w-[750px] xl:max-w-[1000px] max-2xl:mr-[80px]  absolute z-[-1] right-0 top-[25px] max-xl:top-[-75px] xl:top-[15px] w-full left-[15%] xl:ml-auto ">
          <Image src={herogBg} alt="herobg" className=" " />

          {/* <Image src={tabbg} alt="tabbg"  className=" xl:hidden"/> */}
        </div>

        <div className=" px-[50px]">
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className=" 2xl:max-w-[248px] max-w-[230px] pr-[10px] xl:pt-[120px] max-xl:absolute  right-[13%] top-[22%] w-full xl:ml-auto"
          >
            <p className=" xl:text-[16px] text-[14px] text-black/40 font-Inter">
              We design and develop scalable web, mobile, and AI-powered
              products that help businesses grow faster.
            </p>
          </motion.div>
          <div className="  max-w-[1100px] max-xl:mt-[100px]  flex justify-between w-full">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className=" max-w-[100px] left-[-3%] flex flex-col items-center   relative z-50 w-full"
            >
              <MediaLinks />
            </motion.div>
            <div className=" max-w-[768px] w-full">
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                className="max-w-[286px] mb-[10px] flex gap-[10px] w-full"
              >
                <button className="relative w-full max-w-[150px] h-[49px] rounded-full overflow-hidden flex items-center justify-center text-[16px] text-white">
                  {/* Background Image */}
                  <Image
                    src={btnBg}
                    alt="btnbg"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Button Text */}
                  <span className="relative z-10">Get Started</span>
                </button>
                <button className="relative w-full border-[1px] border-black max-w-[150px] h-[49px] rounded-full overflow-hidden flex items-center justify-center text-[16px] text-black">
                  {/* Background Image */}

                  {/* Button Text */}
                  <span className="relative z-10">Get Started</span>
                </button>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                className=" text-[#090613] leading-[70px] text-[50px] xl:text-[64px] font-Inter "
              >
                Powering the Future with Intelligent Tech
              </motion.h1>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: -60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className=" max-w-[700px] max-2xl:px-[50px] xl:relative max-xl:absolute max-xl:right-[10%] max-xl:top-[45%] z-50 items-end justify-between  flex w-full ml-auto"
          >
            <div className="max-w-[400px] flex gap-[30px] 2xl:pt-[150px] w-full">
              {/* Card 1 */}
              <div className="bg-[#FFFFFF] xl:max-w-[175px] max-w-[150px]  flex-col w-full rounded-[20px] flex justify-center items-center min-h-[100px] 2xl:h-[155px] transition-all duration-300  hover:shadow-[0_0_30px_5px_rgba(35,232,249,0.37)]">
                <span className="text-[#000000] font-semibold font-Inter text-[40px]">
                  10+
                </span>

                <div className="flex items-center mt-2">
                  <Image src={boostIcon} alt="boostIcon" />
                  <span className="text-black/40 text-[10px] font-Inter ml-1">
                    Projects Delivered
                  </span>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-[#FFFFFF]   xl:max-w-[175px] max-w-[150px] flex-col w-full rounded-[20px] flex justify-center items-center min-h-[100px] 2xl:h-[155px] transition-all duration-300  hover:shadow-[0_0_30px_5px_rgba(35,232,249,0.37)]">
                <span className="text-[#000000] font-semibold font-Inter text-[40px]">
                  500+
                </span>

                <div className="flex items-center mt-2">
                  <Image src={handIcon} alt="handIcon" />
                  <span className="text-black/40 text-[10px] font-Inter ml-1">
                    Industries Served
                  </span>
                </div>
              </div>
            </div>

            <div className=" bg-[#FFFFFF] max-w-[230px] flex-col w-full rounded-[20px] hover:shadow-[0_0_30px_5px_rgba(35,232,249,0.37)] flex justify-center items-center h-[180px] 2xl:h-[230px] ">
              <span className="text-[#000000] font-semibold font-Inter text-[40px]  ">
                99.9%
              </span>

              <div className=" flex items-center">
                <Image src={knifeIcon} alt="knifeIcon  " />
                <span className=" text-black/40 text-[10px] font-Inter">
                  Industries Served
                </span>
              </div>
            </div>
          </motion.div>
          <div>
            <div>
              <div className="2xl:max-w-[600px] xl:max-w-[410px] max-w-[310px] 2xl:mt-[-40px] xl:mt-[-20px] mt-[100px] flex justify-between w-full items-center">
                {/* Logo with arrow */}
                <div className="items-center">
                  <Image
                    src={heroLogo}
                    alt="herologo"
                    className="w-auto h-auto"
                  />
                  <IoArrowDown className="ml-4 text-[rgb(9,6,19)]" size={24} />
                </div>

                {/* Trusted by clients box */}
                <div className="xl:max-w-[339px] max-w-[200px] w-full border-[2px] border-[#E8F2FF] rounded-full bg-[#FBFCFF] flex items-center justify-center p-3">
                  <GoDotFill />
                  <span className="text-[#090613] font-Inter xl:text-[14px] text-[8px] text-center italic">
                    Trusted by <span className="text-[#4552D6]">120+ </span>
                    Clients Worldwide
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
          viewport={{ once: true, amount: 0.3 }}
          className="xl:max-w-[695px] max-w-[400px] z-[-1] top-[10%] w-full absolute left-0 right-0 mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-r z-[-1] from-[#23E8F9] to-[#4552D6] opacity-20" />
          <Image src={herogif} alt="gif" />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
