import React from "react";
import StackedCarousel from "@/components/ui/stacked-carousel";

const StackedCarouselDemo: React.FC = () => {
  const images = [
    "https://picsum.photos/id/1018/300/300",
    "https://picsum.photos/id/1015/300/300",
    "https://picsum.photos/id/1019/300/300",
    "https://picsum.photos/id/1021/300/300",
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
