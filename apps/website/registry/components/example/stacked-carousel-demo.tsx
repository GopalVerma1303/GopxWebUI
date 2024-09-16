import React from "react";
import StackedCarousel from "@/components/ui/stacked-carousel";

const StackedCarouselDemo: React.FC = () => {
  const images = [
    "/assets/components/carousels/p1.jpg",
    "/assets/components/carousels/p2.jpg",
    "/assets/components/carousels/p3.jpg",
    "/assets/components/carousels/p4.jpg",
  ];

  return (
    <div className="w-full h-full flex justify-center items-center pt-12 pb-4">
      <StackedCarousel
        images={images}
        width={300}
        height={400}
        borderColor="white"
        borderWidth={8}
      />
    </div>
  );
};

export default StackedCarouselDemo;
