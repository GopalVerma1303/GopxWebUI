import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

interface TabButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  label: string;
  onClick: () => void;
  className?: string;
}

const TabButton: React.FC<TabButtonProps> = ({
  label,
  onClick,
  type,
  className,
}) => {
  return (
    <motion.button
      type={type}
      className={cn(
        `px-4 py-2 font-bold rounded-md text-xl bg-gradient-to-r from-indigo-400 to-blue-400 text-white dark:from-indigo-600 dark:to-blue-600`,
        className,
      )}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {label}
    </motion.button>
  );
};

export default TabButton;
