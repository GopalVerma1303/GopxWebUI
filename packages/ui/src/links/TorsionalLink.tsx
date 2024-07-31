import React from "react";
import "../styles.css";
import { motion } from "framer-motion";
import clsx from "clsx";

interface TorsionalLinkProps {
  href: string;
  children: string;
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

const TorsionalLink: React.FC<TorsionalLinkProps> = ({
  href,
  children,
  duration = 0.25,
  stagger = 0.025,
  fontSize = "4xl",
  fontWeight = "bold",
  textTransform = "uppercase",
  initialColor = "black",
  hoverColor = "blue-700",
  lineHeight = 0.9,
  easing = "easeInOut",
  className,
}) => {
  return (
    <motion.a
      className={clsx(
        "relative block overflow-hidden whitespace-nowrap",
        `text-${fontSize}`,
        `font-${fontWeight}`,
        textTransform,
        `text-${initialColor}`,
        `hover:text-${hoverColor}`,
        "transition-colors duration-300",
        className,
      )}
      style={{ lineHeight }}
      initial="initial"
      whileHover="hovered"
      href={href}
    >
      <motion.div>
        {children.split("").map((letter, index) => (
          <motion.span
            key={index}
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" },
            }}
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
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
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
    </motion.a>
  );
};

export default TorsionalLink;
