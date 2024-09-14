"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface ShimmerTextProps {
  phrases: string[];
  animationDuration?: number;
  fadeDuration?: number;
}

const ShimmerText: React.FC<ShimmerTextProps> = ({
  phrases,
  animationDuration = 3000,
  fadeDuration = 300,
}) => {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, animationDuration);
    return () => clearInterval(interval);
  }, [phrases, animationDuration]);

  return (
    <div className={`relative ${inter.className}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: fadeDuration / 1000 }}
          className="text-3xl font-medium text-gray-400 whitespace-nowrap overflow-hidden"
        >
          <div
            className="animate-slide"
            style={{
              backgroundImage:
                "linear-gradient(to right, #9CA3AF 0%, #9CA3AF 40%, #111111 50%, #9CA3AF 60%, #9CA3AF 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              backgroundSize: "200% 100%",
              animation: `slide ${animationDuration}ms linear infinite`,
            }}
          >
            {phrases[index]}
          </div>
        </motion.div>
      </AnimatePresence>
      <style jsx>{`
        @keyframes slide {
          0%,
          100% {
            background-position: 100% 50%;
          }
          93.33% {
            background-position: 0% 50%;
          }
          93.34%,
          99.99% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </div>
  );
};

export default ShimmerText;
