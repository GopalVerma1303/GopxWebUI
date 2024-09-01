import React from "react";
import ZoomBlurCard from "@/components/ui/zoom-blur-card";

const ZoomBlurCardDemo: React.FC = () => {
  return (
    <div className="w-full max-w-md">
      <ZoomBlurCard
        title="Zoom Blur Card"
        description="The card component with zoom blur effect"
        imageUrl="/assets/tools/colors.png"
      />
    </div>
  );
};

export default ZoomBlurCardDemo;
