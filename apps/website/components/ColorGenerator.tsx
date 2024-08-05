//@ts-nocheck
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  FiUpload,
  FiDownload,
} from "react-icons/fi";
import toast, { Toaster } from "react-hot-toast";
import colorNamer from "color-namer";
import { saveAs } from "file-saver";
import { SketchPicker, ChromePicker, PhotoshopPicker } from "react-color";
import { FaRainbow } from "react-icons/fa6";
import { ColorResult } from "react-color";
import Dropdown from "./Dropdown/Dropdown";
import ColorFormatSelector from "./ColorFormatSelector";

interface CustomChromePickerProps {
  color: string;
  onChange: (color: ColorResult) => void;
}

const ColorGenerator: React.FC = () => {
  const router = useRouter();
  const [color, setColor] = useState<string>("#1fb6ff");
  const [colorFormat, setColorFormat] = useState<"hex" | "rgb" | "hsl">("hex");
  const [savedColors, setSavedColors] = useState<string[]>([]);
  const [copied, setCopied] = useState<boolean>(false);
  const [gradient, setGradient] = useState({
    start: "#ffffff",
    end: "#000000",
  });
  const [colorHistory, setColorHistory] = useState<string[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

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

  const handleColorChange = (colorResult: any) => {
    const { r, g, b, a } = colorResult.rgb;
    const newColor = `rgba(${r}, ${g}, ${b}, ${a})`;
    setColor(newColor);
  };

  const generateRandomColor = () => {
    try {
      let newColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      newColor = newColor.padEnd(7, "0");
      if (/^#[0-9A-F]{6}$/i.test(newColor)) {
        setColor(newColor);
      } else {
        throw new Error("Invalid color generated");
      }
    } catch (error) {
      console.error("Error generating color:", error);
      setColor("#000000");
    }
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

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement("canvas");
          canvas.width = img.width;
          canvas.height = img.height;
          const ctx = canvas.getContext("2d");
          ctx?.drawImage(img, 0, 0);
          const imageData = ctx?.getImageData(
            0,
            0,
            canvas.width,
            canvas.height,
          );
          if (imageData) {
            const dominantColor = getDominantColor(imageData.data);
            setColor(dominantColor);
          }
        };
        img.src = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    }
  };

  const getDominantColor = (imageData: Uint8ClampedArray) => {
    const colorCounts: { [key: string]: number } = {};
    for (let i = 0; i < imageData.length; i += 4) {
      const color = `#${((1 << 24) + (imageData[i] << 16) + (imageData[i + 1] << 8) + imageData[i + 2]).toString(16).slice(1)}`;
      colorCounts[color] = (colorCounts[color] || 0) + 1;
    }
    return Object.entries(colorCounts).reduce((a, b) =>
      a[1] > b[1] ? a : b,
    )[0];
  };

  const generateGradient = () => {
    const start = new TinyColor(color).spin(30).toHexString();
    const end = new TinyColor(color).spin(-30).toHexString();
    setGradient({ start, end });
  };

  const exportPalette = (format: "css" | "scss" | "json" | "svg") => {
    let content = "";
    const colors = [color, ...savedColors];

    switch (format) {
      case "css":
        content = colors.map((c, i) => `--color-${i + 1}: ${c};`).join("\n");
        break;
      case "scss":
        content = colors.map((c, i) => `$color-${i + 1}: ${c};`).join("\n");
        break;
      case "json":
        content = JSON.stringify(colors, null, 2);
        break;
      case "svg":
        content = `<svg width="100" height="${colors.length * 20}" xmlns="http://www.w3.org/2000/svg">
          ${colors.map((c, i) => `<rect y="${i * 20}" width="100" height="20" fill="${c}" />`).join("\n")}
        </svg>`;
        break;
    }

    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    saveAs(blob, `color-palette.${format}`);
  };

  const addToHistory = (newColor: ColorResult) => {
    const { r, g, b, a } = newColor.rgb;
    const colorString = `rgba(${r}, ${g}, ${b}, ${a})`;
    setColorHistory((prev) => [colorString, ...prev.slice(0, 18)]);
  };

  const toggleFavorite = (favoriteColor: string) => {
    setFavorites((prev) =>
      prev.includes(favoriteColor)
        ? prev.filter((c) => c !== favoriteColor)
        : [...prev, favoriteColor],
    );
  };

  return (
    <div className="mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="mt-4 mr-4">
            <SketchPicker
              width="100%"
              color={color}
              onChange={(newColor) => {
                handleColorChange(newColor);
                addToHistory(newColor);
              }}
            />
          </div>
        </div>
        <div className="w-full">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Color Name</label>
            <p className="text-md italic font-bold border border-black/50 dark:border-white/50 p-2 rounded">
              {colorNamer(color).ntc[0].name}
            </p>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Color Format
            </label>
            <ColorFormatSelector
              value={colorFormat}
              onChange={setColorFormat}
            />
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

          <div className="flex flex-wrap gap-2 mt-4">
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
            <button
              onClick={() => fileInputRef.current?.click()}
              className="bg-black dark:bg-white bg-opacity-10 text-black text-opacity-90 px-4 py-2 rounded-md hover:bg-opacity-20 focus:bg-opacity-25 active:bg-opacity-30 transition-all duration-200 flex items-center justify-center shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50"
            >
              <FiUpload className="mr-2 opacity-70" />
              <span className="font-medium">Upload</span>
            </button>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageUpload}
              accept="image/*"
              className="hidden"
            />
            <button
              onClick={generateGradient}
              className="bg-black dark:bg-white bg-opacity-10 text-black text-opacity-90 px-4 py-2 rounded-md hover:bg-opacity-20 focus:bg-opacity-25 active:bg-opacity-30 transition-all duration-200 flex items-center justify-center shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50"
            >
              <FaRainbow className="mr-2 opacity-70" />
              <span className="font-medium">Gradient</span>
            </button>
          </div>
          <div className="col-span-3 mt-4">
            <label className="block text-sm font-medium mb-2">
              Export Palette
            </label>
            <div className="flex flex-wrap gap-2">
              {["css", "scss", "json", "svg"].map((format) => (
                <button
                  key={format}
                  onClick={() =>
                    exportPalette(format as "css" | "scss" | "json" | "svg")
                  }
                  className="bg-black dark:bg-white bg-opacity-10 text-black text-opacity-90 px-4 py-2 rounded-md hover:bg-opacity-20 focus:bg-opacity-25 active:bg-opacity-30 transition-all duration-200 flex items-center justify-center shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50"
                >
                  <FiDownload className="mr-2 opacity-70" />
                  <span className="font-medium">{format.toUpperCase()}</span>
                </button>
              ))}
            </div>
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
        <h2 className="text-2xl font-bold mb-4">Gradient Preview</h2>
        <div
          className="w-full h-24 rounded-lg"
          style={{
            background: `linear-gradient(to right, ${gradient.start}, ${gradient.end})`,
          }}
        />
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Color History</h2>
        <div className="flex flex-wrap gap-4">
          {colorHistory.map((historyColor, index) => (
            <div key={index} className="relative group">
              <motion.div
                className="w-12 h-12 rounded cursor-pointer"
                style={{ backgroundColor: historyColor }}
                whileHover={{ scale: 1.1 }}
                onClick={() => setColor(historyColor)}
              />
              <button
                className="absolute top-0 right-0 bg-yellow-500 text-[10px] text-white rounded-full px-[2px] m-[1px] opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={() => toggleFavorite(historyColor)}
              >
                {favorites.includes(historyColor) ? "★" : "☆"}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Favorites</h2>
        <div className="flex flex-wrap gap-4">
          {favorites.map((favoriteColor, index) => (
            <div key={index} className="relative group">
              <motion.div
                className="w-12 h-12 rounded cursor-pointer"
                style={{ backgroundColor: favoriteColor }}
                whileHover={{ scale: 1.1 }}
                onClick={() => setColor(favoriteColor)}
              />
              <button
                className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-[2px] m-[1px] opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={() => toggleFavorite(favoriteColor)}
              >
                <FiTrash2 size={10} />
              </button>
            </div>
          ))}
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
