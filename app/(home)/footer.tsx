"use client";
import React, { useState } from "react";
import Image from "next/image";
import { PiPhoneFill } from "react-icons/pi";
import { AiFillMail } from "react-icons/ai";
import uri from "@/src/constants/external-links";
import LinkedInIcon from "@assets/icons/inIcon.svg";
import TwitterIcon from "@assets/icons/twiterIcon.svg";
import GitIcon from "@assets/icons/gitIcon.svg";
import UpworkIcon from "@assets/icons/upIcon.svg";
import LinkedInHoverIcon from "@assets/icons/linkedIn-hover-icon.svg";
import TwitterHoverIcon from "@assets/icons/twitter-hover-icon.svg";
import GitHoverIcon from "@assets/icons/github-hover-icon.svg";
import UpworkHoverIcon from "@assets/icons/upwork-hover-icon.svg";
import FooterIcon from "@assets/footer-icon.svg";

const Footer = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contact: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // 🚫 Prevent numbers in firstName & lastName
    if (name === "firstName" || name === "lastName") {
      if (/\d/.test(value)) return; // stop update if number is typed
    }

    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.contact.trim()) {
      newErrors.contact = "Email or phone number is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^[0-9+\-\s()]{7,}$/;

      if (
        !emailRegex.test(formData.contact) &&
        !phoneRegex.test(formData.contact)
      ) {
        newErrors.contact = "Enter a valid email or phone number";
      }
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    // ✅ Form is valid
    console.log("Form Submitted:", formData);

    // Optional: reset form
    setFormData({
      firstName: "",
      lastName: "",
      contact: "",
      message: "",
    });
  };

  const handleScrollTo = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <div className="bg-footerMobileBg md:bg-footerbg bg-cover lg:h-[970px] overflow-hidden">
      <div className="container flex flex-col items-center pt-10 lg:pt-28">
        <div className="flex flex-col md:flex-row justify-center gap-3 lg:gap-5">
          <div className="w-[310px] lg:w-[440px] xl:w-[480px] rounded-[20px] lg:rounded-[30px] bg-gradient-to-br from-[#4552D6]  via-[#23E8F9] to-[#FFFFFF] p-6 text-white">
            <h2 className="text-[27px] lg:text-4xl font-medium mb-1">
              Contact Us
            </h2>
            <p className="text-[10px] lg:text-sm opacity-60 mb-6">
              Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>

            <form className="w-full" onSubmit={handleSubmit}>
              <div className="flex gap-3 mb-3">
                <div className="flex flex-col w-1/2">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="rounded-full px-4 py-2 lg:px-6 lg:py-4 text-sm lg:text-base bg-transparent placeholder-[#FFFFFF]/60 border border-[#FFFFFF33] backdrop-blur-[30px] shadow-[0px_2px_10px_rgba(0,0,0,0.03) focus:outline-none focus:ring-0 focus:border-[#FFFFFF33]"
                  />
                  {errors.firstName && (
                    <p className="text-red-600 text-xs mt-1">
                      {errors.firstName}
                    </p>
                  )}
                </div>
                <div className="flex flex-col w-1/2">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="rounded-full px-4 py-2 lg:px-6 lg:py-4 text-sm lg:text-base bg-transparent placeholder-white/60 border border-[#FFFFFF33] backdrop-blur-[30px] shadow-[0px_2px_10px_rgba(0,0,0,0.03) focus:outline-none focus:ring-0 focus:border-[#FFFFFF33]"
                  />
                  {errors.lastName && (
                    <p className="text-red-600 text-xs mt-1">
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  name="contact"
                  placeholder="Email or Phone Number"
                  value={formData.contact}
                  onChange={handleChange}
                  className="w-full rounded-full px-4 py-2 lg:px-6 lg:py-4 text-sm lg:text-base bg-transparent placeholder-white/60 border border-[#FFFFFF33] backdrop-blur-[30px] shadow-[0px_2px_10px_rgba(0,0,0,0.03) focus:outline-none focus:ring-0 focus:border-[#FFFFFF33]"
                />{" "}
                {errors.contact && (
                  <p className="text-red-600 text-xs mt-1">{errors.contact}</p>
                )}
              </div>
              <div className="mb-4 lg:mb-[30px]">
                <textarea
                  name="message"
                  placeholder="Type here..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full h-[130px] rounded-[15px] lg:rounded-[30px] px-4 py-2 lg:px-6 lg:py-4 text-sm lg:text-base bg-transparent placeholder-white/60 resize-none border border-[#FFFFFF33] backdrop-blur-[30px] shadow-[0px_2px_10px_rgba(0,0,0,0.03) focus:outline-none focus:ring-0 focus:border-[#FFFFFF33] overflow-y-auto scrollbar-none"
                />{" "}
                {errors.message && (
                  <p className="text-red-600 text-xs mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-white text-[#090613] rounded-full py-2 lg:py-4 text-sm lg:text-base font-semibold shadow-[0px_2px_10px_rgba(0,0,0,0.03)"
              >
                Submit
              </button>
            </form>
          </div>

          <div className="w-[310px] md:w-[440px] lg:w-[510px] xl:w-[840px] bg-white rounded-[30px] border border-[#E8F2FF] p-4 md:px-6 md:pt-6 md:pb-0 lg:px-10 lg:pt-10 relative mt-10 md:mt-0">
            <div className="absolute -top-10 right-0 lg:-top-16 lg:-right-4 w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] xl:w-[180px] xl:h-[180px]">
              <Image src={FooterIcon} alt="Footer" />
            </div>
            <div className="flex gap-3 md:gap-10 xl:gap-[90px] pt-4 lg:pt-0">
              {/* Menu */}
              <div>
                <p className="text-sm xl:text-base text-[#090613]/60 mb-1">
                  MENU
                </p>
                <ul className="space-y-1 lg:space-y-3 text-sm md:text-lg lg:text-xl xl:text-2xl text-[#090613] font-medium">
                  <li
                    onClick={() => {
                      handleScrollTo("about");
                    }}
                    className="  cursor-pointer"
                  >
                    About Us
                  </li>
                  <li
                    onClick={() => {
                      handleScrollTo("services");
                    }}
                    className=" cursor-pointer"
                  >
                    Our Services
                  </li>
                  <li
                    onClick={() => {
                      handleScrollTo("case");
                    }}
                    className=" cursor-pointer"
                  >
                    Our Cases
                  </li>
                  <li className=" cursor-pointer">Tools We Use</li>
                  <li
                    onClick={() => {
                      handleScrollTo("faqs");
                    }}
                    className=" cursor-pointer"
                  >
                    FAQs
                  </li>
                </ul>
              </div>

              {/* Socials */}
              <div>
                <p className="text-sm xl:text-base text-[#090613]/60 mb-1">
                  SOCIALS
                </p>

                <div className="flex gap-1 md:gap-3">
                  <div
                    onClick={() => window.open(uri.Linkedin, "_blank")}
                    className="relative group cursor-pointer"
                  >
                    <Image
                      src={LinkedInIcon}
                      alt="LinkedIn"
                      className="group-hover:opacity-0 transition-opacity duration-200"
                    />
                    <div>
                      <Image
                        src={LinkedInHoverIcon}
                        alt="LinkedIn Hover"
                        className="absolute inset-0 opacity-0 border border-[#E8F2FF] backdrop-blur-sm rounded-[10px] group-hover:opacity-100 transition-opacity duration-200"
                      />
                      <div className="pointer-events-none absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-[50px] h-[18px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-[#23E8F9] to-[#4552D6] blur-[14px] rounded-full" />
                    </div>
                  </div>

                  <div
                    onClick={() => window.open(uri.TWITTER, "_blank")}
                    className="relative group cursor-pointer"
                  >
                    <Image
                      src={TwitterIcon}
                      alt="Twitter"
                      className="group-hover:opacity-0 transition-opacity duration-200"
                    />
                    <div>
                      <Image
                        src={TwitterHoverIcon}
                        alt="Twitter Hover"
                        className="absolute inset-0 opacity-0 border  border-[#E8F2FF] backdrop-blur-sm rounded-[10px] group-hover:opacity-100 transition-opacity duration-200"
                      />{" "}
                      <div className="pointer-events-none absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-[50px] h-[18px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-[#23E8F9] to-[#4552D6] blur-[14px] rounded-full" />
                    </div>
                  </div>

                  <div
                    onClick={() => window.open(uri.Github, "_blank")}
                    className="relative group cursor-pointer"
                  >
                    <Image
                      src={GitIcon}
                      alt="GitHub"
                      className="group-hover:opacity-0 transition-opacity duration-200"
                    />
                    <div>
                      <Image
                        src={GitHoverIcon}
                        width={50}
                        height={50}
                        alt="GitHub Hover"
                        className="absolute inset-0 opacity-0 border  border-[#E8F2FF] backdrop-blur-sm rounded-[10px] group-hover:opacity-100 transition-opacity duration-200 "
                      />{" "}
                      <div className="pointer-events-none absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-[50px] h-[18px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-[#23E8F9] to-[#4552D6] blur-[14px] rounded-full" />
                    </div>
                  </div>

                  <div
                    onClick={() => window.open(uri.Upwork, "_blank")}
                    className="relative group cursor-pointer"
                  >
                    <Image
                      src={UpworkIcon}
                      alt="Upwork"
                      className="group-hover:opacity-0 transition-opacity duration-200"
                    />
                    <div>
                      <Image
                        src={UpworkHoverIcon}
                        alt="Upwork Hover"
                        className="absolute inset-0 opacity-0 border  border-[#E8F2FF] backdrop-blur-sm rounded-[10px] group-hover:opacity-100 transition-opacity duration-200 "
                      />
                      <div className="pointer-events-none absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-[50px] h-[18px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-[#23E8F9] to-[#4552D6] blur-[14px] rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col xl:flex-row md:justify-between mt-10 md:mt-0">
              <div className="hidden xl:flex items-end text-sm xl:text-base text-[#090613]/40">
                ©2025 Faticore Technologies
              </div>
              <div className="w-[300px] md:flex md:flex-col md:ml-[145px] lg:ml-[180px] xl:ml-0 xl:mb-8">
                <h4 className="text-base md:text-[18px] lg:text-xl font-medium text-[#090613] mb-3">
                  For <span className="text-[#09061380]">Any</span> <br />
                  Queries, Reach Out
                </h4>

                <div className="flex items-center gap-3 bg-[#FBFCFF] rounded-[10px] p-4 mb-2 text-sm md:text-base font-medium text-[#090613] w-[280px] md:w-[240px]">
                  <span className="text-[#4552D6] text-lg md:text-xl">
                    <PiPhoneFill />
                  </span>
                  <span>+92 311 2987370</span>
                </div>

                <div className="flex items-center gap-3 bg-[#FBFCFF] rounded-[10px] p-4 mb-2 text-sm md:text-base font-medium text-[#090613] w-[280px] md:w-[240px]">
                  <span className="text-[#4552D6] text-lg md:text-xl">
                    <AiFillMail />
                  </span>
                  <span>Contact@faticore.com</span>
                </div>
              </div>
              <div className="block xl:hidden text-center md:text-left text-xs lg:text-sm text-[#090613]/40 md:pt-3 lg:pt-12">
                ©2025 Faticore Technologies
              </div>
            </div>
          </div>
        </div>

        <div className="font-Sora text-[82px] md:text-[205px] lg:text-[230px] xl:text-[315px] font-semibold text-center text-white opacity-50 lg:leading-none">
          Faticore
        </div>
      </div>
    </div>
  );
};

export default Footer;
