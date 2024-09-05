import React, { useMemo, useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  angle: number;
  distance: number;
  speed: number;
}

interface GalaxyButtonProps {
  text: string;
  gradientColors: string[];
  shimmerColor?: string;
  textColor?: string;
  fontSize?: string;
  padding?: string;
  starCount?: number;
  className?: string;
  onClick?: () => void;
}

function useIsHovered() {
  const [isHovered, setIsHovered] = useState(false);
  return {
    isHovered,
    handleMouseEnter: () => setIsHovered(true),
    handleMouseLeave: () => setIsHovered(false),
  };
}

const shiverVariants = {
  hover: {
    x: [0, -1, 1, -1, 1, 0],
    y: [0, 1, -1, 1, -1, 0],
    transition: {
      x: { repeat: Infinity, repeatType: "mirror", duration: 0.4 },
      y: { repeat: Infinity, repeatType: "mirror", duration: 0.4, delay: 0.1 },
    },
  },
};

export default function GalaxyButton({
  text,
  gradientColors,
  shimmerColor = "white",
  textColor = "white",
  fontSize = "1rem",
  padding = "0.875rem 2.5rem",
  starCount = 100,
  className = "",
  onClick,
}: GalaxyButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [stars, setStars] = useState<Star[]>([]);
  const { isHovered, handleMouseEnter, handleMouseLeave } = useIsHovered();

  const shadowStyles = useMemo(() => {
    const createShadow = (opacity: number) =>
      gradientColors
        .map(
          (color) =>
            `inset 0 0 10px ${color}${Math.round(opacity * 255)
              .toString(16)
              .padStart(2, "0")}`,
        )
        .join(",");

    return {
      default: createShadow(0.5),
      hover: createShadow(0.7),
      active: createShadow(0.9),
    };
  }, [gradientColors]);

  useEffect(() => {
    const generateStars = () => {
      if (buttonRef.current) {
        const { width, height } = buttonRef.current.getBoundingClientRect();
        const centerX = width / 2;
        const centerY = height / 2;
        setStars(
          Array.from({ length: starCount }, (_, i) => {
            const angle = Math.random() * 2 * Math.PI;
            const distance = Math.max(width, height) / 2;
            return {
              id: i,
              x: centerX + Math.cos(angle) * distance,
              y: centerY + Math.sin(angle) * distance,
              size: Math.random() * 2 + 1,
              angle,
              distance,
              speed: Math.random() * 0.5 + 0.5,
            };
          }),
        );
      }
    };
    generateStars();
    window.addEventListener("resize", generateStars);
    return () => window.removeEventListener("resize", generateStars);
  }, [starCount]);

  const renderStars = (duration: (star: Star) => number) =>
    stars.map((star) => (
      <motion.div
        key={star.id}
        className="absolute rounded-full bg-white"
        style={{
          left: star.x,
          top: star.y,
          width: star.size,
          height: star.size,
        }}
        animate={{
          x: -Math.cos(star.angle) * star.distance * star.speed,
          y: -Math.sin(star.angle) * star.distance * star.speed,
          scale: [1, 0],
          opacity: [1, 0],
        }}
        transition={{
          duration: duration(star),
          repeat: Infinity,
          ease: "linear",
          delay: Math.random() * 2,
        }}
      />
    ));

  const gradientStyle = `linear-gradient(to right, ${gradientColors.join(", ")})`;

  return (
    <motion.button
      ref={buttonRef}
      className={`group relative z-0 overflow-hidden rounded-full focus:outline-none ${className}`}
      style={
        {
          "--spread": "90deg",
          "--shimmer-color": shimmerColor,
          "--radius": "9999px",
          "--speed": "3s",
          "--cut": "0.05em",
          "--bg": "white",
          background: gradientStyle,
          padding: padding,
          fontSize: fontSize,
          color: textColor,
        } as React.CSSProperties
      }
      whileTap={{ scale: 0.95 }}
      whileHover={{
        boxShadow: `0 0 40px ${gradientColors[0]}70, 0 0 40px ${gradientColors[1]}50, 0 0 60px ${gradientColors[2]}30`,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      <div className="absolute inset-0.5 rounded-full bg-black" />

      <div className="absolute inset-0 -z-30 overflow-visible blur-[0px] [container-type:size]">
        <div className="absolute inset-0 h-[100cqh] animate-slide [aspect-ratio:1] [border-radius:0] [mask:none]">
          <div className="animate-spin-around absolute inset-[-100%] w-auto rotate-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]" />
        </div>
      </div>

      <div
        className="absolute inset-0 rounded-full transition-all duration-300 ease-in-out"
        style={{
          boxShadow: shadowStyles.default,
        }}
      />

      <div
        className="absolute inset-0 rounded-full opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100"
        style={{
          boxShadow: shadowStyles.hover,
        }}
      />

      <div
        className="absolute inset-0 rounded-full opacity-0 transition-all duration-300 ease-in-out group-active:opacity-100"
        style={{
          boxShadow: shadowStyles.active,
        }}
      />

      <div className="absolute inset-0 overflow-hidden rounded-full">
        <div className="absolute -inset-[100%] animate-galaxy-glare bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
      </div>

      <div className="absolute inset-0 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
        {renderStars((star) => star.speed)}
      </div>

      <div className="absolute inset-0 opacity-100 transition-opacity duration-300 ease-in-out group-hover:opacity-0">
        {renderStars((star) => 2 / star.speed)}
      </div>

      <motion.span
        className="relative z-10 font-light inline-block"
        variants={shiverVariants}
        animate={isHovered ? "hover" : "initial"}
      >
        <span className="relative z-10 font-light inline-block transition-all duration-500 ease-in-out group-hover:scale-90 group-hover:animate-shiver">
          {text}
        </span>
      </motion.span>
    </motion.button>
  );
}
