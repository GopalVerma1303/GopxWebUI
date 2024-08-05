import React from "react";
import { motion } from "framer-motion";

const DropdownMenu: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.2 }}
    className="absolute z-10 w-full mt-1 bg-white dark:bg-[#111111] border border-black/10 dark:border-white/10 rounded-md shadow-lg overflow-hidden"
  >
    {children}
  </motion.div>
);

export default DropdownMenu;
