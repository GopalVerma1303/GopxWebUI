import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TinyColor } from "@ctrl/tinycolor";
import { CopyToClipboard } from "react-copy-to-clipboard";
import toast from "react-hot-toast";
import { FaCopy, FaRandom, FaSync } from "react-icons/fa";
import { FaPlus, FaTrash } from "react-icons/fa6";
import { FiUpload } from "react-icons/fi";

interface ImageUploadPreviewProps {
  generateBoxShadow: () => string;
}

const ImageUploadPreview: React.FC<ImageUploadPreviewProps> = ({
  generateBoxShadow,
}) => {
  const [image, setImage] = useState<string | null>(null);
  const [hover, setHover] = useState<boolean>(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setImage(e.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-full flex justify-center mb-20">
      <motion.div
        className="w-64 h-64 bg-white dark:bg-[#333333] border-[2px] border-black/15 dark:border-white/15 rounded-lg shadow-md overflow-hidden relative"
        style={{ boxShadow: generateBoxShadow() }}
        animate={{ boxShadow: generateBoxShadow() }}
        whileHover="hover"
        onHoverStart={() => setHover(true)}
        onHoverEnd={() => setHover(false)}
      >
        <AnimatePresence>
          {!image && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <motion.div
                variants={{
                  hover: {
                    rotateY: 180,
                    scale: 1.1,
                    transition: { duration: 0.3 },
                  },
                }}
                className="mb-4"
              >
                <FiUpload className="text-5xl text-gray-400 dark:text-gray-300" />
              </motion.div>
              <motion.p
                className="text-sm text-gray-500 dark:text-gray-400 text-center px-4"
                variants={{
                  hover: {
                    scale: 1.05,
                    transition: { duration: 0.3 },
                  },
                }}
              >
                Click or drag image to upload
              </motion.p>
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-violet-500 opacity-0"
                variants={{
                  hover: {
                    opacity: 0.1,
                    transition: { duration: 0.3 },
                  },
                }}
              />
            </motion.div>
          )}
          {image && (
            <motion.img
              src={image}
              alt="Uploaded preview"
              className="w-full h-full object-cover"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
          )}
        </AnimatePresence>
        <motion.div
          className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0"
          variants={{
            hover: {
              opacity: image ? 1 : 0,
              transition: { duration: 0.3 },
            },
          }}
        >
          <p className="text-white text-sm">Click to change image</p>
        </motion.div>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
      </motion.div>
    </div>
  );
};

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
    if (layers.length === 1) {
      toast("Cannot remove the last layer.");
      return; // Exit the function if there's only one layer
    }
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
    return `shadow-[${layers
      .map(
        (layer) =>
          `${layer.x}px_${layer.y}px_${layer.blur}px_${layer.spread}px_${layer.color.toHexString()}${
            layer.inset ? "_inset" : ""
          }`,
      )
      .join(",")}]`;
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
        <div className="w-full md:w-1/2 flex justify-center mb-20">
          <ImageUploadPreview generateBoxShadow={generateBoxShadow} />
        </div>
        <div className="w-full">
          <div className="mb-4 flex-col md:flex-row flex gap-4 ">
            <div className="flex flex-col">
              <label className="block text-sm font-medium mb-2">Options</label>
              <div className="flex gap-2">
                <button
                  onClick={addLayer}
                  className="bg-black dark:bg-white bg-opacity-10 text-black text-opacity-90 p-3 rounded-md hover:bg-opacity-20 focus:bg-opacity-25 active:bg-opacity-30 transition-all duration-200 flex items-center justify-center shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50"
                >
                  <FaPlus />
                </button>
                <button
                  onClick={randomizeLayers}
                  className="bg-black dark:bg-white bg-opacity-10 text-black text-opacity-90 p-3 rounded-md hover:bg-opacity-20 focus:bg-opacity-25 active:bg-opacity-30 transition-all duration-200 flex items-center justify-center shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50"
                >
                  <FaRandom />
                </button>
                <button
                  onClick={resetLayers}
                  className="bg-black  dark:bg-white bg-opacity-10 text-black text-opacity-90 p-3 rounded-md hover:bg-opacity-20 focus:bg-opacity-25 active:bg-opacity-30 transition-all duration-200 flex items-center justify-center shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50"
                >
                  <FaSync />
                </button>
              </div>
            </div>

            <div className="flex flex-col">
              <label className="block text-sm font-medium mb-2">Code</label>
              <div className="flex gap-2">
                <CopyToClipboard
                  text={generateCSSCode()}
                  onCopy={() => handleCopy("CSS")}
                >
                  <button className="bg-black gap-1 text-[12px] dark:bg-white bg-opacity-10 text-black text-opacity-90 p-3 rounded-md hover:bg-opacity-20 focus:bg-opacity-25 active:bg-opacity-30 transition-all duration-200 flex items-center justify-center shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50">
                    <FaCopy /> CSS
                  </button>
                </CopyToClipboard>
                <CopyToClipboard
                  text={generateSCSSCode()}
                  onCopy={() => handleCopy("SCSS")}
                >
                  <button className="bg-black  gap-1 text-[12px] dark:bg-white bg-opacity-10 text-black text-opacity-90 p-3 rounded-md hover:bg-opacity-20 focus:bg-opacity-25 active:bg-opacity-30 transition-all duration-200 flex items-center justify-center shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50">
                    <FaCopy /> SCSS
                  </button>
                </CopyToClipboard>
                <CopyToClipboard
                  text={generateTailwindCode()}
                  onCopy={() => handleCopy("Tailwind")}
                >
                  <button className="bg-black  gap-1 text-[12px] dark:bg-white bg-opacity-10 text-black text-opacity-90 p-3 rounded-md hover:bg-opacity-20 focus:bg-opacity-25 active:bg-opacity-30 transition-all duration-200 flex items-center justify-center shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50">
                    <FaCopy /> Tailwind
                  </button>
                </CopyToClipboard>
              </div>
            </div>
          </div>
          <div className="overflow-y-auto no-scrollbar h-[400px] mt-4">
            {layers.map((layer, index) => (
              <div
                key={index}
                className="mb-4 p-4 bg-black/10 dark:bg-[#222222] rounded-md shadow-sm"
              >
                <div className="flex justify-between mb-4">
                  <h3 className="font-bold mb-2">Layer {index + 1}</h3>
                  <button
                    onClick={() => removeLayer(index)}
                    className=" text-black dark:text-white text-[15px] p-1 rounded-md hover:!text-red-500"
                  >
                    <FaTrash />
                  </button>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  <label className="flex items-center">
                    <span className="w-20 md:w-24">X:</span>
                    <input
                      type="number"
                      value={layer.x}
                      onChange={(e) =>
                        updateLayer(index, { x: parseInt(e.target.value) })
                      }
                      className="rounded-md p-1 w-full bg-black/10 dark:bg-white/10"
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
                      className="rounded-md p-1 w-full bg-black/10 dark:bg-white/10"
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
                      className="rounded-md p-1 w-full bg-black/10 dark:bg-white/10"
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
                      className="rounded-md p-1 w-full bg-black/10 dark:bg-white/10"
                    />
                  </label>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <input
                    type="color"
                    value={layer.color.toHexString()}
                    onChange={(e) =>
                      updateLayer(index, {
                        color: new TinyColor(e.target.value),
                      })
                    }
                    className="mr-8"
                  />
                  <input
                    type="text"
                    value={layer.color.toRgbString()}
                    onChange={(e) =>
                      updateLayer(index, {
                        color: new TinyColor(e.target.value),
                      })
                    }
                    className="rounded-md p-1 w-full bg-black/10 dark:bg-white/10"
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
