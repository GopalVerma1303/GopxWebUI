import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface InteractiveLinkProps {
  href: string;
  children: string;
}

const DURATION = 0.25;
const STAGGER = 0.025;

const InteractiveLink: React.FC<InteractiveLinkProps> = ({
  href,
  children,
}) => {
  return (
    <Link href={href} passHref>
      <motion.a
        className="relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase text-blue-600 hover:text-blue-700 transition-colors duration-300 sm:text-5xl md:text-6xl lg:text-7xl"
        style={{ lineHeight: 0.9 }}
        initial="initial"
        whileHover="hovered"
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
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * index,
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
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * index,
              }}
              className="inline-block text-blue-700"
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </motion.a>
    </Link>
  );
};

export default InteractiveLink;
