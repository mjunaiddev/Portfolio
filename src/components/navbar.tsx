"use client";

import React, { useState } from "react";
import Image from "next/image";
import Logo from "@assets/logo.svg";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  const navItems = [
    "Home",
    "About",
    "Services",
    "Resume",
    "Project",
    "Contact",
  ];

  const getItemClasses = (item: string) => {
    if (activeTab === item) {
      return "bg-[#FD853A] py-5 px-10 rounded-full font-bold";
    }

    if (hoveredTab === item) {
      return "bg-gray-700/30 py-5 px-10 rounded-full";
    }

    return "py-5 px-10";
  };

  return (
    <div className="container h-[80px] mt-10">
      <div className="flex justify-between items-center rounded-full bg-[#171717] border border-[#CBCBCB00] text-white text-xl p-2">
        <ul className="flex gap-4 ">
          {navItems.slice(0, 3).map((item) => (
            <li
              key={item}
              className={`${getItemClasses(item)} font-Lufga`}
              onClick={() => setActiveTab(item)}
              onMouseEnter={() => setHoveredTab(item)}
              onMouseLeave={() => setHoveredTab(null)}
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Logo */}
        <div className="flex items-center justify-center gap-3 text-2xl font-bold">
          <Image src={Logo} alt="Logo" />
          JUNAID
        </div>
        <ul className="flex gap-4">
          {navItems.slice(3).map((item) => (
            <li
              key={item}
              className={`${getItemClasses(item)} font-Lufga`}
              onClick={() => setActiveTab(item)}
              onMouseEnter={() => setHoveredTab(item)}
              onMouseLeave={() => setHoveredTab(null)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
