import React, { useState, useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  angle: number;
  distance: number;
  speed: number;
}

export default function GalaxyButton() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [stars, setStars] = useState<Star[]>([]);
  const controls = useAnimation();

  useEffect(() => {
    const generateStars = () => {
      if (buttonRef.current) {
        const { width, height } = buttonRef.current.getBoundingClientRect();
        const centerX = width / 2;
        const centerY = height / 2;
        setStars(
          Array.from({ length: 50 }, (_, i) => {
            const angle = Math.random() * 2 * Math.PI;
            const distance = Math.max(width, height) / 2; // Start from the edge
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
  }, []);

  return (
    <motion.button
      ref={buttonRef}
      className="group relative z-0 overflow-hidden rounded-full px-10 py-3.5 text-md font-semibold text-white focus:outline-none"
      style={
        {
          "--spread": "180deg", // Increased from 90deg to 180deg
          "--shimmer-color": "white",
          "--radius": "9999px",
          "--speed": "3s",
          "--cut": "0.05em",
          "--bg": "black",
          background: "linear-gradient(to right, #8B5CF6, #3B82F6, #06B6D4)",
        } as React.CSSProperties
      }
      animate={controls}
      whileTap={{ scale: 0.95 }}
      whileHover={{
        boxShadow:
          "0 0 20px rgba(139, 92, 246, 0.7), 0 0 40px rgba(59, 130, 246, 0.5), 0 0 60px rgba(6, 182, 212, 0.3)",
      }}
    >
      {/* Gradient border and background */}
      <div className="absolute inset-0.5 rounded-full bg-black" />

      {/* Shimmer effect */}
      <div className="absolute inset-0 -z-30 overflow-visible blur-[2px] [container-type:size]">
        <div className="absolute inset-0 h-[100cqh] animate-slide [aspect-ratio:1] [border-radius:0] [mask:none]">
          <div className="animate-spin-around absolute inset-[-100%] w-auto rotate-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]" />
        </div>
      </div>

      {/* Highlight effect */}
      <div className="absolute inset-0 rounded-full shadow-[inset_0_0_10px_rgba(139,92,246,0.5),inset_0_0_10px_rgba(59,130,246,0.5),inset_0_0_10px_rgba(6,182,212,0.5)] transition-all duration-300 ease-in-out group-hover:shadow-[inset_0_0_15px_rgba(139,92,246,0.7),inset_0_0_15px_rgba(59,130,246,0.7),inset_0_0_15px_rgba(6,182,212,0.7)] group-active:shadow-[inset_0_0_20px_rgba(139,92,246,0.9),inset_0_0_20px_rgba(59,130,246,0.9),inset_0_0_20px_rgba(6,182,212,0.9)]" />

      {/* Glare effect */}
      <div className="absolute inset-0 overflow-hidden rounded-full">
        <div className="absolute -inset-[100%] animate-galaxy-glare bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
      </div>

      {/* Stars */}
      {stars.map((star) => (
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
            duration: 2 / star.speed,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Button text */}
      <span className="relative z-10 font-light">Galaxy Button</span>
    </motion.button>
  );
}
