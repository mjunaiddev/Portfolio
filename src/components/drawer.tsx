"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";

import homeIcon from "@assets/icons/homeIcon.png";
import serviceIcon from "@assets/icons/serviceIcon.png";
import warningIcon from "@assets/icons/warnigIcon.png";
import caseIcon from "@assets/icons/casesIcon.png";

interface DrawerProps {
  setShowDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}

interface NavItem {
  label: string;
  id: string;
  icon?: any;
}

const navItems: NavItem[] = [
  { label: "Home", id: "home", icon: homeIcon },
  { label: "About Us", id: "about", icon: warningIcon },
  { label: "Our Services", id: "services", icon: serviceIcon },
  { label: "Our Cases", id: "case", icon: caseIcon },
];

const Drawer: React.FC<DrawerProps> = ({ setShowDrawer }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleScrollTo = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setShowDrawer(false);
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex justify-end"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setShowDrawer(false)}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="
          h-[380px] w-[357px]
          bg-[#E8F2FF]
          border-l border-white/10
          px-6 py-6
          rounded-[20px]
          flex flex-col
          relative z-50
        "
      >
        {/* Close Button */}
        <button
          onClick={() => setShowDrawer(false)}
          className="absolute right-5 top-5 text-black hover:text-gray-700 transition"
        >
          <IoMdClose size={22} />
        </button>

        {/* MENU Title */}
        <h2 className="mt-8 text-center text-[20px] text-[#090613]/30  font-semibold">
          MENU
        </h2>

        {/* Divider */}
        <div className="my-2 h-[1px] w-full bg-white/10" />

        {/* Navigation Links */}
        <div className="flex flex-col items-center gap-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScrollTo(item.id)}
              className="
                flex items-center gap-3 text-[#090613] text-[13.25px] font-medium
                px-6 py-2 rounded-lg
                transition
                font-Sora
                hover:bg-white/10 hover:backdrop-blur-sm
              "
            >
              {/* Text first */}
              <span>{item.label}</span>
              {item.icon && (
                <Image src={item.icon} alt={item.label} width={20} height={20} />
              )}
            </button>
          ))}
        </div>

        {/* Gap between links and button */}
        <div className="mt-[35px]" />

        {/* CTA Button */}
        <button className="  mx-auto py-[15px] ] w-full bg-black text-white flex items-center justify-center font-medium rounded-full overflow-visible">
         Contact Us
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Drawer;
