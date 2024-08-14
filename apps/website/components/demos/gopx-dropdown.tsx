import React, { useState } from "react";
import Dropdown from "@/components/Dropdown/Dropdown";

type WorldTourDestination =
  | ""
  | "🗽 New York, USA"
  | "🗼 Paris, France"
  | "🏰 London, UK"
  | "🛕 New Delhi, India"
  | "🗾 Tokyo, Japan"
  | "🌉 Sydney, Australia";

interface WorldTourDropdownProps {
  onChange: (destination: WorldTourDestination) => void;
}

const WorldTourDropdown: React.FC<WorldTourDropdownProps> = ({ onChange }) => {
  const [value, setValue] = useState<WorldTourDestination | "">("");

  const destinationOptions: WorldTourDestination[] = [
    "🗽 New York, USA",
    "🗼 Paris, France",
    "🏰 London, UK",
    "🛕 New Delhi, India",
    "🗾 Tokyo, Japan",
    "🌉 Sydney, Australia",
  ];

  const handleChange = (destination: WorldTourDestination) => {
    setValue(destination);
    onChange(destination);
  };

  return (
    <Dropdown<WorldTourDestination>
      value={value}
      onChange={handleChange}
      options={destinationOptions}
      renderOption={(option) => option}
      placeholder="Select a world tour destination"
      className="w-full"
    />
  );
};

export default WorldTourDropdown;
