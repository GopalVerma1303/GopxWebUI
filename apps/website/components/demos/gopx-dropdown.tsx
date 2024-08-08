import React from "react";
import Dropdown from "@/components/Dropdown/Dropdown";

type WorldTourDestination =
  | "🗽 New York, USA"
  | "🗼 Paris, France"
  | "🏰 London, UK"
  | "🛕 New Delhi, India"
  | "🗾 Tokyo, Japan"
  | "🌉 Sydney, Australia";

interface WorldTourDropdownProps {
  value: WorldTourDestination;
  onChange: (destination: WorldTourDestination) => void;
}

const WorldTourDropdown: React.FC<WorldTourDropdownProps> = ({
  value,
  onChange,
}) => {
  const destinationOptions: WorldTourDestination[] = [
    "🗽 New York, USA",
    "🗼 Paris, France",
    "🏰 London, UK",
    "🛕 New Delhi, India",
    "🗾 Tokyo, Japan",
    "🌉 Sydney, Australia",
  ];

  return (
    <Dropdown<WorldTourDestination>
      value={value}
      onChange={onChange}
      options={destinationOptions}
      renderOption={(option) => option}
      placeholder="Select a world tour destination"
      className="w-full"
    />
  );
};

export default WorldTourDropdown;
