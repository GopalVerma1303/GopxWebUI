import React from "react";
import ImageTooltip from "@/components/ui/image-tooltip";

const ImageTooltipDemo: React.FC = () => {
  return (
    <section className="w-full max-w-2xl">
      Outside of programming, being a mountain guy from{" "}
      <ImageTooltip
        hoverImage={{
          src: "https://gopx.dev/personal/me/utkd.jpg",
          alt: "my og",
          width: 200,
          height: 100,
        }}
        text="Uttarakhand"
      />
      , I enjoy mountain trekking and exploring valleys. Right now I live in{" "}
      <ImageTooltip
        text="Chandigarh"
        hoverImage={{
          src: "https://gopx.dev/personal/me/chd.jpg",
          alt: "my og",
          width: 200,
          height: 100,
        }}
      />
      . If you are around, feel free to reach me out, we could have some{" "}
      <span className="italic font-bold">chai</span> or work together.
    </section>
  );
};

export default ImageTooltipDemo;
