"use client";

import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const faqs = [
    {
      question: "Why Faticore Technologies?",
      answer:
        "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    },
    {
      question: "Why Faticore Technologies?",
      answer:
        "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    },
    {
      question: "Why Faticore Technologies?",
      answer:
        "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    },
    {
      question: "Why Faticore Technologies?",
      answer:
        "Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    },
  ];

  return (
    <div id="faqs" className="flex flex-col lg:flex-row gap-7 container justify-center items-center md:items-start md:justify-between my-[70px] lg:min-h-[580px] overflow-hidden">
      <div className="text-[32px] md:text-[55px] xl:text-[64px] text-[#090613] w-[375px] md:w-[700px] mx-auto text-left">
        Frequently Asked <span className="text-[#09061380]">Questions</span>
      </div>

      <div className="flex flex-col gap-4 md:gap-5 w-[320px] h-[440px] md:w-[720px] md:min-h-[540px] lg:min-h-[600px] xl:min-h-[485px] pt-2">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`border border-[#E8F2FF] rounded-lg md:rounded-2xl bg-[#FBFCFF] transition-shadow duration-400 ${
              activeIndex === index
                ? "shadow-[6px_6px_24px_rgba(69,82,214,0.35),_-6px_-6px_24px_rgba(35,232,249,0.35)]"
                : ""
            }`}
          >
            <div
              className="flex justify-between items-center px-3 py-5 md:px-5 md:py-6 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-sm md:text-2xl font-medium">
                {faq.question}
              </h3>
              <p
                className={`${
                  activeIndex === index
                    ? "text-base md:text-xl text-[#090613]"
                    : "text-xl md:text-3xl text-[#4552D6]"
                }`}
              >
                {activeIndex === index ? <RxCross2 /> : "+"}
              </p>
            </div>
            <AnimatePresence initial={false}>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    duration: 0.35,
                    ease: "easeInOut",
                  }}
                  className="overflow-hidden"
                >
                  <div className="px-3 py-3 md:px-5 md:py-6 text-[#090613B2] text-[10px] md:text-lg">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
