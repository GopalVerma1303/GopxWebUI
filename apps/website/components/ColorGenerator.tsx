//@ts-nocheck
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HexColorPicker, RgbaColorPicker } from "react-colorful";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { TinyColor } from "@ctrl/tinycolor";
import { useRouter } from "next/router";
import {
  FiCheck,
  FiCopy,
  FiRefreshCw,
  FiSave,
  FiShare2,
  FiTrash2,
} from "react-icons/fi";
import toast, { Toaster } from "react-hot-toast";

const ColorGenerator: React.FC = () => {
  const router = useRouter();
  const [color, setColor] = useState<string>("#1fb6ff");
  const [colorFormat, setColorFormat] = useState<"hex" | "rgb" | "hsl">("hex");
  const [savedColors, setSavedColors] = useState<string[]>([]);
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    const savedColorsFromStorage = localStorage.getItem("savedColors");
    if (savedColorsFromStorage) {
      setSavedColors(JSON.parse(savedColorsFromStorage));
    }

    if (router.isReady) {
      const { color: urlColor } = router.query;
      if (typeof urlColor === "string") {
        const decodedColor = decodeURIComponent(urlColor);
        if (new TinyColor(decodedColor).isValid) {
          setColor(decodedColor);
        }
      }
    }
  }, [router.isReady, router.query]);

  const tinyColor = new TinyColor(color);

  const getColorString = (format: "hex" | "rgb" | "hsl"): string => {
    switch (format) {
      case "hex":
        return tinyColor.toHexString();
      case "rgb":
        return tinyColor.toRgbString();
      case "hsl":
        return tinyColor.toHslString();
      default:
        return color;
    }
  };

  const handleColorChange = (newColor: string) => {
    setColor(newColor);
  };

  const generateRandomColor = () => {
    const newColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setColor(newColor);
  };

  const saveColor = () => {
    if (!savedColors.includes(color)) {
      const updatedColors = [...savedColors, color];
      setSavedColors(updatedColors);
      localStorage.setItem("savedColors", JSON.stringify(updatedColors));
      toast.success("Color saved!");
    } else {
      toast.error("This color is already saved!");
    }
  };

  const copyColor = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const shareColor = () => {
    const shareUrl = `${window.location.origin}/colors?color=${encodeURIComponent(color)}`;
    navigator.clipboard.writeText(shareUrl);
    toast.success("Share URL copied to clipboard!");
  };

  const deleteColor = (colorToDelete: string) => {
    const updatedColors = savedColors.filter((c) => c !== colorToDelete);
    setSavedColors(updatedColors);
    localStorage.setItem("savedColors", JSON.stringify(updatedColors));
    toast.success("Color deleted!");
  };

  return (
    <div className="min-h-screen">
      <div className=" mx-auto rounded-lg ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <motion.div
              className="w-full h-64 rounded-lg shadow-md"
              style={{ backgroundColor: color }}
              animate={{ backgroundColor: color }}
              transition={{ duration: 0.0 }}
            />

            <div className="mt-4">
              <HexColorPicker
                color={color}
                onChange={handleColorChange}
                className="w-full"
              />
            </div>
          </div>

          <div className="mt-4">
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                Color Format
              </label>
              <select
                value={colorFormat}
                onChange={(e) =>
                  setColorFormat(e.target.value as "hex" | "rgb" | "hsl")
                }
                className="w-full p-2 border dark:border-white/50 border-black/50 rounded focus:outline-none"
              >
                <option value="hex">HEX</option>
                <option value="rgb">RGB</option>
                <option value="hsl">HSL</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">
                Color Value
              </label>
              <div className="flex">
                <input
                  type="text"
                  value={getColorString(colorFormat)}
                  readOnly
                  className="w-full p-2 border dark:border-white/50 border-black/50 rounded-tl rounded-bl focus:outline-none"
                />
                <CopyToClipboard
                  text={getColorString(colorFormat)}
                  onCopy={copyColor}
                >
                  <button className="bg-black dark:bg-white bg-opacity-10 border-t border-r border-b border-black/50 dark:border-white text-black dar:text-white dark:text-black px-3 rounded-r transition">
                    {copied ? <FiCheck /> : <FiCopy />}
                  </button>
                </CopyToClipboard>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <button
                onClick={generateRandomColor}
                className="bg-black dark:bg-white bg-opacity-10 text-black text-opacity-90 px-4 py-2 rounded-md hover:bg-opacity-20 focus:bg-opacity-25 active:bg-opacity-30 transition-all duration-200 flex items-center justify-center shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50"
              >
                <FiRefreshCw className="mr-2 opacity-70" />
                <span className="font-medium">Random</span>
              </button>
              <button
                onClick={saveColor}
                className="bg-black dark:bg-white bg-opacity-10 text-black text-opacity-90 px-4 py-2 rounded-md hover:bg-opacity-20 focus:bg-opacity-25 active:bg-opacity-30 transition-all duration-200 flex items-center justify-center shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50"
              >
                <FiSave className="mr-2 opacity-70" />
                <span className="font-medium">Save</span>
              </button>
              <button
                onClick={shareColor}
                className="bg-black dark:bg-white bg-opacity-10 text-black text-opacity-90 px-4 py-2 rounded-md hover:bg-opacity-20 focus:bg-opacity-25 active:bg-opacity-30 transition-all duration-200 flex items-center justify-center shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50"
              >
                <FiShare2 className="mr-2 opacity-70" />
                <span className="font-medium">Share</span>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Color Information</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <InfoCard title="HEX" value={tinyColor.toHexString()} />
            <InfoCard title="RGB" value={tinyColor.toRgbString()} />
            <InfoCard title="HSL" value={tinyColor.toHslString()} />
            <InfoCard title="CMYK" value={tinyColor.toCmykString()} />
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Saved Colors</h2>
          <div className="flex flex-wrap gap-4">
            {savedColors.map((savedColor, index) => (
              <div key={index} className="relative group">
                <motion.div
                  className="w-12 h-12 rounded cursor-pointer"
                  style={{ backgroundColor: savedColor }}
                  whileHover={{ scale: 1.1 }}
                  onClick={() => setColor(savedColor)}
                />
                <button
                  className="absolute top-0 right-0 bg-red-800 text-white rounded-full p-[2px] m-[1px] opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteColor(savedColor);
                  }}
                >
                  <FiTrash2 size={10} />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Color Palette</h2>
          <div className="flex flex-wrap gap-8">
            {[
              "analogous",
              "monochromatic",
              "splitcomplement",
              "triad",
              "tetrad",
            ].map((scheme) => (
              <div key={scheme} className="w-full sm:w-auto">
                <h3 className="text-lg font-semibold mb-2 capitalize">
                  {scheme}
                </h3>
                <div className="flex">
                  {tinyColor[scheme]().map((color, index) => (
                    <motion.div
                      key={index}
                      className="w-8 h-8 cursor-pointer"
                      style={{ backgroundColor: color.toHexString() }}
                      whileHover={{ scale: 1.1 }}
                      onClick={() => setColor(color.toHexString())}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const InfoCard: React.FC<{ title: string; value: string }> = ({
  title,
  value,
}) => (
  <div className="bg-black/15 dark:bg-white/15 p-4 rounded-lg">
    <h3 className="text-sm font-semibold mb-1">{title}</h3>
    <p className="text-xs">{value}</p>
  </div>
);

export default ColorGenerator;
