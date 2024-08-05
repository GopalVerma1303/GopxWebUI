import React from "react";
import Dropdown from "./Dropdown/Dropdown";

type ColorFormat = "hex" | "rgb" | "hsl";

interface ColorFormatSelectorProps {
  value: ColorFormat;
  onChange: (format: ColorFormat) => void;
}

const ColorFormatSelector: React.FC<ColorFormatSelectorProps> = ({
  value,
  onChange,
}) => {
  const colorFormatOptions: ColorFormat[] = ["hex", "rgb", "hsl"];

  return (
    <Dropdown<ColorFormat>
      value={value}
      onChange={onChange}
      options={colorFormatOptions}
      renderOption={(option) => option.toUpperCase()}
      placeholder="Select color format"
      className="w-full"
    />
  );
};

export default ColorFormatSelector;
