import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import DropdownButton from "./DropdownButton";
import DropdownMenu from "./DropdownMenu";
import DropdownItem from "./DropdownItem";

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
