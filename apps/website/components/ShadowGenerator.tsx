import React, { useState } from "react";
import { motion } from "framer-motion";
import { TinyColor } from "@ctrl/tinycolor";
import { CopyToClipboard } from "react-copy-to-clipboard";
import toast from "react-hot-toast";
import { BsPlus } from "react-icons/bs";
import { CopyIcon } from "./icons";
import { FaCopy, FaRandom } from "react-icons/fa";
import { LuRefreshCcw } from "react-icons/lu";
import { FaDumpster, FaTrash } from "react-icons/fa6";

interface ShadowLayer {
  x: number;
  y: number;
  blur: number;
  spread: number;
  color: TinyColor;
  inset: boolean;
}

const ShadowGenerator: React.FC = () => {
  const [layers, setLayers] = useState<ShadowLayer[]>([
    {
      x: 0,
      y: 20,
      blur: 20,
      spread: 10,
      color: new TinyColor("#00000024"),
      inset: false,
    },
  ]);
  const [activeLayer, setActiveLayer] = useState(0);
  const [codeFormat, setCodeFormat] = useState<string>("css");

  const updateLayer = (index: number, updates: Partial<ShadowLayer>) => {
    const newLayers = [...layers];
    newLayers[index] = { ...newLayers[index], ...updates };
    setLayers(newLayers);
  };

  const addLayer = () => {
    setLayers([
      ...layers,
      {
        x: 0,
        y: 0,
        blur: 0,
        spread: 0,
        color: new TinyColor("#000000"),
        inset: false,
      },
    ]);
    setActiveLayer(layers.length);
  };

  const removeLayer = (index: number) => {
    const newLayers = layers.filter((_, i) => i !== index);
    setLayers(newLayers);
    setActiveLayer(Math.min(activeLayer, newLayers.length - 1));
  };

  const generateBoxShadow = () => {
    return layers
      .map(
        (layer) =>
          `${layer.inset ? "inset " : ""}${layer.x}px ${layer.y}px ${layer.blur}px ${
            layer.spread
          }px ${layer.color.toRgbString()}`,
      )
      .join(", ");
  };

  const generateCSSCode = () => {
    return `box-shadow: ${generateBoxShadow()};`;
  };

  const generateSCSSCode = () => {
    return `$box-shadow: ${generateBoxShadow()};\n.box-shadow {\n  box-shadow: $box-shadow;\n}`;
  };

  const generateTailwindCode = () => {
    return `shadow-[${generateBoxShadow()}]`;
  };

  const getCode = () => {
    switch (codeFormat) {
      case "scss":
        return generateSCSSCode();
      case "tailwind":
        return generateTailwindCode();
      default:
        return generateCSSCode();
    }
  };

  const resetLayers = () => {
    setLayers([
      {
        x: 0,
        y: 20,
        blur: 20,
        spread: 10,
        color: new TinyColor("#00000024"),
        inset: false,
      },
    ]);
    setActiveLayer(0);
  };

  const randomizeLayers = () => {
    const randomLayers = Array.from({ length: 3 }, () => ({
      x: Math.floor(Math.random() * 20) - 10,
      y: Math.floor(Math.random() * 20) - 10,
      blur: Math.floor(Math.random() * 30),
      spread: Math.floor(Math.random() * 20),
      color: new TinyColor(
        `#${Math.floor(Math.random() * 16777215).toString(16)}`,
      ),
      inset: Math.random() < 0,
    }));
    setLayers(randomLayers);
    setActiveLayer(0);
  };

  const handleCopy = (format: string) => {
    toast.success(`${format} code copied to clipboard!`); // Display success message
  };

  return (
    <div className="container mx-auto p-4 my-24 mt-14">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/2 flex justify-center">
          <motion.div
            className="w-64 h-64  bg-white dark:bg-[#333333] border-[2px] border-black/15 dark:border-white/15 rounded-lg shadow-md"
            style={{ boxShadow: generateBoxShadow() }}
            animate={{ boxShadow: generateBoxShadow() }}
          ></motion.div>
        </div>
        <div className="w-full">
          <div className="mb-4 flex flex-col gap-2 md:flex-row">
            <button
              onClick={addLayer}
              className="bg-black dark:bg-white bg-opacity-10 text-black text-opacity-90 p-3 rounded-md hover:bg-opacity-20 focus:bg-opacity-25 active:bg-opacity-30 transition-all duration-200 flex items-center justify-center shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50"
            >
              <BsPlus />
            </button>
            <CopyToClipboard
              text={generateCSSCode()}
              onCopy={() => handleCopy("CSS")}
            >
              <button className="bg-black text-[10px] dark:bg-white bg-opacity-10 text-black text-opacity-90 p-3 rounded-md hover:bg-opacity-20 focus:bg-opacity-25 active:bg-opacity-30 transition-all duration-200 flex items-center justify-center shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50">
                <FaCopy /> CSS
              </button>
            </CopyToClipboard>
            <CopyToClipboard
              text={generateSCSSCode()}
              onCopy={() => handleCopy("SCSS")}
            >
              <button className="bg-black text-[10px] dark:bg-white bg-opacity-10 text-black text-opacity-90 p-3 rounded-md hover:bg-opacity-20 focus:bg-opacity-25 active:bg-opacity-30 transition-all duration-200 flex items-center justify-center shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50">
                <FaCopy /> SCSS
              </button>
            </CopyToClipboard>
            <CopyToClipboard
              text={generateTailwindCode()}
              onCopy={() => handleCopy("Tailwind")}
            >
              <button className="bg-black text-[10px] dark:bg-white bg-opacity-10 text-black text-opacity-90 p-3 rounded-md hover:bg-opacity-20 focus:bg-opacity-25 active:bg-opacity-30 transition-all duration-200 flex items-center justify-center shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50">
                <FaCopy /> Tailwind
              </button>
            </CopyToClipboard>
            <button
              onClick={randomizeLayers}
              className="bg-black text-[10px] dark:bg-white bg-opacity-10 text-black text-opacity-90 p-3 rounded-md hover:bg-opacity-20 focus:bg-opacity-25 active:bg-opacity-30 transition-all duration-200 flex items-center justify-center shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50"
            >
              <FaRandom />
            </button>
            <button
              onClick={resetLayers}
              className="bg-black text-[10px] dark:bg-white bg-opacity-10 text-black text-opacity-90 p-2 rounded-md hover:bg-opacity-20 focus:bg-opacity-25 active:bg-opacity-30 transition-all duration-200 flex items-center justify-center shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50"
            >
              <LuRefreshCcw />
            </button>
          </div>
          <div className="overflow-y-auto no-scrollbar h-[400px] mt-4">
            {layers.map((layer, index) => (
              <div
                key={index}
                className="mb-4 p-4 bg-black/10 dark:bg-[#222222] rounded-md shadow-sm"
              >
                <div className="flex justify-end">
                  <button
                    onClick={() => removeLayer(index)}
                    className=" text-white text-[15px] p-1 rounded-md hover:bg-red-600 transition-all duration-200"
                  >
                    <FaTrash />
                  </button>
                </div>

                <h3 className="font-bold mb-2">Layer {index + 1}</h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
                  <label className="flex items-center">
                    <span className="w-20 md:w-24">X:</span>
                    <input
                      type="number"
                      value={layer.x}
                      onChange={(e) =>
                        updateLayer(index, { x: parseInt(e.target.value) })
                      }
                      className="border rounded-md p-1 w-full"
                    />
                  </label>
                  <label className="flex items-center">
                    <span className="w-20 md:w-24">Y:</span>
                    <input
                      type="number"
                      value={layer.y}
                      onChange={(e) =>
                        updateLayer(index, { y: parseInt(e.target.value) })
                      }
                      className="border rounded-md p-1 w-full"
                    />
                  </label>
                  <label className="flex items-center">
                    <span className="w-20 md:w-24">Blur:</span>
                    <input
                      type="number"
                      value={layer.blur}
                      onChange={(e) =>
                        updateLayer(index, { blur: parseInt(e.target.value) })
                      }
                      className="border rounded-md p-1 w-full"
                    />
                  </label>
                  <label className="flex items-center">
                    <span className="w-20 md:w-24">Spread:</span>
                    <input
                      type="number"
                      value={layer.spread}
                      onChange={(e) =>
                        updateLayer(index, { spread: parseInt(e.target.value) })
                      }
                      className="border rounded-md p-1 w-full"
                    />
                  </label>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <input
                    type="color"
                    value={layer.color.toHexString()}
                    onChange={(e) =>
                      updateLayer(index, {
                        color: new TinyColor(e.target.value),
                      })
                    }
                    className="mr-2"
                  />
                  <input
                    type="text"
                    value={layer.color.toRgbString()}
                    onChange={(e) =>
                      updateLayer(index, {
                        color: new TinyColor(e.target.value),
                      })
                    }
                    className="p-1 border rounded-md w-full"
                  />
                </div>
                <div className="mt-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={layer.inset}
                      onChange={(e) =>
                        updateLayer(index, { inset: e.target.checked })
                      }
                      className="mr-2"
                    />
                    Inset
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShadowGenerator;
