import React from "react";

interface ShowcaseProps {
  children: React.ReactNode;
}

const Showcase: React.FC<ShowcaseProps> = ({ children }) => {
  return (
    <div className="border-[1px] border-black/10 dark:border-white/10 relative rounded-xl p-6 py-20  flex justify-center items-center min-h-[500px]">
      <div className="w-full h-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default Showcase;
