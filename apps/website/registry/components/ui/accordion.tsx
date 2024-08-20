"use client";

import React from "react";
import { motion } from "framer-motion";

interface AccordionProps {
  title: string;
  description: string;
  isActive: boolean;
  toggleActive: () => void;
}

const Accordion: React.FC<AccordionProps> = ({
  title,
  description,
  isActive,
  toggleActive,
}) => (
  <div className="border border-black/50 dark:border-white/50 rounded-md mb-2">
    <button
      className="w-full text-left p-4 flex justify-between items-center"
      onClick={toggleActive}
    >
      <span className="font-semibold">{title}</span>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={{ rotate: isActive ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <polyline points="6 9 12 15 18 9"></polyline>
      </motion.svg>
    </button>
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: isActive ? "auto" : 0 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden"
    >
      <div className="p-4 border-t border-black/50 dark:border-white/50">
        {description}
      </div>
    </motion.div>
  </div>
);

export default Accordion;
