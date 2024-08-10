import React from "react";

interface ShowcaseProps {
  children: React.ReactNode;
}

const Showcase: React.FC<ShowcaseProps> = ({ children }) => {
  return (
    <div className="bg-white shadow-2xl border border-black/50 rounded-xl h-full w-full max-w-5xl max-h-[500px] flex justify-center items-center">
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-full h-full"></div>
      </div>
    </div>
  );
};

export default Showcase;
