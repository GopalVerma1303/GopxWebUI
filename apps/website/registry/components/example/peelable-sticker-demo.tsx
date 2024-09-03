import React from "react";
import PeelableSticker from "@/components/ui/peelable-sticker";

const PeelableStickerDemo: React.FC = () => {
  const stickerImage = "/logo.png";
  const message = "peek-a-boo 🎉";

  return <PeelableSticker stickerImage={stickerImage} message={message} />;
};

export default PeelableStickerDemo;
