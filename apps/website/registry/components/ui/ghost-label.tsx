import React from "react";

type GhostLabelProps = {
  text: string;
};

const GhostLabel: React.FC<GhostLabelProps> = ({ text }: GhostLabelProps) => {
  return (
    <p className="absolute -inset-y-[130px] -inset-x-[30px]  md:-inset-x-[50px] flex text-[150px] font-bold -z-0 opacity-10 font-anton">
      {text}
    </p>
  );
};

export default GhostLabel;
