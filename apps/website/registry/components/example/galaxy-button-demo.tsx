import React from "react";
import GalaxyButton from "@/components/ui/galaxy-button";

export default function GalaxyButtonDemo() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 ">
      <GalaxyButton
        text="Galaxy Button"
        gradientColors={["#9500FD", "#3B82F6", "#00ffb6"]}
        fontSize="1.2rem"
        padding="1.25rem 4rem"
        onClick={() => console.log("Galaxy Button clicked!")}
      />
    </div>
  );
}
