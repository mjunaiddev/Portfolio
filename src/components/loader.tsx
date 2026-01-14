"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import logo from "@assets/logo.svg";
import mobilelogo from "@assets/mobilelogo.svg"

export default function Loader() {
  const text = "Faticore";
  const letters = text.split("");

  const [progress, setProgress] = useState(0);
  const [showText, setShowText] = useState(false);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    let value = 0;

    const interval = setInterval(() => {
      value++;
      setProgress(value);

      if (value >= 100) {
        clearInterval(interval);
        setTimeout(() => setFinished(true), 300);
      }
    }, 30);

    const textTimeout = setTimeout(() => setShowText(true), 300);

    return () => {
      clearInterval(interval);
      clearTimeout(textTimeout);
    };
  }, []);

  // Calculate scale for smooth zoom
  const scale = 1 + progress / 100 * 2; // from 1 → 3 as progress goes 0 → 100

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-b from-[#F1F2F4] to-[#DDE0E4] flex flex-col items-center justify-center">

      {/* HEADER */}
      <div className="container mx-auto flex py-5 justify-between items-center absolute top-0 left-0 right-0">
        <Image src={logo} alt="logo" className="md:h-[40px] max-md:hidden" />
        <Image src={ mobilelogo } alt=" mobilelogo " className=" md:hidden" />
        <button className="flex md:h-[45px] md:px-10 rounded-full max-md:text-[12px] px-[20px] py-[10px] bg-[#090613] text-white items-center justify-center">
          Contact Us
        </button>
      </div>

      {/* LOADER */}
      <div className="relative w-[320px] h-[320px] md:w-[533px] md:h-[533px] flex items-center justify-center">

        {/* BACK GLOW */}
        <div
          className="absolute inset-[-14px] rounded-full glow-ring-back transition-all duration-500 ease-in-out"
          style={{
            transform: `scale(${finished ? scale : 1})`,
            opacity: finished ? 0 : 0.9,
          }}
        />

        {/* CENTER CIRCLE */}
        <div
          className="absolute inset-[14px] md:inset-[22px] rounded-full circle-bg z-10 transition-all duration-500 ease-in-out"
          style={{
            transform: `scale(${finished ? scale : 1})`,
            opacity: finished ? 0 : 1,
          }}
        />

        {/* TEXT */}
        {showText && (
          <div
            className={`absolute flex z-20 transition-all duration-500 ease-in-out ${
              finished ? "-translate-y-[90px] scale-[1.25] opacity-0" : ""
            }`}
          >
            {letters.map((char, i) => (
              <span
                key={i}
                className="fly-text"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                {char}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* PERCENT */}
      <p className="mt-10 text-center text-[24px] font-medium text-black">
        {progress}%
      </p>

      {/* STYLES */}
      <style jsx>{`
        .circle-bg {
          background: radial-gradient(
            circle at top left,
            #f5f6f7 0%,
            #e3e5e7 45%,
            #c9ccd0 100%
          );
        }

        .glow-ring-back {
          background: conic-gradient(
            from 180deg,
            transparent 0deg,
            transparent 220deg,
            #4552d600 260deg,
            #4552d6 300deg,
            #23e8f9 330deg,
            #23e8f900 360deg
          );
          filter: blur(55px);
          animation: rotateBack 3.6s linear infinite;
        }

        @keyframes rotateBack {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        .fly-text {
          font-family: Sora, sans-serif;
          font-size: 88px;
          color: #a7a7a7;
          opacity: 0;
          transform: translateX(30px);
          animation: flyIn 0.5s ease forwards;
        }

        @keyframes flyIn {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @media (max-width: 768px) {
          .fly-text {
            font-size: 56px;
          }
        }
      `}</style>
    </div>
  );
}
