//@ts-nocheck

import React, { useCallback, useMemo, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Dropdown from "./Dropdown/Dropdown";
import CopyableInput from "./CopyableInput";

const gradientTypes = [
  "To Top",
  "To Top Right",
  "To Right",
  "To Bottom Right",
  "To Bottom",
  "To Bottom Left",
  "To Left",
  "To Top Left",
];

const directionMap = {
  "to top": "to-t",
  "to top right": "to-tr",
  "to right": "to-r",
  "to bottom right": "to-br",
  "to bottom": "to-b",
  "to bottom left": "to-bl",
  "to left": "to-l",
  "to top left": "to-tl",
};

const codeFormats = ["css", "tailwind", "scss"];

const GradientTypeDropdown = ({ value, onChange }) => (
  <Dropdown
    value={value}
    onChange={onChange}
    options={gradientTypes}
    renderOption={(option) => option}
    placeholder="Select gradient type"
    className="w-full"
  />
);

const CodeFormatDropdown = ({ value, onChange }) => (
  <Dropdown
    value={value}
    onChange={onChange}
    options={codeFormats}
    renderOption={(option) => option.toLowerCase()}
    placeholder="Select code format"
    className="w-full"
  />
);

const ColorInput = ({ label, value, onChange }) => (
  <div>
    <label className="block text-sm font-medium mb-1">{label}</label>
    <input
      type="color"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full h-10 rounded"
    />
  </div>
);

const CopyButton = ({ copied, onClick }) => (
  <button
    className="absolute top-2 right-2 bg-black bg-opacity-50 text-white px-3 py-1 rounded hover:bg-opacity-70 transition-opacity"
    onClick={onClick}
  >
    {copied ? "Copied!" : "Copy"}
  </button>
);

const GradientGenerator: React.FC = () => {
  const [colors, setColors] = useState({
    start: "#ffffff",
    end: "#000000",
  });
  const [gradientType, setGradientType] = useState("To Right");
  const [codeFormat, setCodeFormat] = useState("css");
  const [copied, setCopied] = useState(false);

  const handleColorChange = useCallback((type, value) => {
    setColors((prev) => ({ ...prev, [type]: value }));
  }, []);

  const getGradientStyle = useMemo(() => {
    const { start, end } = colors;
    const direction = gradientType.toLowerCase().replace(/ /g, " ");
    return `linear-gradient(${direction}, ${start}, ${end})`;
  }, [colors, gradientType]);

  const getGradientCode = useMemo(() => {
    const { start, end } = colors;
    const direction = gradientType.toLowerCase().replace(/ /g, " ");

    const tailwindDirection = directionMap[direction] || "";
    let tailwindCode = `bg-gradient-${tailwindDirection} from-[${start}] to-[${end}]`;

    const getGradientStyle = `linear-gradient(${direction}, ${start}, ${end})`;
    const cssCode = `background: ${getGradientStyle};`;

    let scssCode = `$gradient: ${getGradientStyle};\nbackground: $gradient;`;

    switch (codeFormat) {
      case "css":
        return cssCode;
      case "tailwind":
        return tailwindCode;
      case "scss":
        return scssCode;
      default:
        return cssCode;
    }
  }, [colors, gradientType, codeFormat]);

  const copyCode = useCallback(() => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, []);

  return (
    <div className="w-full max-w-7xl p-4 mx-auto mt-4 mb-24">
      <div className="flex space-x-4 mb-4">
        <ColorInput
          label="Color 1"
          value={colors.start}
          onChange={(value) => handleColorChange("start", value)}
        />
        <ColorInput
          label="Color 2"
          value={colors.end}
          onChange={(value) => handleColorChange("end", value)}
        />
        <div className="w-[150px]">
          <label className="block text-sm font-medium mb-1">
            Gradient Type
          </label>
          <GradientTypeDropdown
            value={gradientType}
            onChange={setGradientType}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Code Format</label>
          <CodeFormatDropdown value={codeFormat} onChange={setCodeFormat} />
        </div>
      </div>
      <div className="relative">
        <div
          className="w-full h-96 rounded-lg cursor-pointer"
          style={{ background: getGradientStyle }}
          onClick={copyCode}
        />
        <CopyButton copied={copied} onClick={copyCode} />
      </div>
      <div className="mt-4">
        <label className="block text-sm font-medium mb-1">Generated Code</label>
        <CopyableInput
          value={getGradientCode}
          editable={false}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default GradientGenerator;
