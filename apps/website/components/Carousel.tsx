import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const images: string[] = [
  "/assets/brands/nextjs.svg",
  "/assets/brands/tailwind.svg",
  "/assets/brands/framer-motion.svg",
  "/assets/brands/react.svg",
  "/assets/brands/gsap.png",
];

const Carousel: React.FC = () => {
  return (
    <div className="relative w-full h-32 overflow-hidden max-w-7xl mx-auto">
      <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white dark:from-[#111111] dark:via-transparent dark:to-[#111111] z-10" />
      <div className="flex animate-scroll">
        {[...images, ...images, ...images, ...images, ...images].map(
          (src, index) => (
            <div key={index} className="flex-shrink-0 mx-4">
              <Image
                src={src}
                alt={`Logo ${index + 1}`}
                width={80}
                height={80}
                className="object-contain w-10 h-20 filter dark:invert"
              />
            </div>
          ),
        )}
      </div>
    </div>
  );
};

export default Carousel;
