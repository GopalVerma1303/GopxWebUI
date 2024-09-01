import React from "react";
import HoverFillCard from "@/components/ui/hover-fill-card";
import { LuWallpaper } from "react-icons/lu";

const HoverFillCardDemo: React.FC = () => {
  return (
    <div className="w-full max-w-xs">
      <HoverFillCard title="Backgrounds" Icon={LuWallpaper} />
    </div>
  );
};

export default HoverFillCardDemo;
