import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import {
  getColors,
  getColorFormat,
  type Color,
  type ColorFormat,
} from "@/utils/colors";

const CustomDropdown: React.FC<{
  value: ColorFormat;
  onChange: (value: ColorFormat) => void;
}> = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const options: ColorFormat[] = ["className", "hex", "rgb", "hsl"];

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
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="border border-black/10 dark:border-white/10 bg-gray-100 dark:bg-[#111111] focus:outline-none dark:text-white text-black text-sm rounded-md px-3 py-1  flex items-center justify-between w-40 transition-colors duration-200"
      >
        {value}
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
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-10 w-40 mt-1 bg-white dark:bg-[#111111] border border-gray-200 dark:border-white/10 rounded-md shadow-lg overflow-hidden"
          >
            {options.map((option) => (
              <button
                key={option}
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-sm dark:text-white text-black hover:bg-black/10  dark:hover:bg-white/10 transition-colors duration-150"
              >
                {option}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ColorSwatch: React.FC<{ color: Color; format: ColorFormat }> = ({
  color,
  format,
}) => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`Copied ${format}: ${text}`);
  };

  const colorFormat = getColorFormat(color);

  return (
    <motion.div
      className="flex flex-col items-center"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div
        className={`w-full aspect-square rounded-t cursor-pointer`}
        style={{ backgroundColor: color.hex }}
        onClick={() =>
          copyToClipboard(
            format === "className" ? color.className : colorFormat[format],
          )
        }
      />
      <div
        className="w-full text-[10px] p-1 rounded-b text-center truncate"
        style={{ color: color.foreground, backgroundColor: color.hex }}
      >
        {format === "className" ? color.className : colorFormat[format]}
      </div>
    </motion.div>
  );
};

const ColorRow: React.FC<{ name: string; colors: Color[] }> = ({
  name,
  colors,
}) => {
  const [format, setFormat] = useState<ColorFormat>("className");
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold text-black dark:text-white">
          {name}
        </h3>
        <CustomDropdown value={format} onChange={setFormat} />
      </div>
      <div
        ref={scrollRef}
        className="grid grid-flow-col auto-cols-[100px] md:grid-cols-11 gap-2 overflow-x-auto md:overflow-x-visible no-scrollbar overflow-y-hidden p-1"
      >
        {colors.map((color) => (
          <ColorSwatch key={color.id} color={color} format={format} />
        ))}
      </div>
    </div>
  );
};

const ColorPalette: React.FC = () => {
  const colorRows = getColors();
  return (
    <div className="mx-auto  w-full">
      <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">
        Tailwind Color Palette
      </h2>
      {colorRows.map((row) => (
        <ColorRow key={row.name} name={row.name} colors={row.colors} />
      ))}
      <Toaster />
    </div>
  );
};

export default ColorPalette;
