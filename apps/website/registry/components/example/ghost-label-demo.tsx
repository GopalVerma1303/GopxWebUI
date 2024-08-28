import React from "react";
import GhostLabel from "@/components/ui/ghost-label";

const GhostLabelDemo: React.FC = () => {
  return (
    <div className="w-full max-w-2xl mx-auto py-12 px-4">
      <div className="relative ml-[30px] mt-20">
        <GhostLabel text="1920" />
        <p className="w-full max-w-[600px] text-sm font-serif text-justify">
          The film 1920: Evil Returns follows poet Jaidev, who helps a woman
          with amnesia, only for her to become possessed by a malevolent spirit.
          As he struggles to save her, dark secrets unfold, intertwining love
          and horror in a chilling narrative. This supernatural horror film,
          released in 2012, is a quasi-sequel to 1920 and features themes of
          possession and redemption
        </p>
      </div>
    </div>
  );
};

export default GhostLabelDemo;
