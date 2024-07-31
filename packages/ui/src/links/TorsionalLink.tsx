import React from "react";
import { motion } from "framer-motion";

interface TorsionalLinkProps {
  href: string;
  children: string;
}

const DURATION = 0.25;
const STAGGER = 0.025;

const TorsionalLink: React.FC<TorsionalLinkProps> = ({ href, children }) => {
  return (
    <motion.a
      className="relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase text-black hover:text-black transition-colors duration-300 sm:text-5xl md:text-6xl lg:text-7xl"
      style={{ lineHeight: 0.9 }}
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
            className="inline-block text-black"
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
    </motion.a>
  );
};

export default TorsionalLink;
