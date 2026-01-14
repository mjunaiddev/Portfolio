'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

import ball1 from "@assets/workball/workball1.svg"
import ball2 from "@assets/workball/workball2.svg"
import ball3 from "@assets/workball/workball3.svg"
import ball4 from "@assets/workball/workball4.svg"
import ball5 from "@assets/workball/workball5.svg"
import ball6 from "@assets/workball/workball6.svg"
import ball7 from "@assets/workball/workball7.svg"
import ball8 from "@assets/workball/workball8.svg"
import ball9 from "@assets/workball/workball9.svg"



type OrbitConfig = {
  radiusX: number;
  radiusY: number;
  hoverExpand: number;
};

const getResponsiveConfig = (width: number): OrbitConfig => {
  if (width < 1280) return { radiusX: 260, radiusY: 180, hoverExpand: 60 };
  if (width < 1536) return { radiusX: 340, radiusY: 230, hoverExpand: 80 };
  if (width < 1920) return { radiusX: 400, radiusY: 270, hoverExpand: 100 };
  return { radiusX: 450, radiusY: 300, hoverExpand: 120 };
};

const Works = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textHoverRef = useRef(false);
  const waveFrameRef = useRef<number | null>(null);
  const waveTimeRef = useRef(0);

  const images = [
    ball1,
    ball2,
    ball3,
    ball4,
    ball5,
    ball6,
    ball7,
    ball8,
    ball9,
    ball5,
  ]; // 10 icons

  const [isMobile, setIsMobile] = useState(false);
  const [config, setConfig] = useState<OrbitConfig>({
    radiusX: 450,
    radiusY: 300,
    hoverExpand: 120,
  });

  const strength = 0.18;
  const maxInfluence = 350;

  /* -------------------- Responsive -------------------- */
  useEffect(() => {
    const update = () => {
      setConfig(getResponsiveConfig(window.innerWidth));
      setIsMobile(window.innerWidth < 768);
    };

    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  /* -------------------- Mobile Positions (3-2-TEXT-2-3) -------------------- */
  const mobilePositions = images.map((_, i) => {
    const spacingX = 120;

    // Row 1 → top 3
    if (i < 3) {
      return {
        x: (i - 1) * spacingX,
        y: -360,
      };
    }

    // Row 2 → 2 icons
    if (i < 5) {
      return {
        x: (i - 3 - 0.5) * spacingX,
        y: -220,
      };
    }

    // Row 3 → 2 icons (below text)
    if (i < 7) {
      return {
        x: (i - 5 - 0.5) * spacingX,
        y: 220,
      };
    }

    // Row 4 → bottom 3
    return {
      x: (i - 7 - 1) * spacingX,
      y: 360,
    };
  });

  /* -------------------- Update Icons -------------------- */
  const updateIcons = (mouseX: number, mouseY: number) => {
    const icons = containerRef.current?.querySelectorAll<HTMLDivElement>('.orbit-icon');
    if (!icons) return;

    const radiusX = textHoverRef.current ? config.radiusX + config.hoverExpand : config.radiusX;
    const radiusY = textHoverRef.current ? config.radiusY + config.hoverExpand : config.radiusY;

    icons.forEach((icon, index) => {
      let baseX: number;
      let baseY: number;

      if (isMobile) {
        baseX = mobilePositions[index].x;
        baseY = mobilePositions[index].y;
      } else {
        const angle = (index / images.length) * Math.PI * 2;
        baseX = radiusX * Math.cos(angle);
        baseY = radiusY * Math.sin(angle);
      }

      const dx = mouseX - baseX;
      const dy = mouseY - baseY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const influence = Math.max(0, 1 - distance / maxInfluence);

      const offsetX = mouseX * strength * influence;
      const offsetY = mouseY * strength * influence;

      icon.style.transform = `
        translate(
          calc(-50% + ${baseX + offsetX}px),
          calc(-50% + ${baseY + offsetY}px)
        )
      `;
    });
  };

  /* -------------------- Reset -------------------- */
  const resetIcons = () => {
    const icons = containerRef.current?.querySelectorAll<HTMLDivElement>('.orbit-icon');
    if (!icons) return;

    icons.forEach((icon, index) => {
      let x: number;
      let y: number;

      if (isMobile) {
        x = mobilePositions[index].x;
        y = mobilePositions[index].y;
      } else {
        const angle = (index / images.length) * Math.PI * 2;
        const radiusX = textHoverRef.current
          ? config.radiusX + config.hoverExpand
          : config.radiusX;
        const radiusY = textHoverRef.current
          ? config.radiusY + config.hoverExpand
          : config.radiusY;

        x = radiusX * Math.cos(angle);
        y = radiusY * Math.sin(angle);
      }

      icon.style.transform = `
        translate(
          calc(-50% + ${x}px),
          calc(-50% + ${y}px)
        )
      `;
    });
  };

  /* -------------------- Mouse -------------------- */
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const mouseX = e.clientX - (rect.left + rect.width / 2);
    const mouseY = e.clientY - (rect.top + rect.height / 2);

    updateIcons(mouseX, mouseY);
  };

  /* -------------------- Wave -------------------- */
  const startTextWave = () => {
    stopTextWave();

    const animate = () => {
      waveTimeRef.current += 0.04;

      const waveX = Math.cos(waveTimeRef.current) * 120;
      const waveY = Math.sin(waveTimeRef.current * 1.2) * 80;

      updateIcons(waveX, waveY);
      waveFrameRef.current = requestAnimationFrame(animate);
    };

    animate();
  };

  const stopTextWave = () => {
    if (waveFrameRef.current) {
      cancelAnimationFrame(waveFrameRef.current);
      waveFrameRef.current = null;
    }
  };

  /* -------------------- Render -------------------- */
  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        textHoverRef.current = false;
        stopTextWave();
        resetIcons();
      }}
      className="relative mt-[200px] flex items-center justify-center h-[1050px] w-full overflow-hidden"
    >
      {/* Center Text */}
      <div
        onMouseEnter={() => {
          textHoverRef.current = true;
          resetIcons();
          startTextWave();
        }}
        onMouseLeave={() => {
          textHoverRef.current = false;
          stopTextWave();
          resetIcons();
        }}
        className="
          text-center text-[#090613]
          text-[42px] sm:text-[56px] lg:text-[68px]
          max-w-[618px] z-10
          leading-tight
          select-none cursor-pointer
        "
      >
        Works <span className="text-[#09061380]">with your</span> favourite tools...
      </div>

      {/* Icons */}
      {images.map((src, index) => {
        const x = isMobile
          ? mobilePositions[index].x
          : config.radiusX * Math.cos((index / images.length) * Math.PI * 2);

        const y = isMobile
          ? mobilePositions[index].y
          : config.radiusY * Math.sin((index / images.length) * Math.PI * 2);

        return (
          <div
            key={index}
            className="orbit-icon absolute transition-transform duration-700 ease-out"
            style={{
              left: '50%',
              top: '50%',
              transform: `
                translate(
                  calc(-50% + ${x}px),
                  calc(-50% + ${y}px)
                )
              `,
            }}
          >
            <Image
              src={src}
              alt={`icon-${index}`}
              className="cursor-pointer transition-transform duration-300 hover:scale-110"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Works;
