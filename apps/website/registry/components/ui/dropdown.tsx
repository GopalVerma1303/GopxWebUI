"use client";

import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

export interface DropdownProps<T> {
  value: T;
  onChange: (value: T) => void;
  options: T[];
  renderOption?: (option: T) => React.ReactNode;
  placeholder?: string;
  className?: string;
}

function Dropdown<T extends string | number>({
  value,
  onChange,
  options,
  renderOption,
  placeholder = "Select an option",
  className = "",
}: DropdownProps<T>) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <DropdownButton
        value={value}
        placeholder={placeholder}
        onClick={() => setIsOpen(!isOpen)}
        isOpen={isOpen}
      />
      <AnimatePresence>
        {isOpen && (
          <DropdownMenu>
            {options.map((option) => (
              <DropdownItem
                key={option}
                option={option}
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
              >
                {renderOption ? renderOption(option) : option}
              </DropdownItem>
            ))}
          </DropdownMenu>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Dropdown;

interface DropdownButtonProps {
  value: string | number;
  placeholder: string;
  onClick: () => void;
  isOpen: boolean;
}

const DropdownButton: React.FC<DropdownButtonProps> = ({
  value,
  placeholder,
  onClick,
  isOpen,
}) => (
  <button
    onClick={onClick}
    className="w-full border border-black/10 dark:border-white/10 bg-white dark:bg-[#111111] focus:outline-none dark:text-white text-black text-sm rounded-md px-3 py-2 flex items-center justify-between transition-colors duration-200"
  >
    <span>{value || placeholder}</span>
    <svg
      className={`w-4 h-4 ml-2 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  </button>
);

interface DropdownItemProps<T> {
  option: T;
  onClick: () => void;
  children: React.ReactNode;
}

function DropdownItem<T>({ option, onClick, children }: DropdownItemProps<T>) {
  return (
    <button
      onClick={onClick}
      className="block w-full text-left px-4 py-2 text-sm dark:text-white text-black hover:bg-black/10 dark:hover:bg-white/10 transition-colors duration-150"
    >
      {children}
    </button>
  );
}

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
