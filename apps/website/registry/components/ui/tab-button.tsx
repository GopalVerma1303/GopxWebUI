import React from "react";
import { motion } from "framer-motion";

const TabButton: React.FC = () => {
  return (
    <motion.button
      className="px-4 py-2 font-bold rounded-md text-xl bg-gradient-to-r from-indigo-400 to-blue-400 text-white dark:from-indigo-600 dark:to-blue-600"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Tab Button
    </motion.button>
  );
};

export default TabButton;
