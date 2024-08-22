import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

interface ToolCardProps {
  title: string;
  description: string;
  imageUrl: string;
  href: string;
}

const ToolCard: React.FC<ToolCardProps> = ({
  title,
  description,
  imageUrl,
  href,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={href}>
      <motion.div
        className="relative w-full h-64 bg-white/90 rounded-lg shadow-md overflow-hidden group transition-all duration-300 ease-in-out hover:bg-white/70"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <div className="absolute inset-0 overflow-hidden bg-[#111111] dark:bg-[#111111]">
          <Image
            src={imageUrl}
            // src="/assets/tools/shadows.png"
            alt={title}
            layout="fill"
            objectFit="cover"
            className="transition-all duration-300 ease-in-out group-hover:scale-110 opacity-60 group-hover:opacity-70 group-hover:blur-sm"
          />
        </div>
        <div className="relative z-10 p-4 h-full flex flex-col justify-between text-white">
          <div className="self-end px-4 py-2 group-hover:rotate-[-45deg] transition-all duration-500">
            <FaArrowRightLong />
          </div>
          <div>
            <ToolTitle
              isHovered={isHovered}
              className="text-2xl font-extrabold mb-4"
            >
              {title}
            </ToolTitle>
            <p className="text-sm">{description}</p>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

import clsx from "clsx";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

interface ToolTitleProps {
  children: string;
  isHovered: boolean; // New prop
  duration?: number;
  stagger?: number;
  fontSize?: string;
  fontWeight?: string | number;
  textTransform?: "uppercase" | "lowercase" | "capitalize" | "none";
  initialColor?: string;
  hoverColor?: string;
  lineHeight?: number | string;
  easing?: string;
  className?: string;
}

const ToolTitle: React.FC<ToolTitleProps> = ({
  children,
  isHovered,
  duration = 0.25,
  stagger = 0.025,
  fontSize = "4xl",
  fontWeight = "extrabold",
  textTransform = "uppercase",
  initialColor = "white",
  hoverColor = "white",
  lineHeight = 0.9,
  easing = "easeInOut",
  className,
}) => {
  return (
    <motion.div
      className={clsx(
        "relative block overflow-hidden whitespace-nowrap",
        "transition-colors duration-300",
        className,
      )}
      style={{ lineHeight }}
    >
      <motion.div>
        {children.split("").map((letter, index) => (
          <motion.span
            key={index}
            initial={{ y: 0 }}
            animate={isHovered ? { y: "-100%" } : { y: 0 }}
            transition={{
              duration,
              ease: easing,
              delay: stagger * index,
            }}
            className="inline-block"
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
      <motion.div className="absolute inset-0">
        {children.split("").map((letter, index) => (
          <motion.span
            key={index}
            initial={{ y: "100%" }}
            animate={isHovered ? { y: 0 } : { y: "100%" }}
            transition={{
              duration,
              ease: easing,
              delay: stagger * index,
            }}
            className={clsx("inline-block", `text-${hoverColor}`)}
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ToolCard;
