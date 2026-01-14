import { Urbanist } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {},
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      container: {
        padding: "10px",
        center: true,
      },
      fontFamily: {
        Urbanist: ["Urbanist"],
        Lufga: ["Lufga", "sans-serif"],
      },
      backgroundImage: {
        homebg: "url('/assets/bg.png')",
        footerbg: "url('/assets/footer-bg.svg')",
        footerMobileBg: "url('/assets/footer-mobile-bg.svg')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
