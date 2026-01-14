import { StaticImageData } from "next/image";

import sercviceCard1 from "@assets/servicescard1.svg";
import sercviceCard2 from "@assets/servicescard2.svg";
import sercviceCard3 from "@assets/servicescard1.svg";
import sercviceCard4 from "@assets/servicescard2.svg";

export interface Project {
  title: string;
  description1: string;
  src: StaticImageData;
}

export const projects: Project[] = [
  {
    title: "Scalable, high-performance websites built for growth.",
    description1:
      "We create fast, secure, and responsive web solutions tailored to your business goals.",
    src: sercviceCard1,
  },
  {
    title: "Scalable, high-performance websites built for growth.",
    description1:
      "A pixel-perfect replica of EthLinq featuring Web3-ready pages, elegant gradients, and a smooth Next.js architecture. Designed for real-world blockchain platforms.",
    src: sercviceCard2,
  },
  {
    title: "Scalable, high-performance websites built for growth.",
    description1:
      "A visually stunning 3D-driven website with immersive animations, custom layouts, and an interactive architecture built using Next.js and Tailwind.",
    src: sercviceCard3,
  },
  {
    title: "Scalable, high-performance websites built for growth.",
    description1:
      "A fully functional Web3 DApp UI implementing Base chain concepts with a premium clean layout, crypto components, and modern gradient themes.",
    src: sercviceCard4,
  },
];
