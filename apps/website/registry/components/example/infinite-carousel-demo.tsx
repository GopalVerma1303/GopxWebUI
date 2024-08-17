import React from "react";
import InfiniteCarousel from "@/components/ui/infinite-carousel";

const InfiniteCarouselDemo: React.FC = () => {
  return (
    <div className="flex flex-col gap-y-8 w-full">
      <InfiniteCarousel
        images={[
          "https://webui.gopx.dev/assets/brands/nextjs.svg",
          "https://webui.gopx.dev/assets/brands/tailwind.svg",
          "https://webui.gopx.dev/assets/brands/framer-motion.svg",
          "https://webui.gopx.dev/assets/brands/react.svg",
          "https://webui.gopx.dev/assets/brands/gsap.png",
        ]}
        direction="right"
        speed={25}
        itemWidth={50}
        itemHeight={50}
      />
      <InfiniteCarousel
        images={[
          "https://webui.gopx.dev/assets/brands/nextjs.svg",
          "https://webui.gopx.dev/assets/brands/tailwind.svg",
          "https://webui.gopx.dev/assets/brands/framer-motion.svg",
          "https://webui.gopx.dev/assets/brands/react.svg",
          "https://webui.gopx.dev/assets/brands/gsap.png",
        ]}
        direction="left"
        speed={25}
        itemWidth={50}
        itemHeight={50}
      />
    </div>
  );
};

export default InfiniteCarouselDemo;
