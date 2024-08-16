import React from "react";
import { motion } from "framer-motion";

interface TabButtonProps {
  label: string;
  onClick: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({ label, onClick }) => {
  return (
    <motion.button
      className={`px-4 py-2 font-bold rounded-md text-xl bg-gradient-to-r from-indigo-400 to-blue-400 text-white dark:from-indigo-600 dark:to-blue-600`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {label}
    </motion.button>
  );
};

export default TabButton;
