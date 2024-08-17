import React from "react";

interface ShowcaseProps {
  component: React.ReactElement;
}

const Showcase: React.FC<ShowcaseProps> = ({ component }: ShowcaseProps) => {
  return (
    <div className="relative bg-preview-container bg-preview-container-light rounded-xl p-6 py-20 h-full min-h-[500px] flex justify-center items-center">
      <div className="w-full h-full flex items-center justify-center">
        {component}
      </div>
    </div>
  );
};

export default Showcase;
