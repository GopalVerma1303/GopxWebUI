import React from "react";

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

export default DropdownButton;
