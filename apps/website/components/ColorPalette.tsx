import React, { useState } from "react";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import {
  getColors,
  getColorFormat,
  type Color,
  type ColorFormat,
} from "@/utils/colors";

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

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold text-white">{name}</h3>
        <select
          className="bg-white/15 text-white text-sm rounded px-1 py-1 focus:outline-none"
          value={format}
          onChange={(e) => setFormat(e.target.value as ColorFormat)}
        >
          <option value="className">className</option>
          <option value="hex">hex</option>
          <option value="rgb">rgb</option>
          <option value="hsl">hsl</option>
        </select>
      </div>
      <div className="grid grid-cols-11 gap-2">
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
    <div className="container mx-auto mt-24">
      <h2 className="text-2xl font-bold mb-4">Tailwind Color Palette</h2>
      {colorRows.map((row) => (
        <ColorRow key={row.name} name={row.name} colors={row.colors} />
      ))}
      <Toaster position="bottom-center" />
    </div>
  );
};

export default ColorPalette;
